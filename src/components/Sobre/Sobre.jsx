import './Sobre.css'

function Sobre() {
    return (
      <div className="sobre-container">
        <h2 className="sobre-title">Sobre Mim</h2>
        <p className="sobre-description">
        Olá, meu nome é Yuri Catunda, tenho 21 anos, moro em Recife-PE e estou atualmente cursando o terceiro período de Sistema para Internet na UNICAP, como também estou cursando Ciência da Computação na UFRPE, curso qual estou no segundo período. Sempre me identifiquei bastante com a área tecnológica e a parte de exatas, por isso decidi me aprofundar nessas graduações. Acredito que sempre busco me aperfeiçoar mais a cada dia e possuo uma sede de aprendizado, acompanhado de determinação e foco. Saindo um pouco da área acadêmica, nos tempos livres gosto muito de praticar atividades físicas ao ar livre e assistir filmes e séries. 
        </p>
        <div className="sobre-icons">
          <a href="https://www.linkedin.com/in/yuri-catunda-5316402a3/" className="sobre-icon-link">
        Linkedin
          </a>
          <a href="https://www.instagram.com/yuri.catunda/?hl=pt-br" className="sobre-icon-link">
        Instagram
          </a>
        </div>
      </div>
    );
  }
  
  export default Sobre;