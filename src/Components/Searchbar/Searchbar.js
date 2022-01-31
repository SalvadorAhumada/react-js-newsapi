import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";
import { Search, Home } from "@mui/icons-material";
import { Paper, InputBase, IconButton } from "@mui/material";
import "./Searchbar.css";

function Searchbar() {

    const { setFilter, getFilteredNews, getNews, filtered, filter  } = useContext(DataContext);

    const styles = {
        form: {
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400
        },
        input: {
            ml: 1, flex: 1
        },
        submit: {
            p: "10px"
        }
    }

    const handleRestart = () => {
        getNews();
        setFilter('');
    }

    const isFiltered = filtered ? (<IconButton
        onClick={handleRestart}
        sx={styles.submit}
        aria-label="home">
        <Home />
    </IconButton>) : null

    const handleSearch= ({ key }) => {
        if(key === "Enter") getFilteredNews();
    }

    return (
        <div className="searchbar">
            <Paper
                component="div"
                sx={styles.form}
            >
                {isFiltered}
                <InputBase
                    sx={styles.input}
                    placeholder="Filter..."
                    inputProps={{ "aria-label": "Filter results" }}
                    value={filter}
                    onChange={e => setFilter(e.target.value.trim())}
                    onKeyDown={(e) => handleSearch(e)}
                />
                <IconButton
                    onClick={getFilteredNews}
                    sx={styles.submit}
                    aria-label="search">
                    <Search />
                </IconButton>
            </Paper>
        </div>
    );
}

export default Searchbar;
