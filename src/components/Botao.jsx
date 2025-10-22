export function Botao({ label, handleClick, extraClass }) {
  const classes = `botao ${extraClass || ''}`

  return (
    <button className={classes} onClick={handleClick}>
      {label}
    </button>
  )
}