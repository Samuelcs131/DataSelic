import Head  from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const App = () => { 

  return (
    <>
    <Head>
      <title>DataSelic - Home</title>
    </Head>
    
    <div className="container">
    <Navbar/>

    <div className="text-center col-md-6 p-lg-6 mx-auto" style={{margin: "20% 0"}}>
      <h1 className="display-4 fw-normal">Bem vindo a DataSelic</h1>
      <p className="lead fw-normal">Não sabe onde investir ou quer saber quanto rende um investimento? Você está no lugar certo! </p>
      <a className="btn btn-primary rounded-pill px-4 text-uppercase">Ver mais</a>
    </div>

    </div> 
    </>
  );
};

export default App;
