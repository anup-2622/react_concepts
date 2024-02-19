import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// Babel is a js compiler

const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(What to show , where to show it)    
// createRoot.render(
//     <div>

// <h2>Happy coding</h2>
// <ul>
//     <li>
//         List1 
//     </li>
//     <li>
//         List2
//     </li>
//     <li>
//         List3
//     </li>
// </ul>
//     </div>
//  , document.getElementById('root'));    
root.render(
     <App />
);

