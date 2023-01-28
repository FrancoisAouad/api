import express, { Application } from 'express';
class App {
  private app: Application;

  constructor(controllers: any) {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  listen() {
    this.app.listen(8001, () => {
      console.log('server listening on port 8001');
    });
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/api', controller.router);
    });
  }
}
export default App;
