export function Botao({ label, handleClick }) {
  return (
    <button className="botoa" onClick={handleClick}>
      {label}
    </button>
  )
}