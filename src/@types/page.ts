export type AppPage = "authenticate" | "dashboard"

export type PageState = {
    currentPage: AppPage
}

export type PageAction =
    | { type: "GO_TO_LOGIN" }
    | { type: "GO_TO_DASHBOARD" }
    | { type: "SET_PAGE"; payload: AppPage }


export type PageContextType = {
    currentPage: AppPage
    goToLogin: () => void
    goToDashboard: () => void
    setPage: (page: AppPage) => void
}


