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
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaNum = pizzas.length;

  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: "12px" }}>
        Authentic Italian cuidine. 6 Creative dishes to choose form. All from
        our stone oven, all organic, all delicious
      </p>

      <main className="menu">
        <h2>Our Menu</h2>
        {pizzaNum > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (
          <p>
            We're currently working on the menu. We'll be serving online very
            soon. :)
          </p>
        )}

        {/* <Pizza
      //   name={pizza.name}
      //   ingredients={pizza.ingredients}
      //   photoName={pizza.photoName}
      //   price={pizza.price}
      //   soldOut={pizza.soldOut}
      // /> */}

        {/*<Pizza
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
      />*/}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <h3>{pizzaObj.name}</h3>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <p>{pizzaObj.ingredients}</p>
      <span className="price">
        {pizzaObj.soldOut ? `SOLD OUT` : `$${pizzaObj.price}`}
      </span>
    </li>
  );
}

function Footer() {
  let time = new Date().getHours();
  const openHour = 10;
  const closeHour = 21;
  const isOpen = time >= openHour && time <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We'll happy to serve you between {openHour}:00 and {closeHour}:00 :){" "}
        </p>
      )}
    </footer>
  );

  // return React.createElement(
  //   "footer",
  //   null,
  //   `We're currently  ${time >= 10 && time <= 21 ? `` : `not`} open.🎉`
  // );
}

//destructing props directly
function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're currently Open. Visit us or Order Online between {openHour}:00 and{" "}
        {closeHour}
        :00
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
