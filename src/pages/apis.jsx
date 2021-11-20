import Head from 'next/head'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image'

const Invest = () => { 

  return ( 
        <>
        <Head>
      <title>DataSelic - APIs</title>
    </Head>
        <div className="container">
          <Navbar/>
      
 
    <h1>APIs utilizadas</h1>
    <p className="mb-5">Permite a extração de dados, para utilização em programas e aplicativos web, através da utilização de uma linguagem de programação.</p>



    <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: 'url("/img/photo-coins.jpg")',backgroundPosition: 'left center',
    backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Dados Selic coletados em tempo real</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <Image src="/img/logo-dataselic.svg" alt="Bootstrap" width="32" height="32" />
              </li>
              <li className="d-flex align-items-center me-3">
              <i className="fas fa-university me-2"></i>
                <small>Banco central</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="fas fa-calendar-alt me-3"></i> 
                <small>2021</small>
              </li>
            </ul>
            <Link href="https://dadosabertos.bcb.gov.br/dataset/4189-taxa-de-juros---selic-acumulada-no-mes-anualizada-base-252/resource/091e3cb3-4dca-488b-a89d-6c9bb56c9a99"><a target="_blank" className="stretched-link"></a></Link>
          </div>
        </div>
      </div> 

      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{background: 'url("/img/photo-coins-dark.jpg")',backgroundPosition: 'left center',
    backgroundSize: 'cover'}}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Informação sobre a desvalorização do real</h2>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <Image src="/img/logo-dataselic.svg" alt="Bootstrap" width="32" height="32" />
              </li>
              <li className="d-flex align-items-center me-3">
              <i className="fas fa-university me-2"></i>
                <small>IBGE</small>
              </li>
              <li className="d-flex align-items-center">
              <i className="fas fa-calendar-alt me-3"></i> 
                <small>2021</small>
              </li>
            </ul>
            <Link href="https://dados.gov.br/dataset/ia-indice-nacional-de-precos-ao-consumidor-amplo-ipca/resource/c2c5d52f-4b7d-4f07-a26c-5614b2b54c1e?inner_span=True"><a target="_blank" className="stretched-link"></a></Link>
          </div>
        </div>
      </div>
 
    </div>

          <Footer/>
        </div>
        </>
     );
}
 
export default Invest;