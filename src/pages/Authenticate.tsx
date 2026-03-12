// hooks
import { useWebsites } from "@/hooks/useWebsites"
import { usePage } from "@/hooks/usePage"

// components
import LoginForm from "@/components/forms/LoginForm"
import DropDown from "@/components/DropDown"
import Button from "@/components/SimpleButton"
import { Connect,Trash } from "@/components/Icons"

export default function Authenticate() {
    const { websites,
        selectedWebsite,
        clearWebsites,
        setSelectedWebsite } = useWebsites()

    const { goToDashboard } = usePage()

    const handleConnect = () => {
        if (!selectedWebsite) return
        goToDashboard()
    }

    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-5">
            <div className="mt-4">
                <img src="/images/restfox.svg" width={200} height={150} />
            </div>

            <LoginForm />

            <div className="w-[70%] flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-400" />
                <span className="text-md text-gray-500">Quick Connect</span>
                <div className="h-px flex-1 bg-gray-400" />
            </div>

            <div className="w-[75%] flex flex-col gap-2">
                <DropDown
                    data={websites}
                    value={selectedWebsite ?? ""}
                    onChange={setSelectedWebsite}
                />

                <Button
                    icon={Connect}
                    variant="secondary"
                    type="button"
                    text="Connect"
                    onClick={handleConnect}
                />


                <Button
                    icon={Trash}
                    variant="danger"
                    type="button"
                    text="Delete All"
                    onClick={clearWebsites}
                />
            </div>
        </div>
    )
}