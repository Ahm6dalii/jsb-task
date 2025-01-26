import React, { useEffect } from 'react'
import RecipesCard from '../../components/RecipesCard';

const Recipes = () => {
    const [recipe,setRecipes]=React.useState(null)
    
    const getRecipes=async()=>{
        try {
            const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast', {
                method: 'GET',
              });     
              const {meals}=await res.json()
              const mealsArr=meals.slice(0,3)
              setRecipes(mealsArr)
            
        } catch (error) {
                console.log(error);
                
        }
    }

    useEffect(()=>{
            getRecipes()
    },[])
  return (
    <section className='md:m-0'>
        <div className="py-8 px-8  ">
            <h2 className=' tracking-wider text-center w-full uppercase  font-sen font-[800]  leading-15  text-[50px] sm:text-[60px] md:text-[70px] lg:text-[120px]  text-primary sm:leading-[100px]'>
            Recipes
            </h2>

            <div className='mt-5 mb-6 sm:max-w-[75%] mx-auto grid md:grid-cols-3 gap-4'>
                {
                    recipe?.map(({strMealThumb,strMeal,idMeal})=>(
                            <RecipesCard  key={idMeal} id={idMeal} img={strMealThumb} desc={strMeal}/>
                    ))
                }
            </div>
        <button className="block mx-auto  btn btn-primary">CONNACT US</button>
        </div>

</section>
  )
}

export default Recipes