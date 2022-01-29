import { Typography, Divider, colors } from "@mui/material"
import Newspaper from "@mui/icons-material/Newspaper";
import "./Navbar.css";

function Navbar() {

    const getDate = () => {

        return new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        })

    }

    const styles = {
        newspaper: {
            color: colors.grey[600],
            margin: "1rem"
        }
    }

    return (
        <div className="navbar">
            <div className="navbar__header">
                <div className="navbar__flex_header">
                    <Newspaper sx={styles.newspaper} />
                    <Typography variant="h4" component="h4">
                        NEWS.NOW
                    </Typography>
                </div>
                <Typography variant="h6" component="h6" className="header">
                    {getDate()}
                </Typography>
            </div>
            <Divider />
        </div>
    );
}

export default Navbar;
