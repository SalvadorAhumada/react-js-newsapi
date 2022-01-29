import { Typography } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import "./Loading.css";

function Loading() {

    return (
        <section className="loading-screen">
            <div className="loading-main">
                <Settings className="loading-icon" fontSize="large" />
                <Typography variant="tiptool">
                    Getting there...
                </Typography>
            </div>
        </section>
    );
}

export default Loading;
