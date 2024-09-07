import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';


// const App = ({nombre, saludo}) => {

//   return (
//     <p>!{saludo}!, {nombre}!!!</p>
//   )
// }

// function withWhatever (WrappedComponent) {
//   return function ComponenteDeVerdad (props) {
//     return (
//       <>
//         <WrappedComponent {...props}/>
//         <h1>Estamos acompañando al wrappedcomponent</h1>
//       </>
//     )
  
//   }
// }

// const AppWithWatever = withWhatever(App);

ReactDOM.render(
  // <App saludo="Buenas" nombre="Pepe" />,
  // <AppWithWatever saludo="Epaleee" nombre="Pedrooo" />,
  <App />,
  document.getElementById('root')
);
