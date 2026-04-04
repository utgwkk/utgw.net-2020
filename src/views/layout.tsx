export const Layout = ({ children }: { children: any }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <title>utgw.net</title>
      <meta property="og:title" content="utgw.net" />
      <meta property="og:description" content="utgw.net" />
      <meta name="twitter:title" content="utgw.net" />
      <meta name="twitter:description" content="utgw.net" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="stylesheet" href="/styles/globals.css" />
      <link rel="stylesheet" href="/styles/main.css" />
    </head>
    <body>{children}</body>
  </html>
);
