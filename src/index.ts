import { App } from "./App";
import { LibraryCustomizations } from "../src/utils/LibraryCustomization";

LibraryCustomizations.init();

const app = new App();
app.listen(3000);
