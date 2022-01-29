import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    Typography,
    CardActions,
    Button
} from "@mui/material";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import "./NewsCard.css";

function NewsCard({ article }) {

    const { setSelectedArticle } = useContext(DataContext);

    const getBackground = (img) => {
        return {
            backgroundImage: `url(${img})`,
            boxShadow: "inset 0 0 0 1000px rgb(255 255 255 / 70%)",
            backgroundSize: "cover"
        }
    }

    const isEmpty = (description, placeholder) => {
        if (description) return description;
        return placeholder;
    }

    const styles = {
        headerStyle: {
            margin: 0,
            padding: "2rem",
        },
        button: {
            display: "flex",
            alignItems: "center",
            color: "#426f86"
        },
        card: {
            justifyContent: "space-between"
        }
    }

    const config = {
        xs:2,
        sm:4,
        md:4
    }

    return (
        <Grid item xs={config.xs} sm={config.sm} md={config.md}>
            <Card className="card-hover">
                <CardHeader
                    sx={styles.headerStyle}
                    title={article.title}
                    style={getBackground(article.urlToImage)} />
                <CardContent>
                    <Typography variant="body2">
                        {isEmpty(article.description, "No description available")}
                    </Typography>
                </CardContent>
                <CardActions sx={styles.card}>
                    <Button size="small"
                        sx={styles.button}
                        className="btn-card"
                        onClick={() => setSelectedArticle(article)}>
                        READ MORE
                        <MoreHoriz />
                    </Button>
                    <Typography variant="subtitle">
                        By {isEmpty(article.author, "N/A")}
                    </Typography>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default NewsCard;
