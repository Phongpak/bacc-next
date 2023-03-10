import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyDocument = () => {
   return (
      <>
         <Html>
            <Head>
            </Head>
            <body className="body-bg">
               <Main />
               <NextScript />
            </body>
         </Html>
      </>
   );
};

export default MyDocument;