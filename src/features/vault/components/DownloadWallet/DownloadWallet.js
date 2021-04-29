import React from 'react'

function DownloadWallet() {
    return (
        <main className="download-wallet">

            <div class="content">
                <div class="title">
                    <div class="txt ttl">Download Wallets</div>
                </div>
                <div class="download-card">
                    {" "}
                    <img class="icon" src="static/frontend/img/binance-outlined.svg" />
                    <div class="txt">
                        <div class="ttl">Binance Chain Wallet</div>
                        <div class="desc">A Crypto Wallet for Binance Smart Chain</div>
                    </div>{" "}
                    <a class="btn" target="_blank" href="download-wallet.html#">
                        Download
        </a>{" "}
                </div>
                <div class="download-card">
                    {" "}
                    <img class="icon" src="static/frontend/img/metamask-outlined.svg" />
                    <div class="txt">
                        <div class="ttl">Metamask</div>
                        <div class="desc">A Wallet & Gateway to Blockchain Apps</div>
                    </div>{" "}
                    <a class="btn" target="_blank" href="download-wallet.html#">
                        Download
        </a>{" "}
                </div>
                <div class="download-card">
                    {" "}
                    <img class="icon" src="static/frontend/img/trustwallet-outlined.svg" />
                    <div class="txt">
                        <div class="ttl">Trust Wallet</div>
                        <div class="desc">The most Trusted & Secure Crypto Wallet</div>
                    </div>{" "}
                    <a class="btn" target="_blank" href="download-wallet.html#">
                        Download
        </a>{" "}
                </div>
            </div>
        </main>
    )
}

export default DownloadWallet
