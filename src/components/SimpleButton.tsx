import { type Variant, type ButtonProps } from "@/@types/button"

export default function SimpleButton(props: ButtonProps) {

    const { type, text, variant, icon: Icon, onClick } = props

    const variants: Record<Variant, string> = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        danger: "bg-danger text-white",
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`button relative ${variants[variant]}`}
        >
            <div className="flex flex-row items-center justify-center">
                <div className="absolute left-7">
                    {Icon && <Icon size={20} />}
                </div>
                <span>{text}</span>
            </div>
        </button>
    )
}