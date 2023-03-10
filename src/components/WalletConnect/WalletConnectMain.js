import React from 'react';
import Link from 'next/link';
import ThemeChanger from '../Common/ThemeChanger';
import Breadcrumbs from '../Common/PageTitle';

const WalletConnectMain = () => {
    const walletConnect = [
        {
            walletTitle: 'Wallet Connect',
            walletImage: 'assets/img/wallet/wallet1.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },
        {
            walletTitle: 'Metamask',
            walletImage: 'assets/img/wallet/wallet2.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },
        {
            walletTitle: 'Fortmatic',
            walletImage: 'assets/img/wallet/wallet3.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },
        {
            walletTitle: 'Torus',
            walletImage: 'assets/img/wallet/wallet4.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },
        {
            walletTitle: 'Bitski',
            walletImage: 'assets/img/wallet/wallet5.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },
        {
            walletTitle: 'Coinbase',
            walletImage: 'assets/img/wallet/wallet6.png',
            walletDesc: 'Sale your single item to increase your currencies that generated by crypto currency.',
            walletBtn: 'Connect',
        },

    ];
    return (
        <main>
            <ThemeChanger />
            <Breadcrumbs breadcrumbTitle="Connect Wallet" breadcrumbSubTitle="Connect Wallet" />

            <section className="connect-wallet-area pt-130 pb-120">
                <div className="container">
                    <div className="connect-wallet-wrapper">
                        {walletConnect &&
                            <div className="row">
                                {walletConnect.map((WalletConnectMain, num) => (
                                    <div key={num} className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="box-card-single box-card-wallet mb-40 wow fadeInUp">
                                            <div className="box-card-inner text-center">
                                                <div className="box-card-icon">
                                                    <img src={WalletConnectMain.walletImage} />
                                                </div>
                                                <h4 className="box-card-title">{WalletConnectMain.walletTitle}</h4>
                                                <p>{WalletConnectMain.walletDesc}</p>
                                                <div className="box-card-btn">
                                                    <a href="#" className="fill-btn-lightblue">{WalletConnectMain.walletBtn}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                        <div className="wallet-wrapper-note text-center wow fadeInUp">
                            <div className="note">Need help to collect wallet? <Link href="/contact"><a className="text-btn">Contact Support</a></Link> or Lean how to collect wallet visiting to our <Link href="/faq"><a className="text-btn">FAQ page</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WalletConnectMain;