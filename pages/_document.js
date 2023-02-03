import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <title>Dedi Kurniawan</title>
          <meta
            content
            name="Dedi Kurniawanx is a Designer and Front-End Developer. Passionate Front-End Development."
          />
          <meta content name="dedikurniawanx" />
          <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
          <link
            href="assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
          <link href="assets/css/style.css" rel="stylesheet" />
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/typed.js/typed.min.js"></script>
        <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
        <script src="assets/js/main.js"></script>
      </body>
    </Html>
  );
}
