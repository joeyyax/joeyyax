import React from 'react'
import Head from 'next/head'

import './index.scss'

const Home = () => (
  <div className="container">
    <Head>
      <title>Joey Yax</title>
      <link rel='icon' href='/img/favicon.ico' />
    </Head>
    <div className="hello">
      <img className="hello--photo" src="/img/joeyyax.jpg" alt="" title="" />
    </div>
  </div>
)

export default Home
