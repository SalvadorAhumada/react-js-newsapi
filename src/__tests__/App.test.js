import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { DataContextProvider } from '../Context/DataContext';

it("renders withouth crashing", () => {

    const div = document.createElement("div");

    ReactDOM.render(
        (<DataContextProvider>
            <App />
        </DataContextProvider>), div)
})