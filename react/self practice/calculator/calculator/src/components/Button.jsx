import style from './Button.module.css'
function Button() {
  const Btns = [
    "C",
    "/",
    "*",
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    ".",
    "7",
    "8",
    "9",
    "=",
    "0",
  ];

  return (
    <div className={style.Button}>
      {Btns.map((btn) => (
        <button className={style.ButtonsName} >{btn}</button>
      ))}
    </div>
  );
}

export default Button;
