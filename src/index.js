import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const link = React.createElement(
  "a",
  {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noreferrer noopener",
  },
  "https://ru.reactjs.org/"
);

// const image = React.createElement("img", {
//   src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
//   alt: "Tacos With Lime",
//   width: 640,
// });
// const title = React.createElement("h2", null, "Tacos With Lime");
// const price = React.createElement("p", null, "Price: 10.99$");
// const button = React.createElement("button", { type: "button" }, "Add to cart");

// const product = React.createElement("div", null, image, title, price, button);

// /*
//  * Для передачи детей также используется свойство children параметра props.
//  * Обратите внимание на то, что свойство children это массив.
//  */
// const productWithChildrenInProps = React.createElement("div", {
//   children: [image, title, price, button],
// });

// ReactDOM.render(product, document.getElementById("root"));

////////////////JSX

// const imageUrl =
//   "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

// const price = 10.99;

// const product = (
//   <div>
//     <img src={imageUrl} alt="Tacos With Lime" width="640" />
//     <h2>Tacos With Lime</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// ReactDOM.render(product, document.getElementById("root"));

/////////////////////////// Правило общего родителя

// const post = (
//   <>
//     <h2>Post Header</h2>
//     <p>Post text</p>
//   </>
// );

//////////////////////Компоненты-функции
// const MyFunctionalComponent = (props) => <div>Functional Component</div>;

// const Product = (props) => (
//   <div>
//     <img
//       src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       alt="Tacos With Lime"
//       width="640"
//     />
//     <h2>Tacos With Lime</h2>
//     <p>Price: 10.99$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// // В разметке компонент записывается как JSX-тег
// ReactDOM.render(<Product />, document.getElementById("root"));
// // Это аналогично
// ReactDOM.render(React.createElement(Product), document.getElementById("root"));

///////////////////// Свойства компонента (props)
// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );

// const Appis = () => (
//   <div>
//     <h1>Best selling products</h1>
//     <Product
//       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//       name="Tacos With Lime"
//       price={10.99}
//     />
//     <Product
//       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//       name="Fries and Burger"
//       price={14.29}
//     />
//   </div>
// );

// ReactDOM.render(<Appis />, document.getElementById("root"));

////////////// Свойство props.children
// const Profile = ({ name, email }) => (
//   <div>
//     <p> Name: {name}</p>
//     <p>Email: {email}</p>
//   </div>
// );

// const Panel = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// const Appi = () => (
//   <div>
//     <Panel title="User Profile">
//       <Profile name="Mango" email="mango@gmail.com" />
//     </Panel>
//   </div>
// );

// ReactDOM.render(<Appi />, document.getElementById("root"));

///////////////// Свойство defaultProps
// const Product = ({ imgUrl, name, price }) => (
//   <div>
//     <img src={imgUrl} alt={name} width="640" />
//     <h2>{name}</h2>
//     <p>Price: {price}$</p>
//     <button type="button">Add to cart</button>
//   </div>
// );
// Product.defaultProps = {
//   imgUrl:
//     "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
// };
// /*
//  * Определение defaultProps гарантирует, что `props.imgUrl` будет иметь значение,
//  * даже если оно не было указано при вызове компонента в родителе.
//  */

// ReactDOM.render(
//   <Product name="Tacos With Lime" price={10.99} />,
//   document.getElementById("root")
// );

//////////////////Свойство propTypes
const Product = ({ imageUrl, name, price }) => (
  <div>
    <img src={imageUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}</p>
    <button type="button">Add to cart</button>
  </div>
);
Product.defaultProps = {
  imgUrl:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

ReactDOM.render(<Product />, document.getElementById("root"));
