import Head  from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; 
import axios from "axios";
import Image from 'next/image'
import companiesData from '../../public/empresas.json'


const App = ({dataSelic, dataIPCA, companiesData}) => { 

/* JUROS EFETIVO */
const effectiveInterest = (dataSelic.replace(',','.') - dataIPCA.replace(',','.')).toFixed(2).replace('.',',')

/* OPÇÕES INVESTIMENTO */
const invest1 = companiesData.filter(companie =>  companie.empresa == '99 Pay')[0]
const invest2 = companiesData.filter(companie =>  companie.empresa == 'Pagbank')[0]
const invest3 = companiesData.filter(companie =>  companie.empresa == 'XP investimentos')[0]

/* DADOS INPUT */
const [dataForm, setDataForm] = useState({
  taxSelic: dataSelic.replace(',','.'),
  taxCDB: invest1.cdi,
})

/* RECEBE DADOS DO FORMULARIO */
function handleDataForm(value){
    setDataForm( data => {
      return ( {...data, [value.target.name]: value.target.value,})
})}

/* ADICIONA ACTIVE-OPTION NA CLASSE */
const sizeOptionInvest = {height: '50px',width:'50px',userSelect: 'none'}
useEffect(()=>{
  const list =  document.querySelectorAll('.option-invest')

  for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click', ()=> {
        let j = 0;
        while(j < list.length){
            list[j++].className = 'bg-dark d-flex rounded-circle align-items-center me-3 justify-content-center'
        }
        list[i].className = 'bg-dark d-flex rounded-circle align-items-center me-3 border border-light justify-content-center'
    })
}
})


 
/* PAGE */
  return (
    <>
    <Head>
      <title>DataSelic - Calculadora</title>
    </Head>
    
    <div className="container">
    <Navbar/>
    <h1>Calculadora de investimentos</h1>
    <p className="mb-5">Vale apena investir? é possível descobrirmos isso se utilizarmos as ferramentas corretas.</p>
    

    <div className="row g-5">
    {/* INFORMAÇÕES SELIC */}
    <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="mb-3">Selic Hoje</h4>
        <ul className="list-group mb-3">
          <li className="bg-secondary list-group-item d-flex justify-content-between lh-sm">
            <div>
              <small className="text-white">SELIC</small>
              <h5 className="my-0 text-white">{dataSelic}%</h5>
            </div>
            <span className="text-white">Ano</span>
          </li>
          <li className="bg-secondary list-group-item d-flex justify-content-between lh-sm">
            <div>
              <small className="text-white">IPCA</small>
              <h5 className="my-0 text-white">{dataIPCA}%</h5>
            </div>
            <span className="text-white">Ano</span>
          </li>
           
          <li className="bg-secondary list-group-item d-flex justify-content-between">
            <span className="text-white"><b>Juros efetivo</b></span>
            <strong className="text-white">{effectiveInterest}%</strong>
          </li>
        </ul>
 
      </div>

    {/* CALCULADORA */}
    <div className="col-md-7 col-lg-8">
    <h4 className="mb-3">Calculadora</h4>
    <div className="card bg-secondary mb-5 text-white">
      <form className="card-body">
        <div className="mb-3">
          <label htmlFor="valueInvest">Valor investimento</label>
          <input type="number" id="valueInvest" name="valueInvest" className="form-control bg-dark text-white mt-1" placeholder="Ex: 1000" onChange={handleDataForm}/>
        </div> 
          
        <label htmlFor="prazo">Prazo</label>
        <div className="input-group mb-3 mt-1">
          <span className="input-group-text">Dia</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 30" aria-label="Dia investimento" name="dayInvest" onChange={handleDataForm}/>
          <span className="input-group-text">Mês</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 12" aria-label="Mês investimento" name="MonthInvest" onChange={handleDataForm}/>
          <span className="input-group-text">Ano</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 1" aria-label="Ano investimento" name="YearInvest" onChange={handleDataForm}/>
        </div>
 
        <div className="mb-3">
          <label htmlFor="taxSelic">Taxa selic</label>
          <input type="number" id="taxSelic" name="taxSelic" className="form-control bg-dark text-white mt-1" placeholder="Ex: 6.25" value={dataForm.taxSelic} onChange={handleDataForm}/>
        </div>

        <div className="mb-3">
          <label htmlFor="taxCDB">Taxa do CDB/LC</label>
          <input type="number" id="taxCDB" name="taxCDB" className="form-control bg-dark text-white mt-1" placeholder="Ex: 200" value={dataForm.taxCDB} onChange={handleDataForm}/>
        </div>
         
        <div className="d-flex">
          <div className="option-invest bg-dark d-flex  rounded-circle align-items-center me-3 justify-content-center border border-light" style={sizeOptionInvest} onClick={()=> setDataForm(alog =>{ return ({...alog, ['taxCDB']:invest1.cdi,}) })}>
          <Image src={invest1.image} alt={invest1.empresa} width="30px" height="30px"/>
          </div>

          <div className="option-invest bg-dark d-flex  rounded-circle align-items-center me-3 justify-content-center" style={sizeOptionInvest} onClick={()=> setDataForm(alog =>{ return ({...alog, ['taxCDB']:invest2.cdi,}) })}>
          <Image src={invest2.image} alt={invest2.empresa} width="35px" height="35px" />
          </div>

          <div className="option-invest bg-dark d-flex  rounded-circle align-items-center me-3 justify-content-center" style={sizeOptionInvest} onClick={()=> setDataForm(alog =>{ return ({...alog, ['taxCDB']:invest3.cdi,}) })}>
          <Image src={invest3.image} alt={invest3.empresa} width="30px" height="30px" />
          </div> 
          
          </div>
            <hr />
        <button className="btn btn-light">Calcular investimento</button>
      </form>
    </div>
    </div> 

    </div>

   

    <Footer/>
    </div> 
    </>
  );
};

export async function getStaticProps(context) {

  /* DATA HOJE */
  function datanow(func){ return Intl.DateTimeFormat('pt-BR', func).format()}

  let [day,year,month] = [datanow({day: 'numeric'}), datanow({year: 'numeric'}),datanow({month: 'numeric'})]

  let dateShort = day+month+year

  // REQUISIÇÕES BANCO CENTRAL BRASIL SELIC
  const dataSelic = await axios.get(`https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json&dataInicial=${dateShort}&dataFinal=${dateShort}`) 
  .then(dadosSelic => { 
      let valorSelic = dadosSelic.data[0].valor.replace('.', ',')
      return(valorSelic)
  })

  // REQUISIÇÃO IBGE IPCA
  const dataIPCA = await axios.get(`https://apisidra.ibge.gov.br/values/t/1737/n1/all/v/2265/p/${year+month-1}/d/v63%202`)
  .then(dados => {
      return(dados.data[1].V.replace('.',',')) 
  })

  return {
    props: { dataSelic, dataIPCA, companiesData }
  }
}





export default App;
