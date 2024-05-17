import dotenv from "dotenv";
import server from "./Server";
import "./Routes";



(async ()=> {
    dotenv.config();

    await server.start();
})();