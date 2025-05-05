import "reflect-metadata";
import { App } from "./App";

const PORT = 8000;
App.init().listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
