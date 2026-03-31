
import { Suspense } from 'react';
import HomePage from "@/components/homePage";

const AddFeedback = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
        </Suspense>
    );
}

export default AddFeedback;