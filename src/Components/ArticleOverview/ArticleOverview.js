import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContext";
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Link
} from "@mui/material";
import { OpenInNew, Close } from "@mui/icons-material";
import "./ArticleOverview.css";

function ArticleOverview() {

    const {
        setOpenModal,
        setSelectedArticle,
        openModal,
        selectedArticle } = useContext(DataContext);

    const handleCloseModal = () => {
        setSelectedArticle({});
        setOpenModal(false);
    }

    useEffect(() => {

        if (JSON.stringify(selectedArticle) !== "{}") {
            setOpenModal(true)
        }

    }, [selectedArticle, setOpenModal])

    const styles = {
        bar: {
            position: "relative",
            backgroundColor: "#426f86"
        },
        typo: {
            ml: 2,
            flex: 1
        },
        link: {
            color: "white"
        }
    }

    return (
        <Dialog
            fullScreen
            open={openModal}
            onClose={handleCloseModal}
            className="article-overview"
        >
            <AppBar sx={styles.bar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleCloseModal}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography sx={styles.typo} variant="titleModal">
                        {selectedArticle.title}
                    </Typography>
                    <Link
                        variant="link2"
                        onClick={() => {
                            window.open(selectedArticle.url, "_newtab");
                        }}
                        sx={styles.link}
                    >
                        Read on original site
                        <OpenInNew />
                    </Link>
                </Toolbar>
            </AppBar>
            <iframe
                target="_parent"
                title="sources"
                className="iframe-article"
                sandbox="allow-same-origin allow-modals allow-forms allow-scripts"
                src={selectedArticle.url}
            ></iframe>
        </Dialog>
    );
}

export default ArticleOverview;
