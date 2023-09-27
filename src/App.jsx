import { useEffect, useState } from 'react'
import './App.css'

function App() {
const GIPHY_API_KEY = "Us1CEnPzP722Tbp9YrBTb7ADcRt7NhyL"
const [Facto, setFacto] = useState()
const [CatGif, setCatGif] = useState()
const callGiphyApi = (string) =>{
  fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("gif", data);
    setCatGif(data.data[0].images.original.url)})
  
}
const callApi = ()=>{
  fetch('https://catfact.ninja/fact')
  .then((res) => res.json())
  .then((data) => 
  {setFacto(data.fact);
  callGiphyApi(data?.fact?.split(" ").slice(0, 3).join(" "));
  console.log(data.fact)
  })
}

 useEffect(callApi, [])
 
//https://catfact.ninja/fact




  return (
    <>
     <h1>{Facto}</h1>
     <img src={CatGif} alt="" />
    <div>
      <button onClick={callApi}>factos</button>
      
    </div>
    
    </>
  )
}

export default App
//.split(" ").slice(0, 3).join(" "));