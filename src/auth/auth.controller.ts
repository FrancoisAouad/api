import express, { Router } from 'express';
import { Service } from './auth.services';
const service = new Service();
export class controller {
  private router: Router;
  private path: string;
  constructor() {
    this.router = express.Router();
    this.path = '/register';
    this.initializeRoutes();
  }
  register(req: any, res: any, next: any) {
    try {
      const result = service.register(req.body);
      res.status(200).send({ data: result });
    } catch (error) {
      console.log({ err: error });
    }
  }
  secondRoute(req: any, res: any, next: any) {
    try {
      const result = service.secondRoute(req.body);
      res.status(200).send({ data: result });
    } catch (error) {
      console.log({ err: error });
    }
  }
  initializeRoutes() {
    this.router.post(`${this.path}`, this.register);
    this.router.post(`/two`, this.secondRoute);
  }
}
