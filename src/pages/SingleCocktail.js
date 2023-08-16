import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id}=useParams();
 const [loading,setLoading]=useState(false);
 const[cocktail,setCocktail]=useState('');

useEffect(()=>{
  setLoading(true);
  async function getCocktail(){
    try {
      const respone =await fetch(`${url}${id}`);
      // console.log(respone.json());
      const data=await respone.json();
      // console.log(data);
      if(data.drinks){
        const {strDrink,strDrinkThumb,strAlcoholic,
          strCategory,strGlass,strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
         }=data.drinks[0];
          const ingredients=[strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,]
            const newCocktail={
              strDrink,strDrinkThumb,strAlcoholic,
          strCategory,strGlass,strInstructions,
          ingredients
            }
            setCocktail(newCocktail);
            // console.log(cocktail);
      }
      else{
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  getCocktail();
},[id])
console.log(cocktail);
if(loading){
  return <Loading/>
}
if(!cocktail){
  return(
    <h2 className='section-title'>no cocktail details available!</h2>
  )
}
 
const {strDrink,strDrinkThumb,strAlcoholic,
  strCategory,strGlass,strInstructions,ingredients}=cocktail;
  return (
    <section className='section cocktail-section'>
    <Link to="/" className='btn btn-primary'>Back home</Link>
    <h2 className='section-title'>{strDrink}</h2>
    <div className="drink">
      <img src={strDrinkThumb} alt={strDrink} />
      <div className="drink-info">
        <p><span className='drink-data'>name:</span>
        {strDrink}
        </p>
        <p><span className='drink-data'>Catgeory:</span>
        {strCategory}
        </p>
        <p><span className='drink-data'>info:</span>
        {strAlcoholic}
        </p>
        
        <p><span className='drink-data'>glass:</span>
        {strGlass}
        </p>
        <p><span className='drink-data'>instructions:</span>
        {strInstructions}
        </p>
        <p><span className='drink-data'>ingredients:</span>
        {ingredients.map((item,index)=>{
          return item?<span key={index}>{item}</span>:null
        })}
        </p>
      </div>
    </div>
    </section> 
  )
}

export default SingleCocktail
