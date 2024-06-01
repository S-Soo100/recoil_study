"use client"; // Error components must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error() {
  const router = useRouter();
  const goToHomePage = () => {
    router.refresh();
    router.push("/");
  };
  useEffect(() => {}, []);

  return (
    <div className="h-[100vh] flex flex-col items-center justify-start pt-[150px] gap-8 text-2xl">
      <h2 className="">Something went wrong!</h2>
      <h4 className="text-lg text-slate-400">
        {`Please Press "Try Again" to go back to the home page`}
      </h4>
      <button
        className="m-4 bg-red-500 border-2 text-white justify-center text-center p-3 rounded-lg hover:bg-red-700 hover:text-gray-200"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => goToHomePage()
        }
      >
        Try again
      </button>
    </div>
  );
}
