import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const props = await Document.getInitialProps(ctx)
    return { ...props, customValue: 'hi there!' }
  }

  render () {
    const style = {
      margin: '0',
      height: '100%',
      fontFamily: 'Roboto',      
    }   
    return (
     <html>
       <Head>
         <style>{`.root { height ${style.height} } body { font-family: ${style.fontFamily}}, height: ${style.height} }`}</style>
         <link href='/static/style.css' rel='stylesheet' />
         <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
       </Head>
       <body>         
         <Main className="custom_class" />
         <NextScript />
       </body>
     </html>
    )
  }
}