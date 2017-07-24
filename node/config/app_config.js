var config = {
  "env": process.env.FAASOS_ENV || "development",
  "development": {
    "constant": {
    },
    "sequelize": {
      "username": process.env.BK_DB_USERNAME || "1212",
      "password": process.env.BK_DB_PASSWORD || "1212#",
      "pool": 200,
      "database": "1212",
      "host": "223.qwqw.21212.6",
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










