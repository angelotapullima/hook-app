import React from 'react';
import ReactDOM from 'react-dom/client'; 
//import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks';
import { FocusScreen } from './components/04-useRef/FocusScreen';
import { RealExampleRef } from './components/04-useRef/RealExampleRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    /* Rendering the CounterApp component. */
    <RealExampleRef /> 
);
 