// hooks
import { usePage } from "./hooks/usePage"

// pages
import Authenticate from "@/pages/Authenticate"
import Dashboard from "@/pages/Dashboard"


export default function RestFox() {
    const { currentPage } = usePage()

    switch (currentPage) {
        case "dashboard":
            return <Dashboard />

        case "authenticate":
        default:
            return <Authenticate />
    }
}