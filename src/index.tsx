import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import app from "./app";

// Serve CSS files
app.use("/styles/*", serveStatic({ root: "./" }));
// Serve public/ assets (images, robots.txt, favicon, keybase.txt)
app.use("/*", serveStatic({ root: "./public" }));

async function main() {
  if (process.env.USE_MSW === "1") {
    const { server } = await import("./mocks/node");
    server.listen({ onUnhandledRequest: "bypass" });

    // Dummy endpoint used as iframe src instead of actual Speakerdeck player
    app.get("/mock-presentation", (c) => {
      const id = c.req.query("id") ?? "mock";
      return c.html(
        `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Mock: ${id}</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#e8e8e8;font-family:sans-serif"><p style="color:#666;font-size:14px">Mock: ${id}</p></body></html>`,
      );
    });
  }

  const port = Number(process.env.PORT ?? 3000);
  serve({ fetch: app.fetch, port });
}

main();
