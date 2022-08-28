import './App.css';

import { useEffect, useState } from 'react';
const BASE_URL = "https://dog.ceo/api/breeds/image/random"

function App() {
  
  const [dog, setDog] = useState({})
  const [breed, setBreed] = useState("")


  const fetchDogData = async () => {
    let response = await fetch(BASE_URL)
    let data = await response.json()
    setDog(await data)
    await setBreed(await getDogBreed())
  }


  const getDogBreed = async () => {
    let message = dog.message.split("/")
    let dog_breed = message[4].split("-")

    if (dog_breed.length >= 2) {
      return `${dog_breed[1]} ${dog_breed[0]}`
    } else {
      return dog_breed[0]
    }
  }

  useEffect(() => {

    fetchDogData()

  },[])


  return (
    <div className="App">
      <img  src={dog.message} className="dogImage"/>
      <h1>{breed}</h1>
      <button className='nextDog' onClick={() => fetchDogData()}>Next Dog</button>
    </div>
  )

}


export default App
