import "res/styles/styles.less";
import React, { Component } from "react";
import { Container } from "next/app";
import { Provider, connect } from "react-redux";
import withRedux from "next-redux-wrapper";
import { GlobalStyles } from "components/styles/GlobalStyles";
import AppProvider from "components/shared/AppProvider";
import Head from "next/head";
import Page from "components/Page";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux-store/store";
import request from "network/request";
import stringUtils from "utils/string-utils";
import "core-js/es6/promise";
import "core-js/es6/set";
import "core-js/es6/map";

class Main extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Head>
          <meta
            name="viewport"
            content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="shortcut icon" href="/static/images/triangle.png" />
          <title>One - React Next.js Ant Design Dashboard</title>
          <link
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro:400,700"
            rel="stylesheet"
          />
          {this.props.pageProps.ieBrowser && (
            <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js" />
          )}
          <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
          <script type="text/javascript" src="/static/facebook.js"></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
            crossOrigin="anonymous"
          />
        </Head>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppProvider>
              <Page>{this.props.body}</Page>
            </AppProvider>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default Main;
