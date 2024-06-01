import { GoogleAnalytics } from '@next/third-parties/google';

import Epilogue from '@blocks/Epilogue';
import Footer from '@blocks/Footer';
import Header from '@blocks/Header';
import Hero from '@blocks/Hero';
import Highlights from '@blocks/Highlights';
import Whatsappfixed from '@components/WhatsappFixed';
import Relevance from '../blocks/Relevance';

import '../global/global.scss';

export const metadata = {
  title: 'VR Currículo',
  description: "Landing page para o produto VR Currículo",
  summary: "Currículo Personalizado e profissional em 48h",
  category: ['curriculo', 'curriculum', 'emprego', 'trabalho', 'profissional', 'profissão', 'empregabilidade', 'empregado', 'empregabilidade'],
  topic: 'CV',
  language: 'pt-br',
  robots: 'index, follow',
  revised: 'Domingo, Novembro 12, 2023, 11:00',
  generator: 'Next.js',
  applicationName: 'VR Currículo',
  referrer: 'origin-when-cross-origin',
  keywords: ['VR', 'Currículo Profissionais', 'curriculum', "Currículos"],
  authors: [
    { name: 'Victor Garcia Torrens', url: "https://github.com/vitu1928" },
    { name: 'Yuri Garcia Torrens', url: 'https://trello.com/u/yurigarciatorrens/' },
    { name: 'Vanessa Rebouças Garcia', url: 'https://wa.me/5511942750050' }
  ],
  colorScheme: 'white',
  creator: 'Vaness Rebouças Garcia',
  publisher: 'Victor Garcia Torrens',
  designer: "Victor Garcia Torrens",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: 'VR Currículo',
    description: 'Faça seu currículo com a VR Currículo e consiga o emprego dos seus sonhos!',
    url: 'https://www.curriculosprofissionais.com.br/',
    siteName: 'VR Currículo',
    images: [
      {
        url: 'Images/porta.webp',
        width: 1280,
        height: 853,
        alt: "Porta de entrada para o emprego dos seus sonhos"
      },
      {
        url: 'Images/contratado.webp',
        width: 1000,
        height: 668,
        alt: 'Contratado',
      },
      {
        url: 'favicon.ico',
        width: 64,
        height: 64,
        alt: 'Logo da VR Currículo',
      },
    ],
    icons: [
      {
        "src": "favicon.ico",
        "sizes": "48x48",
        "type": "image/x-icon"
      },
      {
        "src": "Images/Icons/VR_128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "Images/Icons/VR_256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "Images/Icons/VR_512.png",
        "sizes": "512X512 1024x1024",
        "type": "image/png"
      }
    ],

    display: "standalone",
    locale: 'pt_BR',
    type: 'profile',
    manifest: "https://www.curriculosprofissionais.com.br/manifest.json",
    canonical: '/',
    url: "https://www.curriculosprofissionais.com.br/",
    "identifier-URL": "https://www.curriculosprofissionais.com.br/",
    pagename: "VR Currículo",
    subtitle: "Currículo Personalizado e profissional em 48h"
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
      <head>
        <script
          id="tagmanager-main"
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-5BFSRBXJ`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'GTM-5BFSRBXJ', {
                        page_path: window.location.pathname,
                        });
                    `,
          }}
        />
      </head>
      <GoogleAnalytics gaId="GTM-5BFSRBXJ" />
      <Header />
      <Whatsappfixed />
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BFSRBXJ"
          height="0" width="0" style={{
            display: "none",
            visibility: "hidden"
          }}></iframe>
      </noscript>
      <main>
        <Hero />
        <Relevance id="relevance" />
        {/* <Benefits id="benefits"/> */}
        {/* <Break /> */}
        <Highlights id="highlights" />
        {/* <Features /> */}
        <Epilogue id="epilogue" />
      </main>
      <Footer />
    </html>
  )
}
// 
