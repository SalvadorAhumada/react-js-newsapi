import { createContext, useState } from 'react';
import { API_KEY } from '../config/API';

export const DataContext = createContext({});

export const DataContextProvider = ({ children }) => {

    const apiPrefix = "https://newsapi.org/v2/";

    const topHeadlines = "top-headlines?country=gb";

    const filterNews = "everything?q=";

    const [news, setNews] = useState([]);

    const [filter, setFilter] = useState('');

    const [noResults, setNoResults] = useState(false);

    const [selectedArticle, setSelectedArticle] = useState({});

    const [openModal, setOpenModal] = useState(false);

    const [isLoading, setLoading] = useState(true);

    const [filtered, setFiltered] = useState(false);

    const restart = () => {
        setLoading(true);
        setNoResults(false);
        setFiltered(false);
    }

    const getNews = () => {
        
        restart();

        fetch(`${apiPrefix}${topHeadlines}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(({ articles }) => {
                setLoading(false);
                setNews(articles)
            })
            .catch(() => setLoading(false))
    }

    const getFilteredNews = () => {

        restart();

        fetch(`${apiPrefix}${filterNews}${filter}&apiKey=${API_KEY}`)
            .then(response => response.json())
            .then(({ articles }) => {
                setFiltered(true);
                if(articles.length === 0) setNoResults(true)
                setLoading(false);
                setNews(articles)
            })
            .catch(() => setLoading(false))

    }

    const handleCloseModal = () => {
        setSelectedArticle({});
        setOpenModal(false);
    };


    const dataContext = {
        getNews,
        news,
        setFilter,
        filter,
        getFilteredNews,
        setSelectedArticle,
        openModal,
        selectedArticle,
        handleCloseModal,
        setOpenModal,
        isLoading,
        noResults,
        filtered
    }

    return <DataContext.Provider value={dataContext}>
        {children}
    </DataContext.Provider>
}
export const { DataContextConsumer } = DataContext;