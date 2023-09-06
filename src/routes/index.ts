import { Router } from "express"
import userRouter from './users.route'
import roleRouter from "./roles.route"
import hospitalRouter from "./hospital.route"
import doctorRouter from "./doctor.route"
import treatmentRouter from "./treatment.route"
import degreeRouter from "./degree.route"
import awardRouter from "./award.route"
import specializationRouter from "./specialization.route"
import departmentRouter from "./department.route"
import categoryRouter from "./category.route"
import locationRouter from "./location.route"

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
    route: hospitalRouter,
  },
  {
    route: roleRouter
  },
  {
    route: doctorRouter
  },
  {
    route: treatmentRouter
  },
  {
    route: degreeRouter
  },
  {
    route: awardRouter
  },
  {
    route: specializationRouter
  },
  {
    route: departmentRouter
  },
  {
    route: categoryRouter
  },
  {
    route: locationRouter
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