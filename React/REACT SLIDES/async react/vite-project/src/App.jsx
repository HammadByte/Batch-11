
import './App.css'

function App() {
async function clickme() {
  const api = await fetch('https://fakestoreapi.com/products/1')
  const apidata = await api.json()
  console.log(apidata)
}
  return (
    <>
<h1>stylohammad</h1>
<button onClick={clickme}>click me plz</button>
    </>
  )
}

export default App
