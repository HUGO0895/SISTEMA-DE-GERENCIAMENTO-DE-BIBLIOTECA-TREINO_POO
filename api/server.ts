import express, { Router } from 'express'
import cors from 'cors'
import { AppDataSource } from './src/data_conect'
import route from './routes'
const app=express()
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json());
const Port=3000




app.use(route)
AppDataSource.initialize()
  .then(() => {console.log("Banco conectado!")

    app.listen(Port, async ()=>{
    console.log("Server is running");
    console.log(`http://localhost:${Port}`)
});
  }
)
  .catch((err) => {
    console.error("Erro ao conectar:", err);
    process.exit(1);
  });
  

