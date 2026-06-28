import { ObjectLiteral, Repository } from "typeorm";
import { DeepPartial } from "typeorm";
export default abstract class  GenericService<Tcreate ,Entity extends ObjectLiteral,Tupdate extends DeepPartial<Entity>>{
      constructor(private Repo:Repository<Entity>){}
      public async  create(elemento:Tcreate){
        const elementoSave=this.Repo.create(elemento as DeepPartial<Entity>)
        return await this.Repo.save(elementoSave)
      }
      
      public async update(elemento:Tupdate,id:number){
         const alteracoes=Object.fromEntries(
                Object.entries(elemento).filter(([_,v])=>v!==undefined)
             ) as Entity
        return await this.Repo.save({id,...alteracoes})
      }
      
      public async delete(id:number){
         return this.Repo.delete(id)
      }

      public async get(filtros:Partial<Entity>){
        return this.Repo.find({where:filtros})
      }
}