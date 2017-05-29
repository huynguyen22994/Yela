app.controller('DetailCtrl', function($scope, DetailService, config, Value, $interval){

    $scope.ImgLink = config.uploadUrl;

    $scope.initialization = () => {
        $scope.loadProductDetail();
    };

    $scope.loadProductDetail = () => {
        DetailService.getOneProduct(Value.productId)
            .then((res) => {
                $scope.product = res.data;
            }, (res) => {

            });
    };

    $interval(() => {
        $scope.Date = Date.now();
    }, 1000)

});