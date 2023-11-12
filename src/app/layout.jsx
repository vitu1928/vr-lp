import Break from '@blocks/Break';
import Features from '@blocks/Features';

import Benefits from '@blocks/Benefits';
import Epilogue from '@blocks/Epilogue';
import Footer from '@blocks/Footer';
import Header from '@blocks/Header';
import Hero from '@blocks/Hero';
import Highlights from '@blocks/Highlights';
import Whatsappfixed from '@components/WhatsappFixed'
import '../global/global.scss';
import Relevance from '../blocks/Relevance';

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
        url: 'Images/pen.avif',
        width: 900,
        height: 500,
      },
      {
        url: 'Images/contratado.jpg',
        width: 1900,
        height: 1700,
        alt: 'Máquina de tilografar',
      },
      {
        url: 'android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Logo da VR Currículo',
      },
      {
        url: 'favicon.ico',
        width: 128,
        height: 128,
        alt: 'Logo da VR Currículo',
      }
    ],
    locale: 'pt_BR',
    type: 'profile',
  }
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
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5BFSRBXJ"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        />
      </noscript>
      <Header />
      <Whatsappfixed />
      <main>
        <Hero />
        <Relevance />
        <Benefits />
        {/* <Break /> */}
        <Highlights />
        {/* <Features /> */}
        <Epilogue />
      </main>
      <Footer />
    </html>
  )
}
// 