var models = require('./app/models');

// models.Category.create({
//     name: "category 1",
//     // categoryId: "40875dc0-41c7-11e7-a676-31a1d60a4bcb"
// })

// models.ProductType.create({
//     name: "protype 1",
//     categoryId: "4a3dc760-4202-11e7-b8c2-d303f0b382c0"
//     // categoryId: "40875dc0-41c7-11e7-a676-31a1d60a4bcb"
// })

models.sequelize.sync();

// models.Category.findAll({
//     attributes: [['id','categoryId'],['name','name'],],
//     include: [{ model: models.ProductType, attributes: { exclude: ['productTypeId','name']} }]
// }).then(function (result) {
//     console.log(result);
//     }, function (err) {
//         console.log(err);
//     });

// models.Category.findAll({
// attributes: [['id','user_id'],['firstname','firstName'],['lastname','lastName']],
// include: [ {model: userRole, attributes: { exclude: ['id','role_id','role_description','user_id']}} ]
// })

// models.Category.findAll(
//     {
//     include: models.ProductType,
//     as: 'ca'
//     },
//     {
//     include: models.ProductType,
//     as: 'pro'
//     }    
// ).then(function (routes) {
//   routes.forEach(function(route) {
//       console.log(route);
//   })
//     })

// models.Category.findAll({
//         include: [{
//             model: models.ProductType,
//             as: 'FK_ProductTypeCategory'
//         }]
//     })
//     .then(function(result) {
//         res.send(result);
//     });

// models.sequelize.query('SELECT categories.categoryId, categories.name, producttypes.name as test FROM categories, producttypes WHERE categories.categoryId = producttypes.categoryId')
//     .spread((r) => {
//         console.log(r);
//     }, (e) => {
//         console.log(e);
//     })

// models.ProductType.findAll(
//     {
//         where: {
//             categoryId: '0caad1f0-4175-11e7-a326-c1a34f205889'
//         }
//     }
// ).then((result) => {
//     result.forEach((a) => {
//         console.log(a.dataValues);
//     })
//     }, (err) => {
//         console.log(err);
// })