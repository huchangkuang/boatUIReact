import React from "react";
import * as ReactDom from "react-dom/client"
import Button from "./Button";

const root = ReactDom.createRoot(document.createElement("div"))
root.render(<Button />)

