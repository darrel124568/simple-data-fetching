import React,{ useState, useEffect } from "react";

export default function App() {
const [image, setimage] = useState('')
const [loading, setloading] = useState(true)
const [clicked, setclicked] = useState(0)
useEffect(()=> {
setloading(true)
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    setimage(data.message)
    setloading(false)
})
},[clicked])
function handleClick() {
 setclicked(Math.random())
}
return (
    <div>
    {loading && <p>Loading...</p>}
    {!loading && <img src={image} alt="A Random Dog"/>}
    <button onClick={() => handleClick()}>Fetch new image</button>
    </div>
)
}
