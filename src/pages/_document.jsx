import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
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
            </Head>
            <body>
                <Main />
                <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BFSRBXJ"
                        height="0" width="0" style={{
                            display: "none",
                            visibility: "hidden"
                        }}></iframe>
                </noscript>
                <NextScript />
            </body>
        </Html>
    )
}