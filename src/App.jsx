import { useState } from "react"
import { Display } from "./components/Display";
import { Teclado } from "./components/Teclado";

function App() {
  const [currentValue, setCurrentValue] = useState('0');

  const handleButtonClick = (label) => {
    setCurrentValue(`Clicou no ${label}`)
  }
  return (
    <div className="calculator-container">
      <Display valeu={currentValue} />
      <Teclado handleClick={handleButtonClick} />
    </div>
  )
}

export default App
