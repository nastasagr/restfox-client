import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type WebsiteItem } from "@/@types/website"

interface WebsitesState {
    websites: WebsiteItem[]
    selectedWebsite: string | null
}

const WEBSITES_KEY = "websites"
const SELECTED_WEBSITE_KEY = "selected_website"

const loadWebsites = (): WebsiteItem[] => {
    try {
        const stored = localStorage.getItem(WEBSITES_KEY)
        return stored ? JSON.parse(stored) : []
    } catch {
        localStorage.removeItem(WEBSITES_KEY)
        return []
    }
}

const loadSelectedWebsite = (): string | null => {
    return localStorage.getItem(SELECTED_WEBSITE_KEY)
}

const initialState: WebsitesState = {
    websites: loadWebsites(),
    selectedWebsite: loadSelectedWebsite(),
}

const persistWebsites = (websites: WebsiteItem[]) => {
    localStorage.setItem(WEBSITES_KEY, JSON.stringify(websites))
}

const persistSelectedWebsite = (website: string | null) => {
    if (website) {
        localStorage.setItem(SELECTED_WEBSITE_KEY, website)
    } else {
        localStorage.removeItem(SELECTED_WEBSITE_KEY)
    }
}

const websitesSlice = createSlice({
    name: "websites",
    initialState,
    reducers: {
        addWebsite: (state, action: PayloadAction<WebsiteItem>) => {
            const exists = state.websites.find(
                (item) => item.website === action.payload.website
            )

            if (exists) {
                state.websites = state.websites.map((item) =>
                    item.website === action.payload.website ? action.payload : item
                )
            } else {
                state.websites.push(action.payload)
            }

            persistWebsites(state.websites)
        },

        setSelectedWebsite: (state, action: PayloadAction<string | null>) => {
            state.selectedWebsite = action.payload
            persistSelectedWebsite(action.payload)
        },

        removeWebsite: (state, action: PayloadAction<string>) => {
            state.websites = state.websites.filter(
                (item) => item.website !== action.payload
            )

            if (state.selectedWebsite === action.payload) {
                state.selectedWebsite = null
                persistSelectedWebsite(null)
            }

            persistWebsites(state.websites)
        },

        clearWebsites: (state) => {
            state.websites = []
            state.selectedWebsite = null
            localStorage.removeItem(WEBSITES_KEY)
            localStorage.removeItem(SELECTED_WEBSITE_KEY)
        },
    },
})

export const {
    addWebsite,
    setSelectedWebsite,
    removeWebsite,
    clearWebsites,
} = websitesSlice.actions

export default websitesSlice.reducer