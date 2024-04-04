import React from 'react'
import "./TempInfo.css"

function TempInfo() {
  return (
    <div className='TempContainer'>

      <span>
        <div className='Cidade'>
            <h1>Sorocaba</h1>
            <h1>19</h1>
        </div>

        <div className='Condicao'>
            <p>Nublado</p>
            <h1>Vento: X km/h</h1>
            <h1>Umidade: Y %</h1>
        </div>

      </span>




    </div>
  )
}

export default TempInfo