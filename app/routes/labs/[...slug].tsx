import { createRoute } from "honox/factory";

export default createRoute((c) => {
  const url = new URL(c.req.url);
  const dest = `https://sugarheart.utgw.net${url.pathname}${url.search}`;
  c.header("Cache-Control", "public, max-age=31536000, s-maxage=31536000");
  return c.redirect(dest, 308);
});
