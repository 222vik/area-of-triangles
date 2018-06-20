// Условие задачи: перевести температуру из форингейта в цельсий.
// Снять показания в 8 час,12 час, 18 час, 24 час.
const t_F_8=80;
const t_F_12=105;
const t_F_18=90;
const t_F_24=72;

const t_C_8=5/9*(t_F_8-32);
const t_C_12=5/9*(t_F_12-32);
const t_C_18=5/9*(t_F_18-32);
const t_C_24=5/9*(t_F_24-32);
// Через ф-ю это будет записываться так
const t_C_8=F_to_C(t_F_8);
const t_C_12=F_to_C(t_F_12);
const t_C_18=F_to_C(t_F_18);
const t_C_24=F_to_C(t_F_24);
function F_to_C(T){
  return (5/9)*(T-32)
}
    console.log (t_C_8);
    console.log (t_C_12);
    console.log (t_C_18);
    console.log (t_C_24);
