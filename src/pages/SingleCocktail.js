import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}=useParams();
 const [loading,setLoading]=useState(false);
 const[cocktail,setCocktail]=useState(null);
 

 

  return (
    <section className='section cocktail-section'>
   
         {id}
    </section>
  )
}

export default SingleCocktail
