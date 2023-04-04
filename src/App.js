import React, { useState, useEffect } from 'react'

import './App.css';


function App() {
  const [meal,setMeal] = useState({})
const API = 'http://localhost:3001/api/getRandomMeal';

const fetchMeal = () => {
  fetch(API).then((res) => res.json()).then((res) => {
    console.log(res)
    setMeal(res)
  })
}
useEffect(()=>{
  fetchMeal()
},[])
  return (
    <div className="w-full h-full  flex justify-center	items-center text-center ">
    
      <div className='bg-red-100 w-fit px-[40px] py-[30px] my-auto rounded-xl  shadow-black shadow-slate-50	'>
      <form action="/action_page.php">
      <h2 className='text-xl font-bold underline'>Today's Meal</h2>
      <h1 className='text-3xl font-bold capitalize' >{meal.name}</h1>
      <p className="my-[30px]">Remplissez la formule pour envoyez votre commande:</p>
  <label>First name:</label><br/>
  <input type="text" id="fname" name="fname" className='border border-black'/><br/>
  <label >Last name:</label><br/>
  <input type="text" id="lname" name="lname"  className='border border-black'/><br/><br/>
  <label >Numero de telephone:</label><br/>
  <input type="text" id="lname" name="lname" className='border border-black' /><br/><br/>
  <label >Zone de livraison:</label><br/>
  <input type="text" id="lname" name="lname" className='border border-black' /><br/><br/>
  <input type="submit" value="Envoyez" className='border border-black px-6 py-2 text-white bg-black rounded-md cursor-pointer'/>
</form>
      </div>
    </div>
  );
}

export default App;
