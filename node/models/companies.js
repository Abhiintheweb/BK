module.exports = (sequelize, DataTypes) => {

  var companies = sequelize.define("companies", {

    company_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }

  }, {
    classMethods: {
      associate: function (models) {
        
      }
    },
    underscored: true,
    timestamps: true
  });
  
  return companies;

};


