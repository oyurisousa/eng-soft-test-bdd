import { app } from "./app";

app.listen({
  port: 3333,
  host: '0.0.0.0'
}, () => console.log("server is running..."))