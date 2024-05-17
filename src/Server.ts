import express, { Express } from "express";
import mongo from "mongoose";
import router from "./Routes";


class HttpServer{
  private _app: Express = express();

  get app(): Express{
    return this._app;
  }

  private listenHttpServer(): Promise<void>{
    return new Promise((resolve, reject) => {
      const host = process.env.API_HOST;

      const port = process.env.API_PORT;

      this._app
        .listen(port, () => {
          const url: string = `${host}:${port}`

          console.log(`RUN API: ${url}`);

          resolve();
        })
        .on("error", () => reject(new Error("Failed to start the API")))
    })
  }

  private async connectMongoDB(): Promise<void>{
    const url: string = process.env.MONGO_URL || "";

    await mongo.connect(url);
  }

  async start(){
    this.app.use(express.json());
    
    this.app.use(router);
    
    await Promise.all([
      this.listenHttpServer(),
      this.connectMongoDB()
    ]);
  }
}


export default new HttpServer();