import Head from 'next/head'
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Invest = () => {

  const [aparecerCard, setAparecerCard] = useState(false)
  const [aparecerTexto, setAparecerTexto] = useState(false)


  const [soma, setSoma] = useState([{nome: 'tinta', custo: 100},{nome: 'luva', custo: 20}])


  const CARD = <div className="mt-5 card text-dark">
  <div className="card-body">
  <h1>Card</h1>

  { aparecerTexto == true && (
    soma.map( valores => <p>{valores}</p>)
  ) }

  </div>
  </div>



  return ( 
        <>
        <Head>
      <title>DataSelic - Moedas</title>
    </Head>
        <div className="container">
          <Navbar/>

          <button className="btn btn-light" onClick={()=> setAparecerCard(true)}>Aparecer</button>

          <button className="ms-4 btn btn-success" onClick={()=> setAparecerTexto(true)}>Salvar</button>

          {aparecerCard == true && ( CARD )}

         
          <Footer/>
        </div>
        </>
     );
}
 
export default Invest;