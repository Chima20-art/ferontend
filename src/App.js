import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

function App() {
  const [meal, setMeal] = useState({});
  const[name,setName] = useState('');
  const[surname,setSurname] = useState('');
  const[phone,setPhone] = useState('');
  const[adress, setAdress] = useState('');

  const Meal_API = "http://localhost:3001/api/getRandomMeal";

  const fetchMeal = () => {
    fetch(Meal_API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMeal(res);
      });
  };
  useEffect(() => {
    fetchMeal();
  }, []);

 


const onSend = async (event) => {
  event.preventDefault()

  try {
    const  response = await axios.post("http://localhost:3001/api/sendEmail",{ name, phone, surname, adress } );
     
      if (response.status) {
        toast.success('Email sent!')
        
      } else {
        toast.error('Ooops! there was an error: Email not sent')
          
      }   
  } catch (error) {
    toast.error('Ooops! there was an error: Email not sent')
 
  }
  setName('')
  setPhone('')
  setAdress('')
  setSurname('')
}
  return (
    <div className="w-full h-full  flex justify-center	items-center text-center ">
      <div className="bg-red-100 w-fit px-[40px] py-[30px] my-auto rounded-xl  shadow-black shadow-slate-50	">
        <form onSubmit={onSend}>
          <h2 className="text-xl font-bold underline">Today's Meal</h2>
          <h1 className="text-3xl font-bold capitalize">{meal.name}</h1>
          <p className="my-[30px]">
            Remplissez la formule pour envoyez votre commande:
          </p>
          <label>First name:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="fname"
            className="border border-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            className="border border-black"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <br />
          <br />
          <label>Numero de telephone:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            className="border border-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <br />
          <label>Zone de livraison:</label>
          <br />
          <input
            type="text"
            id="lname"
            name="lname"
            className="border border-black"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <br />
          <br />
          <button
           
            type="submit"
            value="Envoyez"
            className="border border-black px-6 py-2 text-white bg-black rounded-md cursor-pointer"
          > Envoyer ma commande</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
