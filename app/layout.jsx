import Head from 'next/head';
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
// import * as Global from '../global/global.json';
import '../global/global.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Global.product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Notice>Thank you for subscribing</Notice> */}
      <Header/>

      <main>
        <Hero/>
        <Benefits/>
        <Break/>
        <Highlights/>
        <Features />
        <Epilogue/>
      </main>

      <Footer
        title="{Global.product}"
      />
    </>
  )
}
// 