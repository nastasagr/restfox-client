import { useWebsites } from "@/hooks/useWebsites";
import { usePage } from "@/hooks/usePage";

// components
import Button from "@/components/SimpleButton";

export default function Dashboard() {
  const { selectedWebsite, getWebsite } = useWebsites();
  const { goToLogin } = usePage();

  if (!selectedWebsite) {
    return (
      <div className="w-full h-full p-6">
        <h1 className="text-2xl font-bold">No website selected</h1>
        <Button
          type="button"
          variant="primary"
          text="Back"
          onClick={goToLogin}
        />
      </div>
    );
  }

  const website = getWebsite(selectedWebsite);

  if (!website) {
    return (
      <div className="w-full h-full p-6">
        <h1 className="text-2xl font-bold">Website not found</h1>
        <Button
          type="button"
          variant="primary"
          text="Back"
          onClick={goToLogin}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full p-6 flex flex-col gap-4">
      <h1 className="text-2xl text-primary font-extrabold">Dashboard</h1>
      <p>Connected website: {website.website}</p>
      <p>Token: {website.token}</p>
      <p>Expires: {website.expires}</p>

      <Button
        type="button"
        variant="secondary"
        text="Back to Login"
        onClick={goToLogin}
      />
    </div>
  );
}
