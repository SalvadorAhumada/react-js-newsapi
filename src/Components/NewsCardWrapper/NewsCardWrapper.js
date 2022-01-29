import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import NewsCard from "../NewsCard/NewsCard";
import { Box, Grid, Alert } from "@mui/material";
import "./NewsCardWrapper.css";

function NewsCardWrapper() {

    const { news, noResults } = useContext(DataContext);

    const results = () => {

        if (noResults === true) {
            return(<Alert severity="warning">No results found!</Alert>)
        }

        return (<Box sx={styles.boxStyle}>
            <Grid container
                spacing={config.spacing}
                columns={config.columns}>
                {news.map((article, index) => {
                    return <NewsCard article={article} key={index} />
                })}
            </Grid>
        </Box>)

    }

    const styles = {
        boxStyle: {
            flexGrow: 1
        }
    }

    const config = {
        spacing: {
            xs: 1,
            md: 2,
            lg: 3
        },
        columns: {
            xs: 1,
            sm: 8,
            md: 12
        }
    }

    return (
        <div className="news-wrapper">
            {results()}
        </div >
    )
}

export default NewsCardWrapper;
