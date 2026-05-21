import type { Href, Router } from "expo-router";

type SessionWithTask = {
  currentTask?: unknown;
};

export function navigateAfterAuth(
  router: Pick<Router, "replace">,
  decorateUrl: (url: string) => string,
  session?: SessionWithTask | null
) {
  if (session?.currentTask) {
    console.warn("Session task pending:", session.currentTask);
    return;
  }

  router.replace(decorateUrl("/") as Href);
}

export function getClerkErrorMessage(error: unknown): string {
  if (!error || typeof error !== "object") {
    return "Something went wrong. Please try again.";
  }

  if ("message" in error && typeof error.message === "string") {
    return error.message;
  }

  if ("errors" in error && Array.isArray(error.errors) && error.errors[0]) {
    const first = error.errors[0] as { message?: string; longMessage?: string };
    return first.longMessage ?? first.message ?? "Something went wrong.";
  }

  return "Something went wrong. Please try again.";
}
