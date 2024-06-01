import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const goToNextQuiz = (
  params: Record<string, string | string[]> | null,
  router: AppRouterInstance
) => {
  const typeNumber = parseInt(params!.type[0]);

  if (params!.type[0] + params!.type[1] === "10") {
    router.push(`/result`);
    return;
  }

  router.push(`/quiz/${typeNumber + 1}`);
};
