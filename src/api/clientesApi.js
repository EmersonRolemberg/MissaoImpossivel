import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  export async function getClientes() {
    const response = await api.get("/clientes");
    console.log(response.data.msg)
    return response.data.msg;
  }
  export async function insertClientes(obj) {
    await api.post("/clientes", obj)
  }
  
  
  
  

