require("dotenv").config();
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST || "127.0.0.1",
    dialect: "mysql",
    define: { underscored: true },
  },
  test: {
    username: "root",
    password: "xCaliber73",
    database: "music-orm",
    host: "127.0.0.1",
    dialect: "mysql",
    define: { underscored: true },
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
