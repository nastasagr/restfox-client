export const normalizeURL = (value: string) => {
    let website = value.trim()

    if (!website.startsWith("http://") && !website.startsWith("https://")) {
        website = `https://${website}`
    }

    return website.replace(/\/+$/, "")
}