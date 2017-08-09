
module.exports = function (sequelize, DataTypes) {

  var dpvHstSalesTotals = sequelize.define("dpvHstSalesTotals", {
  	
  	UniqueID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
  	
  	DateOfBusiness: {type: DataTypes.DATE, validate: {isDate: true}},

  	FKStoreId: {type: DataTypes.INTEGER, validate: {isNumeric: true}},

  	GrossSales: {type: DataTypes.FLOAT, validate: {isNumeric: false}},
  	
  	NetSales : {type: DataTypes.FLOAT, validate: {isNumeric: false}},
  	
  	StraightSales : {type: DataTypes.FLOAT, validate: {isNumeric: false}},

  	Tax : {type: DataTypes.FLOAT, validate: {isNumeric: false}}

  }, {
    classMethods: {
      associate: function (models) {
        
      }
    },

    underscored: true
  
  });
  
  return dpvHstSalesTotals;

};


