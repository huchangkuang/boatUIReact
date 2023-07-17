import React from "react";
import * as ReactDom from "react-dom/client"
import Icon from "./icon";

const rootDiv = document.querySelector('#root')
const root = ReactDom.createRoot(rootDiv!)
root.render(<Icon name='share' />)

