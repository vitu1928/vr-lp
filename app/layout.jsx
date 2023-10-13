import Head from 'next/head';
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import '../global/global.scss'

export const metadata = {
  title: 'VR Currículo',
  description: "Landing page para o produto VR Currículo",
  generator: 'Next.js',
  applicationName: 'VR Currículo',
  referrer: 'origin-when-cross-origin',
  keywords: ['VR', 'Currículo', 'curriculum'],
  authors: [
    { name: 'Victor Garcia Torrens', url: "https://github.com/vitu1928" },
    { name: 'Yuri Garcia Torrens', url: 'https://trello.com/u/yurigarciatorrens/' },
    { name: 'Vanessa Rebouças Garcia', url: 'https://wa.me/5511956600892' }

  ],
  colorScheme: 'white',
  creator: 'Vaness Rebouças Garcia',
  publisher: 'Victor Garcia Torrens',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'VR Currículo',
    description: 'Faça seu currículo com a VR Currículo e consiga o emprego dos seus sonhos!',
    url: 'https://vrcurriculo.com.br',
    siteName: 'VR Currículo',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'Images/profileOpengraph.jpg',
        width: 1400,
        height: 300,
        alt: 'My custom alt',
      },
    ],
    locale: 'pt_BR',
    type: 'profile',
  },

}

// // or Dynamic metadata
// export async function generateMetadata({ params }) {
//   return {
//     title: '...',
//   }
// }

export default function Home() {
  return (
    <html lang="pt-br">
      <Head>
        <title>Global.product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Break />
        <Highlights />
        <Features />
        <Epilogue />
      </main>
      <Footer />
    </html>
  )
}
// 