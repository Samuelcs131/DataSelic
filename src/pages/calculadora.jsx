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
  monthInvest: 0,
  yearInvest: 0,
  dayInvest: 0
})

/* RECEBE DADOS DO FORMULARIO */
function handleDataForm(value){
    setDataForm( data => {
      return ( {...data, [value.target.name]: value.target.value,})
})}

/* ADICIONA ACTIVE-OPTION NA CLASSE */
const sizeOptionInvest = {height: '50px',width:'50px',userSelect: 'none', cursor: 'pointer'}
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


// CALCULO INVESTIMENTO
  
function calculatorInvest(event){
event.preventDefault() 
// SOMA DATA
let sumTimeMonth = Number(
(Number(dataForm.dayInvest)/30) + 
 Number(dataForm.monthInvest) + 
(Number(dataForm.yearInvest)*12))

// SOMA DA TAXA SELIC
let sumInterestRate =  Number(
(((1+(Number(dataForm.taxSelic)/100))**(1/12))-1)*100) * (Number(dataForm.taxCDB)/100)

// CALCULO MONTANTE 
let grossReturn = Number(Number(dataForm.valueInvest) * (1+(sumInterestRate/100))**sumTimeMonth)
let juros = Number(grossReturn - dataForm.valueInvest)


// JUROS IR (IMPOSTO DE RENDA)
let resultInterestIR = 0

if(sumTimeMonth <= 6){
  resultInterestIR = juros * 0.225 
} else if(sumTimeMonth <= 12){
  resultInterestIR = juros * 0.20 
} else {
  resultInterestIR = juros * 0.175
}

let valueIR = resultInterestIR

// JUROS IOF (IMPOSTO SOBRE OPERAÇÕES FINANCEIRAS)
let resultInterestIOF = 0

let valueImpost = 0

const rateIOF = [0,0.96,0.93,0.90,0.86,0.83,0.80,0.76,0.73,0.70,0.66,0.63,0.60,0.56,0.53,0.50,0.46,0.43,0.40,0.36,0.33,0.30,0.26,0.23,0.20,0.16,0.13,0.10,0.06,0.03,0]

if( (sumTimeMonth*30) <= 29 ){
   resultInterestIOF = Number(juros - resultInterestIR) * Number(rateIOF[sumTimeMonth*30])

   valueImpost = valueIR + resultInterestIOF
 
} else {
   valueImpost = resultInterestIR
}
// RESULTADO LIQUIDO
let liquidReturn = grossReturn - valueImpost

// RESULTADO
const formCalculator = document.querySelector('#result-calculator')

formCalculator.innerHTML = 
`<div class="card bg-dark mt-3">
<div class="card-body">
<p>Impostos: </p>
<p>IR: R$ ${valueIR.toFixed(2).replace('.',',')}</p>
<p>IOF: R$ ${resultInterestIOF.toFixed(2).replace('.',',')}</p>
<hr/>
<p>Resultados:</p>
<p>Retorno Bruto: <b>R$ ${grossReturn.toFixed(2).replace('.',',')}</b></p>
<p>Imposto de Renda: <b>R$ ${valueImpost.toFixed(2).replace('.',',')}</b></p>
<hr/>
<h5>Retorno Líquido: <b>R$ ${liquidReturn.toFixed(2).replace('.',',')}</b></h5>
</div>
</div>` 
 
} 

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
      <form className="card-body" id="form-calculator">
        <div className="mb-3">
          <label htmlFor="valueInvest">Valor investimento</label>
          <input type="number" id="valueInvest" name="valueInvest" className="form-control bg-dark text-white mt-1" placeholder="Ex: 1000" onChange={handleDataForm} min="0" required/>
        </div> 
          
        <label htmlFor="prazo">Prazo</label>
        <div className="input-group mb-3 mt-1">
          <span className="input-group-text">Dia</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 30" aria-label="Dia investimento" name="dayInvest" value={dataForm.dayInvest} onChange={handleDataForm} min="0"  required/>
          <span className="input-group-text">Mês</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 12" aria-label="Mês investimento" name="monthInvest" value={dataForm.monthInvest} onChange={handleDataForm} min="0"  required/>
          <span className="input-group-text">Ano</span>
          <input type="number" className="form-control bg-dark text-white" placeholder="Ex: 1" aria-label="Ano investimento" name="yearInvest" value={dataForm.yearInvest} onChange={handleDataForm} min="0"  required/>
        </div>
 
        <div className="mb-3">
          <label htmlFor="taxSelic">Taxa selic</label>
          <input type="number" id="taxSelic" name="taxSelic" className="form-control bg-dark text-white mt-1" placeholder="Ex: 6.25" value={dataForm.taxSelic} onChange={handleDataForm}  required/>
        </div>

        <div className="mb-3">
          <label htmlFor="taxCDB">Taxa do CDB/LC</label>
          <input type="number" id="taxCDB" name="taxCDB" className="form-control bg-dark text-white mt-1" placeholder="Ex: 200" value={dataForm.taxCDB} onChange={handleDataForm} min="0"  required/>
        </div>
         
        {/* OPÇÕES INVESTIMENTOS */}
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
        <button className="btn btn-light" onClick={calculatorInvest} >Calcular investimento</button>
          <div id="result-calculator">
          
          </div>
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
