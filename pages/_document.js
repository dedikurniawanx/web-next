import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content />
        <meta name="author" content />
        <title>My Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css"
          rel="stylesheet"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        <link href="css/styles.css" rel="stylesheet" />
      </Head>
      <body id="page-top">
        <Main />
        <NextScript />
        <script src="js/scripts.js"></script>
      </body>
    </Html>
  );
}
