import { Botao } from "./Botao";

export function Teclado({ handleClick }) {
  const botoes = [
    'C', 'DEL', '/', '*',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.',
  ];

  const operadores = ['/', '*', '-', '+', '='];

  return (
    <div className="teclado">
      {botoes.map((label, index) => {
        // Lógica para definir as classes extras
        let extraClass = '';
        if (operadores.includes(label)) {
          extraClass = 'operador';
        }
        if (label === '0') {
          extraClass = 'duplo'; // O zero ocupa duas colunas
        }

        return (
          <Botao
            key={index}
            label={label}
            handleClick={() => handleClick(label)}
            extraClass={extraClass} // Passando a classe extra!
          />
        );
      })}
    </div>
  );
}