import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'trolley.proxy.rlwy.net',
  port: 31905,
  user: 'root',
  password: 'fEoPjwLjXDieJIkgpWTmcAUQHQDlQbww',
  database: 'railway'
});

// Ejemplo 1: Buscar por nombre y apellido
try {
  const [results, fields] = await connection.query(
    'SELECT * FROM JugadoresBeisbol WHERE nombre = ? AND apellido = ?',
    ['Albert', 'Pujols']
  );

  console.log(results); // Muestra los jugadores encontrados
  console.log(fields);  // Muestra metadatos (opcional)
} catch (err) {
  console.log(err); // Muestra cualquier error
}

// Ejemplo 2: Buscar por posición
try {
  const [results] = await connection.query(
    'SELECT * FROM JugadoresBeisbol WHERE posicion = ?',
    ['Jardinero central']
  );

  console.log(results); // Muestra los jugadores en esa posición
} catch (err) {
  console.log(err);
}

// import mysql from 'mysql2/promise';

// const connection = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'bdL22100217' // Nombre de tu base de datos
// });

// // Ejemplo 1: Buscar por nombre y apellido
// try {
//   const [results, fields] = await connection.query(
//     'SELECT * FROM JugadoresBeisbol WHERE nombre = ? AND apellido = ?',
//     ['Albert', 'Pujols']
//   );

//   console.log(results); // Muestra los jugadores encontrados
//   console.log(fields);  // Muestra metadatos (opcional)
// } catch (err) {
//   console.log(err); // Muestra cualquier error
// }

// // Ejemplo 2: Buscar por posición
// try {
//   const [results] = await connection.query(
//     'SELECT * FROM JugadoresBeisbol WHERE posicion = ?',
//     ['Jardinero central']
//   );

//   console.log(results); // Muestra los jugadores en esa posición
// } catch (err) {
//   console.log(err);
// }

