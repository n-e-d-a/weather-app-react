import Circular from "./Circular";

import "./App.css";

export default function App() {
 
  return (
    <div>
      <div className="App">
        <Circular defaultCity="London" />

        <br />
        <footer>
          This project was coded by {""}
          <a
            href="https://xenodochial-poitras-5501a5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neda Zare
          </a>
          {""} and is {""}
          <a
            href="https://github.com/n-e-d-a/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-Sourced on GitHub
          </a>
          {""} and {""}
          <a
            href="https://inspiring-lamport-23bc03.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
