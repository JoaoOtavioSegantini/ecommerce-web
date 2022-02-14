/* eslint-disable @next/next/no-sync-scripts */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          {/* <link
              rel="stylesheet"
              type="text/css"
              href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <script
            type="text/javascript"
            src="https://sandbox.boletobancario.com/boletofacil/wro/direct-checkout.min.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <Analytics /> */}
        </body>
      </Html>
    );
  }
}
