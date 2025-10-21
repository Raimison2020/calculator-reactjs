import { useState } from "react"
import { Display } from "./components/Display";
import { Teclado } from "./components/Teclado";

const calcutate = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      return firstOperand / secondOperand;
    default:
      return secondOperand; // Retorna o segundo número se algo der errado
  }
}

function App() {
  const [currentValue, setCurrentValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (label) => {

    // Array de apoio para checar se o botão é um operador
    const isOperator = ['+', '-', '*', '/'].includes(label)

    // 1. Lógica para Operadores
    if (isOperator) {
      if (firstOperand === null) {
        setFirstOperand(parseFloat(currentValue))
        setOperator(label)
        setCurrentValue('0')
        setIsResult(false)
      }
      return
    }

    // 2. Condional switch (para 'C', '=' e números)
    switch (label) {
      case 'C':
        // Quando o botão 'C' é clicado? O estado (currenteValue) é redefinido.
        setCurrentValue('0')
        break;

      case 'DEL':
        const newValue = currentValue.slice(0, -1)

        if (newValue === '' || newValue === '-') {
          setCurrentValue('0')
        } else {
          setCurrentValue(newValue)
        }

        break

      case '=':
        // Se não houver operador salvo, não há o que calcular
        if (operator === null || firstOperand === null) return

        const secondOperand = parseFloat(currentValue)
        const result = calcutate(firstOperand, operator, secondOperand)
        setCurrentValue(result.toString())

        setFirstOperand(null)
        setOperator(null)
        setIsResult(true)

        break;

      default:
        // Lógica de concatenação de números e pontos
        const shoudReplace = currentValue === '0' || isResult

        if (shoudReplace) {
          if (label === '.') {
            setCurrentValue('0.')
          } else {
            setCurrentValue(label)
          }
          setIsResult(false)
        } else {
          if (label === '.' && currentValue.includes('.')) return
          setCurrentValue(currentValue + label)
        }
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
