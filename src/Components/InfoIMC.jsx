import React from 'react'

export const InfoIMC = ({imc, peso, altura, diaDePesaje, horaDePesaje}) => {
  return (
    <div className='col m6 s12'>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'>IMC</span>
          <div className='card-data center m6 s6'>
            <p>IMC: {imc}</p>
            <p>Peso: {peso} kg</p>
            <p>Altura: {altura} cm</p>
            <p>Dia de Pesaje: {diaDePesaje}</p>
            <p>Hora de Pesaje: {horaDePesaje}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

