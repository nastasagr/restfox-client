
interface Props {
    msg: string;
    type: 'error' | "success"
}
function ErrorMessage({ msg, type }: Props) {

    const colors = type == "error" ? "bg-error" : "bg-success"
    return (
        <div className={`${colors} errorMsg text-white`}>
            {msg}
        </div>
    )
}

export default ErrorMessage