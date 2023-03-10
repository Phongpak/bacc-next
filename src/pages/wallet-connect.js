import Head from 'next/head';
import React from 'react';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import Header from '../components/Layout/Header/Header';
import WalletConnectMain from '../components/WalletConnect/WalletConnectMain';



export default function WalletConnect() {

  return (
    <>
      <Head>
        <title>Oction - NFT Marketplace React, NextJs Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <WalletConnectMain />
      <Footer />
    </>
  )
}