import pool from "../config/db.js";

const transaccion = (async () => {
  try {
    await pool.query("BEGIN");
    const descontar =
      "update usuarios set saldo = saldo - 200 where email = 'maria.martinez@correo.com' returning *";
    const descuento = await pool.query(descontar);
    const aumentar =
      "update usuarios set saldo = saldo + 200 where email = 'camila.diaz@correo.com' returning *";
    const aumento = await pool.query(aumentar);
    //Mensaje de Exito
    console.log("Descuento realizado con exito ", descuento.rows[0]);
    console.log("Aumento realizado con exito ", aumento.rows[0]);
    await pool.query("commit");
  } catch (error) {
    console.log(error.message);
    console.log("Error de la Transaccion");
  }
})()


