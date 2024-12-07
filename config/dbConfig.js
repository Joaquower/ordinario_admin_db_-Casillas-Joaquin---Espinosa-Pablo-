const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'b1yveahhmlagd1wtmiyn-mysql.services.clever-cloud.com',
  user: 'u4caf877eyk2kb32',
  password: '6zyCm3V0RjTMHfUXFvgG',
  database: 'b1yveahhmlagd1wtmiyn',
});

module.exports = connection;
