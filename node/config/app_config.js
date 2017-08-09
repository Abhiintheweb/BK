var config = {
  "env": process.env.FAASOS_ENV || "development",
  "development": {
    "constant": {
    },
    "sequelize": {
      "username": process.env.BK_DB_USERNAME || "###",
      "password": process.env.BK_DB_PASSWORD || "####",
      "pool": 200,
      "database": "######",
      "host": "#######",
      "port": 1433,
      "dialect": "mssql",
      "dialectOptions": {
        "multipleStatements": true
      },
      "logging": true,
      "define": {
        "timestamps": false,
        "underscored": true
      }
    }
  }
}
module.exports = config;










