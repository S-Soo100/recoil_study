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
    <div>
      <h2>Something went wrong!</h2>
      <button
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
