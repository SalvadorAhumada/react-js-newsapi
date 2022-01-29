import { useEffect, useContext } from "react";
import { DataContext } from "./Context/DataContext";
import Navbar from "./Components/Navbar/Navbar";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import ArticleOverview from "./Components/ArticleOverview/ArticleOverview";
import Loading from "./Components/Loading/Loading";
import "./App.css";

function App() {

  const { getNews, isLoading  } = useContext(DataContext);

  useEffect(()=> {
    getNews();
  },[])

  return (
    <div className="App">
      <ArticleOverview/>
      <Navbar />
      <div className="faux-bar"></div>
      <NewsFeed />
      {isLoading === true ? <Loading/> : ""}
    </div>
  );
}

export default App;
