import React from "react"
import { PageProvider } from "@/context/PageProvider"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import { store } from "@/store"
import RestFox from "./RestFox"

import './index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PageProvider>
                <RestFox />
            </PageProvider>
        </Provider>
    </React.StrictMode>
)