import { Router } from "express"
import userRouter from './users.route'
import roleRouter from "./role.route"

const router = Router()

type RouterType = {
  route: Router,
  path?: string
}

const defaultRoutes: RouterType[] = [
  {
    route: userRouter,
  },
  {
    route: roleRouter
  }
]

defaultRoutes.forEach(route => {
  if (!!route?.path) {
    router.use(route.path, route.route)
  } else {
    router.use(route.route)
  }
})

router.get("", (req, res) => {
  res.send("<h1>hi</h1>");
});

export default router