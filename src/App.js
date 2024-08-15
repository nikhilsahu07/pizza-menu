import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <img
        src={logo}
        alt="React Logo"
        style={{
          position: "absolute",
          top: "15px",
          left: "7px",
          width: "70px",
          height: "50px",
        }}
      />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          paddingTop: "20px",
          margin: 0,
        }}
      >
        Namaste from React!!🙏🙏
      </h1>
    </div>
  );
}

export default App;
