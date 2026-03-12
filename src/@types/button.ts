import { type ComponentType } from "react"

export type Buttons = "submit" | "reset" | "button"
export type Variant = "primary" | "secondary" | "danger"

export type IconProps = {
    size?: number
    className?: string
}

export interface ButtonProps {
    type: Buttons
    text: string
    variant: Variant
    icon?: ComponentType<IconProps>
    onClick?: () => void
}