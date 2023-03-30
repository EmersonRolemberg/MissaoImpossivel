import { getClientes } from "./api/clientesApi"


function App() {

  return (
    <div>
      {<button onClick={getClientes}>Get Clientes</button> }
  
    </div>
    
  )
}

export default App