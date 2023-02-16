import React from 'react';
import Banner from '../components/Banner';
import { useOutletContext } from 'react-router-dom';

function Home() {
  
  const context = useOutletContext();
  const navbarRef = context.ref;

  return (
    <div>
      <Banner ref={navbarRef} />
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
      <h1>Salstore</h1>
    </div>
  )
}

export default Home