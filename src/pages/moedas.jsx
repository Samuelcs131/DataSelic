import Head from 'next/head'
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Invest = () => {
 
  return ( 
        <>
        <Head>
      <title>DataSelic - Moedas</title>
    </Head>
        <div className="container">
          <Navbar/>
      
          <Footer/>
        </div>
        </>
     );
}
 
export default Invest;