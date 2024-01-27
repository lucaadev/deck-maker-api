import { App } from './App';
import 'dotenv/config';
declare var process : {
    env: {
      PORT: string
    }
  }

const PORT = process.env.PORT;

new App().start(PORT);
