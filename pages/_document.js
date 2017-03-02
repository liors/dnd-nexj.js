import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {   
    return (
     <html>
       <Head>
         <link href='/static/style.css' rel='stylesheet' />
         <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
       </Head>
       <body>         
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}