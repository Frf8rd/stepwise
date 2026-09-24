import express from "express";
import { verifyDatabaseConnection } from "./src/utils/prisma.js"


app.use(express.json());

const app = express();
const PORT = process.env.PORT || 5000;

//Verify DB-Connection
await verifyDatabaseConnection();



app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})