import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

const portArg = Deno.args.find((a) => a.startsWith("--port="));
const PORT = portArg ? Number(portArg.split("=")[1]) : 8000;

Deno.serve({ port: PORT }, async (req: Request) => {
  const url = new URL(req.url);
  const path = decodeURIComponent(url.pathname);

  // Serve homepage at root - always show presentation selection
  if (path === "/") {
    try {
      return await serveFile(req, "./index.html");
    } catch (_) {
      return new Response("Homepage not found", { status: 404 });
    }
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
