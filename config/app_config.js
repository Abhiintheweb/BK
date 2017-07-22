var config = {
  "env": process.env.FAASOS_ENV || "development",
  "development": {
    "constant": {
    },
    "sequelize": {
      "username": process.env.BK_DB_USERNAME || "i4t",
      "password": process.env.BK_DB_PASSWORD || "Pass123#",
      "pool": 200,
      "database": "faasos_platform_daily",
      "host": "223.31.64.6",
      "port": 1433
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










