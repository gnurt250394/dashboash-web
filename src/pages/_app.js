import App, { Container } from "next/app";

import Head from "next/head";
import NProgress from "nprogress";
import Page from 'components/Page';
import Router from "next/router";
import Main from "./Main";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx, req }) {
    let pageProps = {};
    const userAgent = ctx.req
      ? ctx.req.headers["user-agent"]
      : navigator.userAgent;

    let ie = false;
    if (userAgent.match(/Edge/i) || userAgent.match(/Trident.*rv[ :]*11\./i)) {
      ie = true;
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    pageProps.ieBrowser = ie;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store, head } = this.props;
    const _body = <Component {...pageProps} />;
    return <Main body={_body} store={store} pageProps={pageProps} />;
  }
}

export default MyApp;
