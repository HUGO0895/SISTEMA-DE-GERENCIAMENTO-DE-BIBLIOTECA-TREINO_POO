import { Router } from "express";
import LivroController from "../controller/livroController";
const router=Router()
router.post("/livro",LivroController.createLivro)
router.put("/livro",LivroController.updateLivro)
router.delete("/livro/:id",LivroController.deleteLivro)
router.get("/livro",LivroController.getLivros)

export default router
