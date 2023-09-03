//importing the dependencies
import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';



// importing components
import App from "./App";
import store from './store';

// declare the root element for rendering the the application
const root = createRoot(document.getElementById("root"))

// render the application contents
root.render(<Router><Provider store={store}><App/></Provider></Router>);

