import React from 'react'

function Header(props) {
  return (
    <header style={{position:"fixed",top:"0", width:"100%", zIndex:"999"}}>
      <div class="top-notification hidden"> <span class="txt"></span>
        <a class="btn-close"></a>
      </div>
      <div class="container">
        <div class="logo">
          <a href="index.html"> <img src="/img/fullLogo.png" style={{height:"60",width:"200px",padding:15}} />
            {/* <div class="txt">swamp.finance</div> */}
          </a>
        </div>
        <menu>
          <ul>
            <li class={window.location.pathname === "/" ? "selected" : ""}><a onClick={() => { window.location.pathname = "/" }}>Earn</a></li>
            <li className={window.location.pathname === "/tutorial" ? "selected" :""}><a onClick={() => { window.location.pathname = "/tutorial" }}>Tutorials</a></li>
            <li className={window.location.pathname === "/docs" ? "selected" :""}><a onClick={() => { window.location.pathname = "/docs" } }>Docs</a></li>
            <li className={window.location.pathname === "/buybnb" ? "selected" :""}><a onClick={() => { window.location.pathname = "/buybnb" }} >Buy BNB</a></li>
            <li  className={window.location.pathname === "/downloadwallet" ? "selected" :""}><a onClick={() => { window.location.pathname = "/downloadwallet" }}>Download Wallet</a></li>
          </ul>
        </menu>
        <div class="wallet" >
          <div class="swamp-price"> <img src="/img/shield.png"  style={{height:50, width:45}}/>
            <div class="txt ml-10 price">$132.94</div>
          </div> <a style={{ borderRadius: "20px" }} class="btn small ml-20 primary buy-swamp hidden">Buy SWAMP</a> <a
            class="btn small ml-10 btn-wallet" style={{ color: "white", fontWeight: "bold", background: "#3C4E5A", borderRadius: "20px" }} id="btn-wallet-unlock">Unlock Wallet</a>
          <div class="balance ml-10 hidden"> <span class="swamp-balance">0 SWAMP</span>
            <div class="wallet-info"> <span class="wallet-address">...</span> <span
              class="icon ml-10"></span> </div>
          </div>
        </div>
        <div class="hamburger" style={{ cursor: "pointer" }} >
          <svg viewBox="0 0 18 15">
            <path fill="#3C4E5A"
              d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
            <path fill="#3C4E5A"
              d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
            <path fill="#3C4E5A"
              d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
          </svg>
        </div>
      </div>
      {/* "mobile-menu visible": */}
      <div class={"mobile-menu"}>
        <div class="wallet" style={{ color: "white" }}> <a style={{ color: "white" }} class="btn small ml-10 btn-wallet" id="btn-wallet-unlock">Unlock Wallet</a>
          <div class="balance ml-10 hidden"> <span class="swamp-balance">0 SWAMP</span>
            <div class="wallet-info"> <span class="wallet-address">...</span> <span
              class="icon ml-10"></span> </div>
          </div>
          <div class="break"></div>
          <div class="swamp-price"> <img src="static/frontend/img/symbols/swamp.svg" />
            <div class="txt ml-10 price">$132.94</div>
          </div> <a class="btn small ml-20 primary buy-swamp">Buy SWAMP</a>
        </div>
        <div class="menu">
          <ul>
          <li class={window.location.pathname === "/" ? "selected" : ""}><a onClick={() => { window.location.pathname = "/" }}>Earn</a></li>
            <li className={window.location.pathname === "/tutorial" ? "selected" :""}><a onClick={() => { window.location.pathname = "/tutorial" }}>Tutorials</a></li>
            <li className={window.location.pathname === "/docs" ? "selected" :""}><a onClick={() => { window.location.pathname = "/docs" } }>Docs</a></li>
            <li className={window.location.pathname === "/buybnb" ? "selected" :""}><a onClick={() => { window.location.pathname = "/buybnb" }} >Buy BNB</a></li>
            <li  className={window.location.pathname === "/downloadwallet" ? "selected" :""}><a onClick={() => { window.location.pathname = "/downloadwallet" }}>Download Wallet</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
