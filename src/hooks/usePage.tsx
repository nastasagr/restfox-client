import { useContext } from "react"
import { PageContext } from "@/context/PageProvider"

export function usePage() {
    const context = useContext(PageContext)

    if (!context) {
        throw new Error("usePage must be used inside PageProvider")
    }

    return context
}