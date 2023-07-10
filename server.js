const express = require('express');
const app = express();
const port = 3000;

// Agrega los siguientes imports para usar el paquete tedious
const { Connection, Request } = require('tedious');

// Configura la cadena de conexión a tu base de datos de Azure SQL Database
const config = {
  server: 'capturemoments.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: 'elryusam',
      password: 'admin123!'
    }
  },
  options: {
    encrypt: true,
    database: 'captureMomentsDB'
  }
};

// Establece la conexión a la base de datos en la función de inicio del servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
  
  const connection = new Connection(config);
  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a Azure SQL Database:', err);
      return;
    }
    console.log('Conexión exitosa a Azure SQL Database');
  });
});

// Agrega la lógica para interactuar con la base de datos dentro de tus rutas
app.get('/api/obtener-datos', (req, res) => {
  const request = new Request('SELECT * FROM TableName', (err, rowCount, rows) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
    } else {
      const data = rows.map(row => row.reduce((acc, column) => {
        acc[column.metadata.colName] = column.value;
        return acc;
      }, {}));
      res.json(data);
    }
  });
  connection.execSql(request);
});