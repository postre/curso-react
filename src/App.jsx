import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greetings={'Todos los Productos'}  />
    </>
  )
}

export default App
