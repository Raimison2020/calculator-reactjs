import { Botao } from "./Botao";

export function Teclado({ handleClick }) {
  const botoes = [
    'C', 'DEL', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.',
  ];

  return (
    <div className="teclado">
      {botoes.map((label, index) => (
        <Botao
          key={index}
          label={label}
          handleClick={() => handleClick(label)}
        />
      ))}
    </div>
  )
}