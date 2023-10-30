import './App.css';

function App() {
  return (

     <div className='container'>
   <header>
    <p>React JS</p>
   </header>

   <main>
    <section className='box-titulo'>
     <h1>React JS</h1>
     <p>Biblioteca JavaScript para criar SPAs</p>

     <a>Site Oficial</a>
    </section>

    <section className='box-requisitos'>
     <h2>Requisitos</h2>
     <p>Veja abaixo os requisitos mínimos para aprender React JS:</p>

     <div className='box-cards'>
      <div className='card'>
       <h3>HTML</h3>
       <p>Aprender a estruturar os elementos da página com HTML</p>
      </div>
      <div className='card'>
       <h3>CSS</h3>
       <p>Aprender a estilizar os elementos da página com CSS</p>
      </div>
      <div className='card'>
       <h3>JavaScript</h3>
       <p>Aprender a linguagem utilizada pelo React JS, o JavaScript</p>
      </div>
     </div>
    </section>
   </main>

   <footer>
    <p className="autor">Curso de introdução de React JS</p>
   </footer>

  </div>


   // <div className="Container">
   // <h1>Hello word</h1>
   // <p>Com React JS</p>
   // <p className="autor">Criado Por Helifaz Rocha</p>
   // </div>
  );
}

export default App;
