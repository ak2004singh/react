import React from 'react';
import ReactDOM from 'react-dom/client';
const ele = React.createElement("h1",{},"Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);