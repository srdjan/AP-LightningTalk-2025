import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = decodeURIComponent(url.pathname);

  // Serve presentation entry at root
  if (path === "/" || path === "/index.html") {
    // Prefer modular entry
    try {
      return await serveFile(req, "./presentation.html");
    } catch (_) { /* fall back to legacy if not found */ }
    // Fallback to legacy single-file if present
    try {
      return await serveFile(req, "./index.html");
    } catch (_) { /* not found */ }
  }

  // Serve static assets (theme, slides, etc.)
  try {
    // prevent directory traversal by normalizing to a relative path
    const fsPath = "." + (path === "/" ? "/presentation.html" : path);
    return await serveFile(req, fsPath);
  } catch (_) {
    return new Response("Not Found", { status: 404 });
  }
});
