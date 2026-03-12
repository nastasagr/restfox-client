export type LoginInputs = {
    website: string
    username: string
    password: string
}

export type LoginResponse = {
    token: string
    expires_in: number
    user: {
        id: number
        username: string
        email: string
    }
}