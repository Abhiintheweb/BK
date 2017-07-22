var config = {
  "env": process.env.FAASOS_ENV || "development",
  "development": {
    "constant": {
    },
    "sequelize": {
      "username": process.env.BK_DB_USERNAME || "lallandasas",
      "password": process.env.BK_DB_PASSWORD || "BlaBla4",
      "pool": 200,
      "database": "faasos_platform_daily",
      "host": "abra ka dabra",
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










