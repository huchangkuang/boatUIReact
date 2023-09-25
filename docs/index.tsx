import * as React from "react";
import {App} from "./app";
import {createRoot} from "react-dom/client";

const rootDiv = document.querySelector('#root')
const root = createRoot(rootDiv!)
root.render(<App />)