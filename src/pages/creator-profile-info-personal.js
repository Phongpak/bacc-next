import Head from 'next/head';
import React from 'react';
import CreatorProfileInfoMain from '../components/CreatorProfileInfo/CreatorProfileInfoMain';
import Footer from '../components/Layout/Footer/FooterOne/Footer';
import Header from '../components/Layout/Header/Header';


export default function CreatorProfileInfo() {

    return (
        <>
            <Head>
                <title>Oction - NFT Marketplace React, NextJs Template</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <CreatorProfileInfoMain />
            <Footer />
        </>
    )
}
