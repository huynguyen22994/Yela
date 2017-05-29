app.controller('HomeCtrl', function($scope, HomeService, config, Value){

    $scope.ImgLink = config.uploadUrl;

    $scope.initialization = () => {
        $scope.getCategories();
        $scope.loadProductFreature();
    };

    $scope.getCategories = () => {
        HomeService.getCategories()
            .then((res) => {
                $scope.categories = res.data;
            }, (res) => {

            });
    };

    $scope.loadProductFreature = () => {
        HomeService.getProductFreature()
            .then((res) => {
                $scope.productFreatures = res.data.rows;
            }, (err) => {

            });
    };

    $scope.setProductId = (productId) => {
        // productId in rootCtrl
        Value.productId = productId;
    };

});