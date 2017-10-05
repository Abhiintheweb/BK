var config = {
  "env": process.env.FAASOS_ENV || "development",
  "development": {
    "constant": {
    },
    "sequelize": {
      "username": process.env.BK_DB_USERNAME || "root",
      "password": process.env.BK_DB_PASSWORD || "",
      "pool": 200,
      "database": "food",
      "host": "localhost",
      "port": 1433,
      "dialect": "mysql",
      "dialectOptions": {
        "multipleStatements": true
      },
      "logging": true,
      "define": {
        "timestamps": true,
        "underscored": true
      }
    }
  }
}
module.exports = config;








