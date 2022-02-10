import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
  } from 'next/document'
  
  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
      return (
        <Html lang="en-US">
          <Head>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
            {/* <Analytics /> */}
          </body>
        </Html>
      )
    }
  }