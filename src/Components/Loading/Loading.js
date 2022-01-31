import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Typography } from "@mui/material";
import { Settings, Error } from "@mui/icons-material";
import "./Loading.css";

function Loading() {

    const { isError } = useContext(DataContext);

    const message = isError ?
        (<><Error fontSize="large" />
            <Typography variant="tiptool">
                Unexpected Error. Please contact support.
            </Typography>
        </>) :
        (<><Settings className="loading-icon" fontSize="large" />
            <Typography variant="tiptool">
                Getting there...
            </Typography></>)

    return (
        <section className="loading-screen">
            <div className="loading-main">
                {message}
            </div>
        </section>
    );
}

export default Loading;
