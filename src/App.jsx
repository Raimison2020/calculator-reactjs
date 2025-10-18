import { useState } from "react"
import { Display } from "./components/Display";
import { Teclado } from "./components/Teclado";

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (label) => {

    // Array de apoio para checar se o botão é um operador
    const isOperator = ['+', '-', '*', '/'].includes(label)

    // 1. Lógica para Operadores
    if (isOperator) {
      if (firstOperand === null) {
        setFirstOperand(parseFloat(currentValue))
        setOperator(label)
        setCurrentValue('0')
      }
      return
    }

    // 2. Condional switch (para 'C', '=' e números)
    switch (label) {
      case 'C':
        // Quando o botão 'C' é clicado? O estado (currenteValue) é redefinido.
        setCurrentValue('0')
        break;

      case '=':
        // Lógica paa calcular o resultado.
        break;

      default:
        // Se no valor atual é '0, substitui. Se não for, concatena o novo dígito.
        setCurrentValue(currentValue === '0' ? label : currentValue + label)
    }
  }
  return (
    <div className="calculator-container">
      <Display value={currentValue} />
      <Teclado handleClick={handleButtonClick} />
    </div>
  )
}

export default App
