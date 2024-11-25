const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      async redirects() {
        return [
          {
            source: "/labs/:path*",
            destination: "https://sugarheart.utgw.net/labs/:path*",
            permanent: true,
          },
        ];
      },
    };
  }
  return {
    output: "standalone",
    distDir: "dist",
  };
};
