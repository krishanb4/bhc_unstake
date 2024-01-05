import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-bglight dark:bg-bgdark bg-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
