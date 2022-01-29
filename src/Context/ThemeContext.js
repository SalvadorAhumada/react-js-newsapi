import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext } from 'react';
import "@fontsource/yeseva-one";
import "@fontsource/raleway";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {

    const theme = createTheme({
        typography: {
            h4: {
                fontFamily: "Yeseva One",
                margin: "1rem",
                color: "#383838"
            },
            h6: {
                fontFamily: "Raleway",
                margin: "2rem",
                color: "#989898"
            },
            body2: {
                color: "#989898",
                fontFamily: "Raleway",
            },
            h5: {
                fontFamily: "Yeseva One",
                color: "#2f3130"
            },
            titleModal: {
                color: "white",
                fontFamily: "Yeseva One",
            },
            subtitle: {
                fontSize: "0.5rem"
            },
            link2: {
                display: "flex",
                fontSize: "0.7rem",
                alignItems: "center",
                color: "white",
                textDecoration: "none",
                cursor:"pointer"
            }
        }
    });

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
}
export const { ThemeContextConsumer } = ThemeContext;
