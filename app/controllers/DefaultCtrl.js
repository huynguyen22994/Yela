var ProductCtrl = require('./ProductCtrl');
var CategoryCtrl = require('./CategoryCtrl');
var ProductTypeCtrl = require('./ProductTypeCtrl');
var CustomerCtrl = require('./CustomerCtrl');
var LoginCtrl = require('./LoginCtrl');
var async = require('async');

// Products
module.exports.getProducts = (req, res, next) => {
    ProductCtrl.getProducts(req, res, next);
};

module.exports.createProduct = (req, res, next) => {
    ProductCtrl.createProduct(req, res, next);
};

module.exports.updateProduct = (req, res, next) => {
    ProductCtrl.updateProduct(req, res, next);
};

module.exports.deleteProduct = (req, res, next) => {
    ProductCtrl.deleteProduct(req, res, next);
};

module.exports.getOneProduct = (req, res, next) => {
    ProductCtrl.getOneProduct(req, res, next);
};

module.exports.getProductFreature = (req, res, next) => {
    ProductCtrl.getProductFreature(req, res, next);
};

// Categories
module.exports.getCategory = (req, res, next) => {
    CategoryCtrl.getCategory(req, res, next);
};

module.exports.createCategory = (req, res, next) => {
    CategoryCtrl.createCategory(req, res, next);
};

module.exports.updateCategory = (req, res, next) => {
    CategoryCtrl.updateCategory(req, res, next);
};

module.exports.getOneCategory = (req, res, next) => {
    CategoryCtrl.getOneCategory(req, res, next);
};

module.exports.deleteCategory = (req, res, next) => {
    CategoryCtrl.deleteCategory(req, res, next);
};

// Product Type
module.exports.getProductType = (req, res, next) => {
    ProductTypeCtrl.getProductType(req, res, next);
};

module.exports.createProductType = (req, res, next) => {
    ProductTypeCtrl.createProductType(req, res, next);
};

module.exports.updateProductType = (req, res, next) => {
    ProductTypeCtrl.updateProductType(req, res, next);
};

module.exports.deleteProductType = (req, res, next) => {
    ProductTypeCtrl.deleteProductType(req, res, next);
};

module.exports.getOneProductType = (req, res, next) => {
    ProductTypeCtrl.getOneProductType(req, res, next);
};

module.exports.getProductTypebyCategoryId = (req, res, next) => {
    ProductTypeCtrl.getProductTypebyCategoryId(req, res, next);
};

// Customer
module.exports.createCustomer = (req, res, next) => {
    CustomerCtrl.createCustomer(req, res, next);
};

// Email authentication
module.exports.emailAuthentication = (req, res, next) => {
    var customerEmail = req.query.email;
    async.parallel({
        checkEmail: (callback) => {
            CustomerCtrl.checkEmail(customerEmail, callback);
        }
    }, (err, result) => {
        if (err) {
            res.statusCode = 400;
            var respnses = {
                err: err
            }
            res.end(JSON.stringify(respnses));
        } else {
            if (result.checkEmail) {
                LoginCtrl.emailAuthentication(req, res, next);
            }
        }
    });
};

module.exports.loginCustomer = (req, res, next) => {
    LoginCtrl.loginCustomer(req, res, next);
};

module.exports.logoutCustomer = (req, res, next) => {
    LoginCtrl.logoutCustomer(req, res, next);
};

module.exports.loginGoogleFacebook = (req, res, next) => {
    LoginCtrl.loginGoogleFacebook(req, res, next);
};