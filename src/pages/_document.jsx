import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head> 
        <meta name="description" content="Calcula investimento"/>
        <meta name="keywords" content="selic, cdb, lci, lca, dataselic, data selic, investimentos, investimentos curto prazo, investimentos 2021, samuel claudino, api inflação, api taxa selic, samuel claudino dataselic, calculadora investimentos"/>
        <meta name="author" content="Samuel Claudino"/>
        <meta name="copyright" content="Samuel Claudino 2021"/>
        <meta name="theme-color" content="#343a40" />
        <meta http-equiv="content-language" content="pt-br"/>
        <meta property="og:title" content="DataSelic" />
        <meta property="og:description" content="Melhores investimentos curto prazo."/>
        <link  href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"/>
        <link rel="shortcut icon" href="/img/logo-dataselic.svg" type="image/x-icon" />
        </Head>
        <body className="bg-dark text-white">
          <Main />
          <NextScript />
        </body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" async></script>
        <script src="https://kit.fontawesome.com/7590acc29c.js" async></script>
      </Html>
    )
  }
}

export default MyDocument