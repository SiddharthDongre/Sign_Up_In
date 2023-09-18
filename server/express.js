import cors from "cors";
import express from "express";
import { SignUp, SignIn } from "./route.js";


let app, hostName, port;

app = express();

hostName = "127.0.0.1";
port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/sign-up", SignUp);
app.post("/sign-in", SignIn);

app.listen(port, hostName, () => {
  console.log(`Server is listening on http://${hostName}:${port}`);
});