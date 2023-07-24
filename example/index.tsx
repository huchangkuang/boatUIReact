import * as React from "react";
import ReactDom from 'react-dom';
import {App} from "./app";

const rootDiv = document.querySelector('#root')
ReactDom.render(<App />, rootDiv)