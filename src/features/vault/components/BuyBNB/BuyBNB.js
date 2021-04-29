import React from 'react'

function BuyBNB() {
    return (
        <main className="buy-bnb">
            <div class="content">
                <div class="title">
                    <div class="txt ttl">Buy BNB</div>
                    <div class="txt link">
                        <span class="white">Tutorial: </span>
                        <a href="buy-bnb.html#">How to buy BNB & Install Binance wallet</a>
                    </div>
                </div>
                <iframe
                    id="swap-frame"
                    width="100%"
                    height="100%"
                    frameborder="none"
                    src="https://widget.changelly.com?from=usd%2Cbtc%2Ceur%2Caud%2Ceth%2Cxrp%2Ccad%2Cusdt20%2Cusdc%2Cjpy%2Cinr%2Cbusd&to=bnb&amount=100&address=&fromDefault=usd&toDefault=bnb&theme=default&merchant_id=pbfgl5o22zma5w17&payment_id=&v=3"
                >
                    Can't load widget
        </iframe>
                <div class="download-card">
                    {" "}
                    <img class="icon" src="static/frontend/img/binance-outlined.svg" />
                    <div class="txt">
                        <div class="ttl">Download Binance Chain Wallet</div>
                        <div class="desc">A Crypto Wallet for Binance Smart Chain</div>
                    </div>{" "}
                    <a class="btn" target="_blank" href="buy-bnb.html#">
                        Download
          </a>{" "}
                </div>
            </div>
        </main>
    )
}

export default BuyBNB
