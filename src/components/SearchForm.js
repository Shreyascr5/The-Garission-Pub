import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext();
  const searchValue=useRef('');
const searchcocktail=()=>{
  setSearchTerm(searchValue.current.value);
}
//to focus on the input field
useEffect(()=>{
  searchValue.current.focus();
},[]);
//to prevent reloading of the application
const handleSubmit=(e)=>{
  e.preventDefault();
}
  return (
    <section className='section search'>
    <form className='search-form' onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Search your favourite cocktail</label>
        <input type="text" id='name' ref={searchValue} onChange={searchcocktail}/>
      </div>
    </form>
    </section>
  )
}

export default SearchForm
