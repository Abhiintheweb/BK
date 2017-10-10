
module.exports = function (sequelize, DataTypes) {
  var order = sequelize.define("order", {
    date_of_business: {type: DataTypes.DATE, validate: {isDate: true}},
    store_id: {type: DataTypes.INTEGER},
    employee_id: {type: DataTypes.INTEGER},
    check_number: {type: DataTypes.INTEGER},
    item_id: {type: DataTypes.INTEGER},
    order_mode_id: {type: DataTypes.INTEGER},
    day_part_id: {type: DataTypes.INTEGER},
    price: {type: DataTypes.FLOAT},
    disc_price: {type: DataTypes.FLOAT},
    quick_combo_id: {type: DataTypes.INTEGER},
    system_date: {type: DataTypes.DATE, validate: {isDate: true}}
  }, {
    classMethods: {
      
      associate: function (models) {},
      
      get_orders_all_zone: function(company_id, user_id, filter_type, date, callback){
        
        var sql = "select o.store_id, sum(disc_price) as net_sale, sd.store_format, sd.region, sd.region_id "+
                  "from orders o inner join store_details sd on sd.store_id = o.store_id "+
                  "group by sd.region_id, sd.store_format ;";

        sequelize.query(sql, {replacements: {
            date: date
          }}
        ).spread(function (data, metadata) {
          callback(null, data);
        }).catch(function (err) {
          callback(err, null);
        });
      }
    },
    tableName: 'orders',
    underscored: true
  });
  return order;
};

