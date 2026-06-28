import { Router } from 'express'
import LivrosRoutes from './src/routes/LivroRoutes'
import  CliRoutes   from './src/routes/CliRoutes'
import EmpRoutes  from './src/routes/EmpRoutes'
import ExeRoutes from './src/routes/ExemRoutes'
import PedRoutes from './src/routes/PedRoutes'
import FuncRoutes from './src/routes/FuncRoutes'
import FornRoutes from './src/routes/ForneRoutes'
import LoginRoutes from './src/routes/LoginRoutes'

const router=Router()
router.use(CliRoutes)
router.use(LivrosRoutes)
router.use(EmpRoutes)
router.use(ExeRoutes)
router.use(PedRoutes)
router.use(FuncRoutes)
router.use(FornRoutes)
router.use(LoginRoutes)
export default router