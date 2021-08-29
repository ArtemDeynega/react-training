import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const link = React.createElement('a', {
  href: 'https://reactjs.org/',
  target: '_blank',
  rel: 'noreferrer noopener'
}, 'https://ru.reactjs.org/')


const image = React.createElement('img', {
   src:
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  alt: 'Tacos With Lime',
  width: 640,
})
const title = React.createElement('h2', null, 'Tacos With Lime');
const price = React.createElement('p', null, 'Price: 10.99$');
const button = React.createElement('button', { type: 'button' }, 'Add to cart');

const product = React.createElement('div', null, image, title, price, button);

const productWithChildrenInProps = React.createElement('div', {
  children: [image, title, price, button]
})

ReactDOM.render(product, document.getElementById('root'))
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
