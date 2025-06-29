import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
        <title>SteerCode Project</title>
        <meta name="description" content="Built by SteerCode" />
        <meta name="author" content="SteerCode" />
        <meta property="og:title" content="SteerCode Project" />
        <meta property="og:description" content="Built by SteerCode" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://steercode.com/project-og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@steercode" />
        <meta name="twitter:image" content="https://steercode.com/project-og-image.png" />
        <ScrollViewStyleReset />
      </head>
      <body>
        {children}
        {/* IMPORTANT: DO NOT DELETE THE FOLLOWING SCRIPT TAG OR THIS COMMENT! */}
        <script type="module" src="https://steercode.web.app/steercode.min.js"></script>
      </body>
    </html>
  );
}





