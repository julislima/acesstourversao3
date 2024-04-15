import banner1 from './components/banner1.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap



function Home() {
  return (
    <div className="Home">
      <header>
        <nav>
          <div id="logo">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.8 32H0V21.9849C0 17.1239 4.0116 13.1839 8.96 13.1839H15.2V0.468341C15.2 0.251458 15.3792 0.0754376 15.6 0.0754376C15.7184 0.0754376 15.8308 0.127301 15.9068 0.216883L17.3616 1.92719C18.402 1.07577 19.74 0.563816 21.2 0.563816H22C23.442 0.563816 24.7656 1.06359 25.8 1.89654L27.2932 0.14066C27.3692 0.0514706 27.4812 0 27.6 0C27.8208 0 28 0.175628 28 0.392904V15.3896H23.36C17.528 15.3896 12.8 20.0337 12.8 25.7623V32Z" fill="#45413E" />
              <path fillRule="evenodd" clipRule="evenodd" d="M29.76 17.0569V12.0875C29.76 12.0836 29.76 12.0797 29.76 12.0758V6.79004C29.76 6.57435 29.9392 6.4 30.16 6.4C30.266 6.4 30.3676 6.44095 30.4424 6.51389L31.9576 7.98784C32.7864 7.42501 33.7936 7.09504 34.88 7.09504C35.97 7.09504 36.9808 7.42735 37.8112 7.99369L39.3176 6.52793C39.3924 6.45499 39.494 6.41404 39.6 6.41404C39.8208 6.41404 40 6.58878 40 6.80408V23.2632C40 28.0883 35.9884 32 31.04 32H14.4V25.7938C14.4 20.969 18.4116 17.0569 23.36 17.0569H29.76Z" fill="#45413E" />
            </svg>

            Acess <br /> Tour
          </div>


          <ul className="navigation-menu">
            <li><a href="#">Inicio</a></li>
            <li><a href="#serv-groom">Serviços</a></li>
            <li><a href="#locate">Quem Somos</a></li>
          </ul>
        </nav>

      </header>
      <section className="hero">
        <h1>Explore o mundo com facilidade e conforto.</h1>
        <div className="btn-group">
          <button className="btn-filled-dark"><span className="material-symbols-outlined">Sobre o nosso site</span></button>
        </div>
      </section>

          <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


      <section id="serv-groom">
  <h2>Serviços</h2>
  <ul className="services">
    <li className="card-large card-dark card-wide">
      <div className="card-image">
        <img src={banner1} alt="piroquinha"/>
      </div>
      <ul>
        <span className="subtitle">Guia por localização</span>
        <li><a href="#">Nosso guia por localização é a ferramenta perfeita para explorar destinos turísticos de forma fácil e conveniente.</a></li>
        <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
      </ul>
    </li>
    <li className="card-large card-dark card-wide">
      <div className="card-image">
        <img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png" alt=""/>
      </div>
      <ul>
        <span className="subtitle">Guias Turísticos</span>
        <li><a href="#">Nossos guias são pensados de acordo com as suas preferências individuais, oferecendo as recomendações mais acessíveis e pensando nas suas necessidades.</a></li>
        <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
      </ul>
    </li>
  </ul>
</section>
      <section id="locate">
        <div>
          <h2>Quem Somos</h2>
          <p>Somos uma plataforma de turismo comprometida em proporcionar experiências de viagem inclusivas para todos os viajantes. Acreditamos que viajar é um direito universal e estamos empenhados em tornar isso uma realidade para pessoas de todas as habilidades.</p>
          <div className="btn-group">
            <button className="btn-filled-dark"><span className="material-symbols-outlined">pin_drop</span> Find a Store</button>
            <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">contact_support</span> Contact Us</button>
          </div>
        </div>
      </section>
      <footer>
          <ul>
            <p><strong>Conheça-nos</strong></p>
            <li><a href="#">Sobre o AcessTour</a></li>
            <li><a href="#">Missões e Valores</a></li>
            <li><a href="#">Privacidade</a></li>
            
          </ul>
          <ul>
          <p><strong>Contato</strong></p>

            <li><a href="#">Informações de Contato</a></li>
            <li><a href="#">Links de Redes Sociais</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
          <ul>
            <p><strong>Acessibilidade e Engajamento</strong></p>
            <li><a href="#">Política de Acessibilidade</a></li>
            <li><a href="#">Certificações e Selos de Acessibilidade</a></li>
          </ul>
          <ul>
            <p><strong>Acessibilidade e Engajamento</strong></p>
            <li><a href="#">Copyright e Avisos Legais</a></li>
            <li><a href="#">Suporte de Acessibilidade</a></li>
          </ul>
        </footer>
      </div>
    );
  }
  
  export default Home;