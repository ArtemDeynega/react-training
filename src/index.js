import React from "react";
import ReactDOM from "react-dom";
import paintings from "./paintings.json";
import App from "./App";
import "modern-normalize/modern-normalize.css";

// const elem1 = <span>Привет</span>;

// // React.createElement("span", { children: "мир" });

// const elem2 = <span>мир</span>;

// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(element);

// ReactDOM.render(<App />, document.getElementById("root"));
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
