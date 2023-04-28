import "dotenv/config";
import  app  from "./app";
import { AppDataSource } from "./data-source";


const port = process.env.PORT

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
