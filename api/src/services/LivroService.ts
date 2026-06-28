import  { updateLivro,createLivro } from "../DTO/request/livroDTO";
import { Livros } from "../entidades/Livros";
import { LivRepo } from "../repositories/LivRepo";
import GenericService from "./genericService";

export default  class LivrosService extends GenericService<createLivro,Livros,updateLivro>{
      constructor(){
        super(LivRepo)
      }
}