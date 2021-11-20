import Head  from "next/head";
import Navbar from "../components/Navbar";
import Link from 'next/link'

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
      <p className="lead fw-normal">Não sabe onde investir ou quer saber quanto rende um investimento? Você está no lugar certo!</p>
      <Link href="/investimento"><a className="btn btn-primary rounded-pill px-4 text-uppercase">Ver mais</a></Link>
    </div>
  
    </div> 
    </>
  );
};

export default App;
