import Searchbar from "../Searchbar/Searchbar";
import NewsCardWrapper from "../NewsCardWrapper/NewsCardWrapper";
import "./NewsFeed.css";

function NewsFeed() {

    return (
        <div className="newsfeed">
            <Searchbar />
            <NewsCardWrapper />
        </div>
    );
}

export default NewsFeed;
