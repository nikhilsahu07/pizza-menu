import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // let cssStyle = {
  //   color: "red",
  //   fontSize: "40px",
  //   textTransform: "uppercase",
  // };

  return (
    <header className="header">
      <h1
      // style={cssStyle}
      // style={{ color: "red", fontSize: "40px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      <Pizza
        name="Pizza Spinaci"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={240}
      />

      <Pizza
        name="Pizza Funghi"
        price={540}
        photoName="pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, mushrooms, and onion"
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <h3>{props.name}</h3>
      <img src={props.photoName} alt={props.name} />
      <p>{props.ingredients}</p>
      <span className="price">${props.price}</span>
    </div>
  );
}

function Footer() {
  let time = new Date().getHours();
  return (
    <footer className="footer">
      🕰️{new Date().toLocaleTimeString()}🌟We're currently{" "}
      {time >= 10 && time <= 21 ? `` : `not`} open.🎉
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   `We're currently  ${time >= 10 && time <= 21 ? `` : `not`} open.🎉`
  // );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
