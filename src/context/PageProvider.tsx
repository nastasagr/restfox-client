import {
    createContext,
    useMemo,
    useReducer,
    type ReactNode,
} from "react"

import { type AppPage, type PageState, } from "@/@types/page"
import { type PageAction, type PageContextType } from "@/@types/page"


const PAGE_STORAGE_KEY = "current_page"

const loadInitialPage = (): AppPage => {
    const stored = localStorage.getItem(PAGE_STORAGE_KEY)

    if (stored === "authenticate" || stored === "dashboard") {
        return stored
    }

    return "authenticate"
}

const initialState: PageState = {
    currentPage: loadInitialPage(),
}

function persistPage(page: AppPage) {
    localStorage.setItem(PAGE_STORAGE_KEY, page)
}

function pageReducer(state: PageState, action: PageAction): PageState {
    switch (action.type) {
        case "GO_TO_LOGIN":
            persistPage("authenticate")
            return { ...state, currentPage: "authenticate" }

        case "GO_TO_DASHBOARD":
            persistPage("dashboard")
            return { ...state, currentPage: "dashboard" }

        case "SET_PAGE":
            persistPage(action.payload)
            return { ...state, currentPage: action.payload }

        default:
            return state
    }
}

export const PageContext = createContext<PageContextType | null>(null)

export function PageProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(pageReducer, initialState)

    const value = useMemo(
        () => ({
            currentPage: state.currentPage,
            goToLogin: () => dispatch({ type: "GO_TO_LOGIN" }),
            goToDashboard: () => dispatch({ type: "GO_TO_DASHBOARD" }),
            setPage: (page: AppPage) => dispatch({ type: "SET_PAGE", payload: page }),
        }),
        [state.currentPage]
    )

    return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}

