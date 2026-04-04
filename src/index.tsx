import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "@hono/node-server/serve-static";
import { serve } from "@hono/node-server";
import { Layout } from "./views/layout";
import { Home } from "./views/home";
import { getPresentations } from "./lib/speakerdeck";
import pino from "pino";

process.env.NO_COLOR = "1";

const pinoLogger = pino({
  formatters: {
    level: (label) => ({ level: label }),
  },
});
const app = new Hono();

app.use(logger((str) => pinoLogger.info(str)));

// /labs/* → 308 redirect (replaces middleware.ts)
app.use("/labs/*", async (c) => {
  const url = new URL(c.req.url);
  const dest = `https://sugarheart.utgw.net${url.pathname}${url.search}`;
  c.header("Cache-Control", "public, max-age=31536000, s-maxage=31536000");
  return c.redirect(dest, 308);
});

// Serve CSS files
app.use("/styles/*", serveStatic({ root: "./" }));
// Serve public/ assets (images, robots.txt, favicon, keybase.txt)
app.use("/*", serveStatic({ root: "./public" }));

// Home page
app.get("/", async (c) => {
  const presentations = await getPresentations(5);
  c.header("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=60");
  return c.html(
    <Layout>
      <Home presentations={presentations} />
    </Layout>,
  );
});

const port = Number(process.env.PORT ?? 3000);
serve({ fetch: app.fetch, port });
