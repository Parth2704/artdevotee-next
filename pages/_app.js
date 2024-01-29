import "../styles/css/bootstrap.css";
import "../styles/css/style.css";
import "../styles/css/responsive.css";
import "../styles/css/bootstrap-reboot.css";
import "../styles/css/font-awesome.min.css";
import "../styles/css/owl.carousel.min.css";
import "../styles/css/owl.theme.default.min.css";
import "../styles/css/calendar.css";
import "../styles/css/jequry-ui_1.css";
import "../styles/css/jquery-ui.css";
import "../styles/css/thumbelina.css";
import { store } from "../store";
import { Provider } from "react-redux";
import Head from "next/head";
import { useEffect } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
  window.bootstrap = require("bootstrap");
  window.popper = require("popper.js");
}
import Navbar from "../Componets/Navbar/Navbar";
import Footer from "../Componets/Footer/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../public/js/jquery.min.js");
    import("../public/js/jquery-ui.js");
    import("../public/js/bootstrap.min.js");
    import("../public/js/bootstrap.bundle.js");
    import("../public/js/owl.carousel.min.js");
    import("../public/js/go_to_top.js");
    import("../public/js/custom.js");
    // import("../public/js/product-carousel.js");
    import("../public/js/thumbelina.js");
  }, []);
  return (
  <Provider store={store}>
    <Head>
    <meta charset="utf-8" />
    <link
      rel="icon"
      href="/preview/next/favicon.png"
      type="image/png"
      sizes="16x16"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#F87419" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Gelasio:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap"
      rel="stylesheet"
    />
      </Head>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </Provider>
  )
}

export default MyApp
