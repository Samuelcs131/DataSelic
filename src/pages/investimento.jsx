import Head from 'next/head'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import companiesData from '../../public/empresas.json'
import Link from 'next/link';

const Invest = ({ secondInvest, firstInvest, thirdInvest, fourthInvest, fifthInvest, sixInvest}) => {

const checkIcon = <i aria-hidden className="fas fa-check"></i>
    return (
        <>
        <Head>
        <title>DataSelic - Investimento</title>
        </Head>

    <div className="container">
      <Navbar/>

      <h1>Melhores Investimentos CDB</h1>
      <p className="mb-5">Lista dos 3 melhores investimentos a curto prazo 2022</p>


      {/* INVESTIMENTOS */}
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm bg-secondary">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{thirdInvest.empresa}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{thirdInvest.cdi}%<small className="text-dark">CDI</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{thirdInvest.liquidez == true ? 'Liquidez diária' : 'Sem liquidez'}</li>
              <li>Max R${thirdInvest.vMax}</li>
              <li>Min R${thirdInvest.vMin}</li>
              <li>{thirdInvest.prazo}</li>
            </ul> 
            <Link href={thirdInvest.site}><a target="_blank" rel="noopener" type="button" className="w-100 btn btn-lg btn-outline-light">Ver mais</a></Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm bg-secondary">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{secondInvest.empresa}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{secondInvest.cdi}%<small className="text-dark">CDI</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
            <li>{secondInvest.liquidez == true ? 'Liquidez diária' : 'Sem liquidez'}</li>
              <li>Max R${secondInvest.vMax}</li>
              <li>Min R${secondInvest.vMin}</li>
              <li>{secondInvest.prazo}</li>
            </ul>
            <Link href={secondInvest.site}><a target="_blank" rel="noopener" type="button" className="w-100 btn btn-lg btn-outline-light">Ver mais</a></Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-secondary mb-4 rounded-3 shadow-sm border-light">
          <div className="card-header py-3 text-white bg-light border-light">
            <h4 className="my-0 fw-normal text-black">{firstInvest.empresa}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{firstInvest.cdi}%<small className="text-dark">CDI</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{firstInvest.liquidez == true ? 'Liquidez diária' : 'Sem liquidez'}</li>
              <li>Max R${firstInvest.vMax}</li>
              <li>Min R${firstInvest.vMin}</li>
              <li>{firstInvest.prazo}</li>
            </ul>
            <Link href={firstInvest.site}><a target="_blank" rel="noopener" type="button" className="w-100 btn btn-lg btn-outline-light">Ver mais</a></Link>
          </div>
        </div>
      </div>
    </div>

    <h2 className="display-6  text-center mb-4">Outros investimentos</h2>
    
    <div className="table-responsive mb-5">
      <table className="table text-center text-light">
        <thead>
          <tr>
            <th style={{width: '34%'}}></th>
            <th style={{width: '22%'}}><Link href={sixInvest.site}><a  target="_blank" rel="noopener" className="link-light">{sixInvest.empresa}</a></Link></th>
            <th style={{width: '22%'}}><Link href={fifthInvest.site}><a  target="_blank" rel="noopener" className="link-light">{fifthInvest.empresa}</a></Link></th>
            <th style={{width: '22%'}}><Link href={fourthInvest.site}><a  target="_blank" rel="noopener" className="link-light">{fourthInvest.empresa}</a></Link></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-start">CDI</th>
            <td>{sixInvest.cdi}%</td>
            <td>{fifthInvest.cdi}%</td>
            <td>{fourthInvest.cdi}%</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Liquidez diária</th>
            <td>{sixInvest.liquidez == true && checkIcon}</td>
            <td>{fifthInvest.liquidez == true && checkIcon}</td>
            <td>{fourthInvest.liquidez == true && checkIcon}</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Máximo investido</th>
            <td>R${sixInvest.vMax}</td>
            <td>R${fifthInvest.vMax}</td>
            <td>R${fourthInvest.vMax}</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Minimo investido</th>
            <td>R${sixInvest.vMin}</td>
            <td>R${fifthInvest.vMin}</td>
            <td>R${fourthInvest.vMin}</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Prazo</th>
            <td>{sixInvest.prazo}</td>
            <td>{fifthInvest.prazo}</td>
            <td>{fourthInvest.prazo}</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">FGC</th>
            <td>{sixInvest.fgc == true && checkIcon}</td>
            <td>{fifthInvest.fgc == true && checkIcon}</td>
            <td>{fourthInvest.fgc == true && checkIcon}</td>
          </tr>
          <tr>
            <th scope="row" className="text-start">Conta</th>
            <td>{sixInvest.conta}</td>
            <td>{fifthInvest.conta}</td>
            <td>{fourthInvest.conta}</td>
          </tr>
        </tbody>

         
      </table>
    </div>

          <Footer/>
        </div>
        </> 
     );
}

export async function getStaticProps(context) {

  /* DADOS EMPRESAS */
  const firstInvest = companiesData.filter(
  companie =>  companie.empresa == '99 Pay')[0]
  
  const secondInvest = companiesData.filter(
  companie =>  companie.empresa == 'XP investimentos')[0]
  
  const thirdInvest = companiesData.filter(
  companie =>  companie.empresa == 'Pagbank')[0]
  
  const fourthInvest = companiesData.filter(
  companie =>  companie.empresa == 'Bmg')[0]
  
  const fifthInvest = companiesData.filter(
  companie =>  companie.empresa == 'Genial')[0]
  
  const sixInvest = companiesData.filter(
  companie =>  companie.empresa == 'Picpay')[0]


  return {
    props: { secondInvest, firstInvest, thirdInvest, fourthInvest, fifthInvest, sixInvest}
  }
}


export default Invest;