
import logo from '../src/components/logotur.png';
import MeuComponente from './components/imgprincipal';
import imgprincipal from './components/imgprincipal';

function Home() {
  return (
    <div className="Home">
    <header>
      <nav>
      <div id="logo">
  {/* Aqui você pode colocar a tag <img> para exibir sua imagem */}
  <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Substitua logo pelo caminho da sua imagem do logo */}
  Acess <br /> Tour
</div>
       <ul className="navigation-menu">
              <li><a href="#">Inicio</a></li>
              <li><a href="#serv-groom">Serviços</a></li>
              <li><a href="#locate">Quem Somos</a></li>
            </ul>
            <div className="btn-group">
              <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined">Faça o seu login</span></button>
            </div>
          </nav>
        </header>

      <section className="hero">
        <h1>Explore o mundo com facilidade e conforto.</h1>
        <div id="img">
  {/* Aqui você pode colocar a tag <img> para exibir sua imagem */}
  <img src={MeuComponente} alt="img" style={{ width: '100px', height: 'auto' }} /> {/* Substitua logo pelo caminho da sua imagem do logo */}
  Acess <br /> Tour
</div>
        <div className="btn-group">
          <button className="btn-filled-dark"><span className="material-symbols-outlined">Sobre o nosso site</span></button>
          
        </div>
      </section>

  <div>
</div>
      <section id="serv-groom">
  <h2>Serviços</h2>
  <ul className="services">
    <li className="card-large card-dark card-wide">
      <div className="card-image1">
      <img src={require('./assets/localização4.png')} alt=""/>
      </div>
      <ul>
        <span className="subtitle">Guia por localização</span>
        <li><a href="#">Nosso guia por localização é a ferramenta perfeita para explorar destinos turísticos de forma fácil e conveniente.</a></li>
        <button className="btn-filled-dark"><span className="material-symbols-outlined">Saiba mais</span></button>
      </ul>
    </li>
    <li className="card-large card-dark card-wide">
      <div className="card-image">
        <img src={require('./assets/guias.png')} alt=""/>
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
            <button className="btn-filled-dark"><span className="material-symbols-outlined"></span> Find a Store</button>
            <button className="btn-outline-dark btn-hover-color"><span className="material-symbols-outlined"></span> Contact Us</button>
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