
module.exports = function (sequelize, DataTypes) {
  var orders = sequelize.define("orders", {

  }, {
    classMethods: {
      associate: function (models) {
        
      }
    },
    underscored: true
  });
  return orders;
};


