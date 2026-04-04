import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import app from "./app";

// Serve CSS files
app.use("/styles/*", serveStatic({ root: "./" }));
// Serve public/ assets (images, robots.txt, favicon, keybase.txt)
app.use("/*", serveStatic({ root: "./public" }));

const port = Number(process.env.PORT ?? 3000);
serve({ fetch: app.fetch, port });
