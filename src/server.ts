import { controller } from './auth/auth.controller';
import application from './app';
const app = new application([new controller()]);

app.listen();
