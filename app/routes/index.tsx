import { createRoute } from "honox/factory";
import { Home } from "../../src/views/home";
import { getPresentations } from "../../src/lib/speakerdeck";

export default createRoute(async (c) => {
  const presentations = await getPresentations(5);
  c.header("Cache-Control", "public, s-maxage=1200, stale-while-revalidate=86400");
  return c.render(<Home presentations={presentations} />);
});
