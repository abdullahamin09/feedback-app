'use client';
import FeedbackDetail from "@/components/feedbackDetail";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const handleOnBack = (event) => {
        event.preventDefault();
        router.back();
    }
    return (
        <div>
            <FeedbackDetail onBack={handleOnBack} />
        </div>
    );
}