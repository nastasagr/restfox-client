// hooks
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useWebsites } from "@/hooks/useWebsites";
import { usePage } from "@/hooks/usePage";

// types
import { type LoginInputs, type LoginResponse } from "@/@types/login";

// helpers
import { normalizeURL } from "@/helpers/normalizeURL";

// components
import { Website, User, Password } from "@/components/Icons";
import SimpleButton from "@/components/SimpleButton";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";

function LoginForm() {
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const { addWebsite, setSelectedWebsite } = useWebsites();
    const { goToDashboard } = usePage();

    const { register, handleSubmit } = useForm<LoginInputs>();
    const onSubmit: SubmitHandler<LoginInputs> = async (formData) => {
        try {
            setError(null);
            setSuccess(null);

            const website = normalizeURL(formData.website);

            const res = await fetch(`${website}/wp-json/restfox/v1/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,
                }),
            });

            if (!res.ok) {
                const text = await res.text();
                setError(`Login failed (${res.status}) ${text}`);
                return;
            }

            const data: LoginResponse = await res.json();

            addWebsite({
                website,
                token: data.token,
                expires: Date.now() + data.expires_in * 1000,
            });

            setSelectedWebsite(website);
            goToDashboard();
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : "Network error while connecting to website",
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[75%] flex flex-col gap-2"
        >
            <Input
                icon={Website}
                placeholder="https://website.com"
                {...register("website", { required: true })}
            />

            <Input
                icon={User}
                placeholder="Username"
                {...register("username", { required: true })}
            />

            <Input
                icon={Password}
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
            />

            <SimpleButton variant="primary" type="submit" text="Save" />

            {error && <ErrorMessage msg={error} type="error" />}
            {success && <ErrorMessage msg={success} type="success" />}
        </form>
    );
}

export default LoginForm;
