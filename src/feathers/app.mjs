import { feathers } from "@feathersjs/feathers";
import {
  koa,
  rest,
  bodyParser,
  errorHandler,
  serveStatic,
} from "@feathersjs/koa";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

export default class MessageService {
  constructor() {
    this.messages = [];
  }

  find() {
    return this.messages;
  }

  create(data) {
    if (!data || !data.text) {
      throw new TypeError("data.text is required");
    }

    if (typeof data.text !== "string") {
      throw new TypeError("data.text must be a string");
    }

    const message = {
      id: this.messages.length,
      text: data.text,
    };

    this.messages.push(message);
    return message;
  }
}

// Creates an KoaJS compatible Feathers application
export const app = koa(feathers());

// Use the current folder for static file hosting
app.use(serveStatic("."));

// Register the error handle
app.use(errorHandler());

// Parse JSON request bodies
app.use(bodyParser());

// Register REST service handler
app.configure(rest());

// Register our messages service
app.use("messages", new MessageService());

export const startServer = () => {
  app.listen(3030);
  console.log("Feathers server listening on localhost:3030");
};

// If run as main, start the server
/* istanbul ignore if */
if (__filename === process.argv[1]) {
  startServer();
}
