var models = require(__dirname);

// models.Customer.hasMany(models.Bill, {
//   foreignKey: 'customerId'
// });

// models.Bill.belongsTo(models.Customer, {
//   foreignKey: 'customerId'
// });

// models.Bill.hasMany(models.BillDetail, {
//   foreignKey: 'billId'
// });

// models.BillDetail.belongsTo(models.Bill, {
//   foreignKey: 'billId'
// });

// models.Product.hasMany(models.BillDetail, {
//   foreignKey: 'productId'
// });

// models.BillDetail.belongsTo(models.Product, {
//   foreignKey: 'productId'
// });

// models.Category.hasMany(models.ProductType, {
//   foreignKey: 'categoryId',
//   as: 'ca'
// });

// models.ProductType.belongsTo(models.Category, {
//   foreignKey: 'categoryId',
//   as: 'pro'
// });

// models.ProductType.hasMany(models.Product, {
//   foreignKey: 'productTypeId'
// });

// models.Product.belongsTo(models.ProductType, {
//   foreignKey: 'productTypeId'
// });

// models.sequelize.sync();

models.sequelize.query('ALTER TABLE producttypes ADD CONSTRAINT FK_ProductTypeCategory FOREIGN KEY (categoryId) REFERENCES categories(categoryId)')
  .spread((result, metadata) => {
    console.log('Created FK_ProductTypeCategory');
  }, (err) => {
    console.log(err);
  });

  models.sequelize.query('ALTER TABLE products ADD CONSTRAINT FK_ProductProductType FOREIGN KEY (productTypeId) REFERENCES producttypes(productTypeId)')
  .spread((result, metadata) => {
    console.log('Created FK_ProductProductType');
  }, (err) => {
    console.log(err);
  });

  models.sequelize.query('ALTER TABLE bills ADD CONSTRAINT FK_BillCustomer FOREIGN KEY (customerId) REFERENCES customers(customerId)')
  .spread((result, metadata) => {
    console.log('Created FK_BillCustomer');
  }, (err) => {
    console.log(err);
  });
  
  models.sequelize.query('ALTER TABLE billdetails ADD CONSTRAINT FK_BillDetailBills FOREIGN KEY (billId) REFERENCES bills(billId)')
  .spread((result, metadata) => {
    console.log('Created FK_BillDetailBills');
  }, (err) => {
    console.log(err);
  });

  models.sequelize.query('ALTER TABLE billdetails ADD CONSTRAINT FK_BillDetailProduct FOREIGN KEY (productId) REFERENCES products(productId)')
  .spread((result, metadata) => {
    console.log('Created FK_BillDetailProduct');
  }, (err) => {
    console.log(err);
  });