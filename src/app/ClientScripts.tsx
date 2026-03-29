"use client";

import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    // Load Bootstrap JS first, then the page scripts that use `window`/DOM
    Promise.all([
      import("bootstrap/dist/js/bootstrap.bundle.min.js"),
      import("./scripts.js"),
    ]).catch((err) => {
      // Keep this quiet in production but log during development
      // eslint-disable-next-line no-console
      console.error("Failed to load client scripts:", err);
    });
  }, []);

  return null;
}
