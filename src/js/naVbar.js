class ArcButtonNav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initEventListeners();
    this.highlightActiveLink();
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

  highlightActiveLink() {
    const links = this.shadowRoot.querySelectorAll('.nav-title');
    const currentPage = window.location.pathname.split('/').pop();

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(currentPage)) {
        link.classList.add('active-link');
      }
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        header {
          justify-content: center;
          display: flex;
          width: 100%;
          height: 15vh;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999;
          border: none;
        }

        .active-link {
          color: #ff1f0082 !important;
          font-weight: bold;
          text-decoration: underline;
          transform: scale(1.2);
        }

        .nav-title {
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          color: black;
          text-decoration: none;
          cursor: pointer;
          font-size: 1rem;
          border: none;
        }

        .header {
          background-image: url(../../assets/images/show/nav.svg);
          background-position: center;
          background-size: 100% 100%;
          width: 80%;
          height: 100%;
          position: relative;
          opacity: 1;
          border: none;
          margin: 0;
          padding: 0;
          transform: translate(0, -100%);
          transition: all 1s ease-in-out;
          animation: move 1.5s ease-in-out;
        }

        .ja {
          position: absolute;
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          transition: all 1s ease-in-out;
          animation: move1 1.5s ease-in-out;
          
        }

        .xian {
          position: absolute;
          top: 10%;
          left: 10%;
        }

        .fang {
          position: absolute;
          top: 40%;
          left: 30%;
        }

        .co {
          position: absolute;
          top: 40%;
          right: 30%;
        }

        .zhan {
          position: absolute;
          top: 10%;
          right: 10%;
        }

        img {
          width: 100%;
          height: 100%;
          border: none;
        }

        #logo {
        
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
     #logo-1{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .ACTIVE {
          opacity: 1;
          transform:translate(0,0);
        }

        .JA {
        top: 110%;
        transform:translateX(-50%) rotate(180deg);
        }

        @keyframes move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(0, -100%);
          }
        }

        @keyframes move1 {
          0% {
            top: 110%;
            transform:translateX(-50%) rotate(180deg);
            opacity:1;
          }
          100% {
            top: 10%;
            transform:translateX(-50%) rotate(0deg);
            opacity: 1;
          }
        }
      </style>

      <header>
        <div class="ja">
          <img src="../../assets/images/show/Vector (1).svg" alt="">
        </div>
        <div class="header">
          <div id="logo">
           <a href="../../index.html" class=".nav-title">
            <img src="../../assets/images/show/logo 2 (1).svg" alt="">
          </a>
          </div>

          <a href="../html/time.html" class="nav-title xian">
            <div style="width: 40px; height: 40px;">
              <img src="../../assets/images/show/Frame.svg" alt="">
            </div>
            <div>线</div>
          </a>
          <a href="../html/qipao_all.html" class="nav-title fang">
            <div style="width: 40px; height: 40px;">
              <img src="../../assets/images/show/Group 26608.svg" alt="">
            </div>
            <div>料</div>
          </a>
          <a href="../html/show.html" class="nav-title co">
            <div style="width: 40px; height: 40px;">
              <img src="../../assets/images/show/Vector (5).svg" alt="">
            </div>
            <div>扣</div>
          </a>
          <a href="../html/sfq.html" class="nav-title zhan">
            <div style="width: 40px; height: 40px;">
              <img src="../../assets/images/show/Group 26609.svg" alt="">
            </div>
            <div>展</div>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define('arc-button-nav', ArcButtonNav);
