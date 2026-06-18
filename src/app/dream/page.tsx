import { notFound } from "next/navigation";
import DreamPage from "./DreamPage";

const SECRET_KEY = process.env.DREAM_SECRET_KEY!;

export default async function Dream({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    if (params.key !== SECRET_KEY) {
        notFound();
    }

    return <DreamPage />;
}
