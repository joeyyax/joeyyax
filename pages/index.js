import React from "react";
import Head from "next/head";
import Public from "../layouts/Public";
import Hello from "../components/Hello/Hello";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const name = "Joey Yax";
    return (
      <Public title={name}>
        <Hello />
      </Public>
    );
  }
}

export default Home;
