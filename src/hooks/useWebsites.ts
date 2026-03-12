// types
import { type WebsiteItem } from "@/@types/website"
// hooks
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import {
    addWebsite,
    removeWebsite,
    setSelectedWebsite,
    clearWebsites
} from "@/store/slices/websitesSlice"

export function useWebsites() {
    const dispatch = useAppDispatch()

    const websites = useAppSelector((state) => state.websites.websites)
    const selectedWebsite = useAppSelector(
        (state) => state.websites.selectedWebsite
    )

    const getWebsite = (website: string) => {
        return websites.find((item) => item.website === website) ?? null
    }

    return {
        websites,
        selectedWebsite,
        addWebsite: (item: WebsiteItem) => dispatch(addWebsite(item)),
        removeWebsite: (website: string) => dispatch(removeWebsite(website)),
        setSelectedWebsite: (website: string | null) =>
            dispatch(setSelectedWebsite(website)),
        clearWebsites: () => dispatch(clearWebsites()),
        getWebsite,
    }
}