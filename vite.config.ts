import { defineConfig } from "vite";
import honox from "honox/vite";
import type { IncomingMessage, ServerResponse } from "node:http";

export default defineConfig({
  plugins: [
    honox(),
    {
      name: "msw-setup",
      configureServer(server) {
        if (process.env.USE_MSW !== "1") return;
        import("./src/mocks/node").then(({ server: mswServer }) => {
          mswServer.listen({ onUnhandledRequest: "bypass" });
        });
        server.middlewares.use(
          "/mock-presentation",
          (req: IncomingMessage, res: ServerResponse) => {
            const url = new URL(req.url!, "http://localhost");
            const id = url.searchParams.get("id") ?? "mock";
            res.setHeader("Content-Type", "text/html");
            res.end(
              `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Mock: ${id}</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;background:#e8e8e8;font-family:sans-serif"><p style="color:#666;font-size:14px">Mock: ${id}</p></body></html>`,
            );
          },
        );
      },
    },
  ],
  server: { port: 3000 },
  define: { __GIT_HASH__: JSON.stringify("dev") },
  ssr: {
    external: ["node-html-parser", "rss-parser", "pino"],
  },
});
