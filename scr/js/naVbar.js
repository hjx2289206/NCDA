class ArcButtonNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initEventListeners();
  }
initEventListeners() {
  const ja = this.shadowRoot.querySelector('.ja');
  const header = this.shadowRoot.querySelector('.header');
  ja.addEventListener('click', () => {
    if (header.classList.contains('ACTIVE') && ja.classList.contains('JA')) {
      header.classList.remove('ACTIVE');
      ja.classList.remove('JA');
    } else {
      header.classList.add('ACTIVE');
      ja.classList.add('JA');
    }
  });
}
  render() {
    this.shadowRoot.innerHTML = `
        <style>
      header {
        justify-content: center;
        display: flex;
        width: 100%;
        height: 15vh;
        position: relative;
        top: 0;

    }

    .nav-title {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        color: black;
        text-decoration: none;
        cursor: pointer;
        font-size:1rem;
    }
    .header {
        background-image: url(../../assets/images/show/nav.svg);
        background-position: center;
        background-size: 100% 100%;
        width: 80%;
        height: 100%;
        position: relative;
        opacity: 1;

        transition: all 0.5s ease-in-out;
       animation: move 1s ease-in-out ;
    }

.ja{
    position: absolute;
    top: 110%; 
    left: 50%;
    transform: translateX(-50%);
cursor: pointer;
transition: all 0.5s ease-in-out;
animation: move1 1s ease-in-out;
}
.xian{
position: absolute;
top: 10%;
left: 10%;

}
.fang{
position: absolute;
top: 40%;
left: 30%;
}

.co{
position: absolute;

top: 40%;
right: 30%;
}
.zhan{
position: absolute; 
top: 10%;
right: 10%;

}

img {
        width: 100%;
        height: 100%;
    }
    #logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
.ACTIVE {
 opacity: 0;
 transform: translate(0, -100%);
}

.JA {
    top: 10%;
    transform: rotate(180deg);
}
    @keyframes move {
        0% {
            transform: translate(0,-100%);
            
        }
        100% {
            transform: translate(0,0);
        }
    }
        @keyframes move1 {
        0% {
          top: 10%;
          
opacity: 0;

          // transform: rotate(180deg);
        }
        100% {
           top: 110%;
          
            opacity: 1;
          // transform: rotate(0deg);
        }
    }
    </style>
   <header>
            <div class="ja"><img src="../../assets/images/show/Vector (1).svg" alt=""></div>
            <div class="header">
                <!-- <div id="ja"><img src="../../assets/images/show/Vector (1).svg" alt=""></div> -->
               
                <div id="logo"><img src="../../assets/images/show/logo 2 (1).svg" alt=""></div>
                
                <a href="../html/time.html" class="nav-title xian">
                    <div style="width: 40px; height: 40px;"><img src="../../assets/images/show/Frame.svg" alt=""></div>
                    <div>线</div>
                </a>
                <a href="../html/time.html" class="nav-title fang">
                    <div style="width: 40px; height: 40px;"> <img src="../../assets/images/show/Frame (3).svg" alt=""></div>
                    <div>坊</div>
                </a>
                <a href="../html/show.html" class="nav-title co">
                    <div style="width: 40px; height: 40px;"><img src="../../assets/images/show/Vector.svg" alt=""></div>
                    <div>扣</div>
                </a>
                <a href="../html/sfq.html" class="nav-title zhan">
                    <div style="width: 40px; height: 40px;"><img src="../../assets/images/show/Frame (1).svg" alt=""></div>
                    <div>展</div>
                </a>

            </div>
        </header>
 `;
  }
}

customElements.define('arc-button-nav', ArcButtonNav);

