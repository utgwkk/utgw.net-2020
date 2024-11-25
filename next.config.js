const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

async function redirects() {
  return [
    {
      source: "/labs/:path*",
      destination: "https://sugarheart.utgw.net/labs/:path*",
      permanent: true,
    },
  ];
}

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      redirects,
    };
  }
  return {
    redirects,
    output: "standalone",
    distDir: "dist",
  };
};
