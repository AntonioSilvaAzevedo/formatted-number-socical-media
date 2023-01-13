import reactLogo from "./assets/react.svg";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Formatted number in console</h1>
    </div>
  );
}

function formatedNumber(number: number) {
  const formattedNumber = Intl.NumberFormat("en", {
    notation: "compact",
    minimumFractionDigits: 1,
  }).format(number);

  return formattedNumber;
}

console.log(formatedNumber(1000000));
console.log(formatedNumber(123400));
console.log(formatedNumber(1234000000));
