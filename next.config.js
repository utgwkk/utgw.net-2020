const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/**
 * @type {import('next').NextConfig}
 */
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {};
  }
  return {
    output: "standalone",
    distDir: "dist",
    cacheHandler: require.resolve("@henrikvolmer/nextjs-cache-handler-s3"),
    cacheMaxMemorySize: 0,
  };
};
