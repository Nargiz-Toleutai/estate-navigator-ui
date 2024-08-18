import { environment } from "@/environments/environment";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/environment.js" />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
