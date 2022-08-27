import './App.css';

import { useEffect, useState } from 'react';
const BASE_URL = "https://dog.ceo/api/breeds/image/random"

function App() {
  
  const [dog, setDog] = useState({})
  const [breed, setBreed] = useState("")
  const [words, setWords] = useState([])


  const fetchDogData = async () => {
    let response = await fetch(BASE_URL)
    let data = await response.json()
    setDog(data)
    getDogBreed()
  }


  const getDogBreed = async () => {
    let message = dog.message.split("/")
    let dog_breed = message[4].split("-")

    for (let i in dog_breed) {
      setWords([dog_breed[dog]])
    }

    words.length > 1
    ?
    setBreed(`${dog_breed[1]} - ${dog_breed[0]}`)
    :
    setBreed(dog_breed[0])

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
  );
}


export default App
