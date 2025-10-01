import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);

  // Serve the presentation at root
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return await serveFile(req, "./index.html");
  }

  // 404 for everything else
  return new Response("Not Found", { status: 404 });
});
