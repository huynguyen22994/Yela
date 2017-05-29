app.factory('HomeService', function ($http, apis) {

    var getCategories = () => {
        return $http({
            method: 'GET',
            url: apis.getCategories
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    var getProductTypebycategoryId = (categoryId) => {
        return $http({
            method: 'GET',
            url: apis.getProductTypebycategoryId,
            params: {
                categoryId: categoryId
            }
        }).then((res) => {
            return res;
        }, (err) => {
            return err;
        });
    };

    var getProductFreature = () => {
        return $http({
            method: 'GET',
            url: '/api/productfreatures'
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    return {
        getCategories: getCategories,
        getProductTypebycategoryId: getProductTypebycategoryId,
        getProductFreature: getProductFreature
    };
});

app.factory('DetailService', function ($http, apis) {

    var getOneProduct = (productId) => {
        return $http({
            method: 'GET',
            url: apis.getOneProduct,
            params: {
                productId: productId
            }
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    return {
        getOneProduct: getOneProduct
    };
});

app.factory('LoginService', function ($http, apis) {

    var createCustomer = (customer) => {
        return $http({
            method: 'POST',
            url: '/api/customer',
            data: customer
        }).then((res) => {
            return res;
        },
        (err) => {
            return err;
        });
    };

    var emailAuthentication = (emailCustomer) => {
        return $http({
            method: 'GET',
            url: '/api/email/authentication',
            params: {
                email: emailCustomer
            }
        }).then((res) => {
            return res;
        }, (err) => {
            return err;
        });
    };

    var loginCustomer = (login) => {
        return $http({
            method: 'POST',
            url: 'api/customer/login',
            data: login
        }).then((res) => {
            return res;
        }, (err) => {
            return err;
        })
    };

    var logout = () => {
        return $http({
            method: 'GET',
            url: 'api/customer/logout'
        }).then((res) => {
            return res;
        }, (err) => {
            return err;
        });
    };

    var loginGoogleFacebook = (customer) => {
        return $http({
            method: 'POST',
            url: 'api/customer/login/google/facebook',
            data: customer
        }).then((res) => {
            return res;
        }, (err) => {
            return err;
        });
    };

    return {
        createCustomer: createCustomer,
        emailAuthentication: emailAuthentication,
        loginCustomer: loginCustomer,
        logout: logout,
        loginGoogleFacebook: loginGoogleFacebook
    };
});