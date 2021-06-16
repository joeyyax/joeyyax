import React from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";

class Public extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    TagManager.initialize({
      gtmId: process.env.GTM_ID,
    });
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>

        <div className="main">{this.props.children}</div>
      </>
    );
  }
}

export default Public;
