import React from 'react'
import './Search.css'
import {useState} from "react";




function Search() {

  const[valor, setValor] = useState("")
  const pegaInput = (evento)=>{
    setValor(evento.target.value)
}

  const pesquisar= (valor) =>{
    setValor(valor)
    console.log(valor)
  }
  return (
    <div className='SearchContainer'>
      <span>
        <input type="text" onChange = {pegaInput} value={valor} classname="SearchInput"></input>
        <input type="button" className="SearchButton"></input>
      </span>
    </div>
  )
}

export default Search