app.factory('headerService', function ($http, config) {

    var factory = {};

    factory.get = function (articleType) {
        return $http.get(config.apiUrl + '/header/' + articleType);
    }

    factory.save = function (data) {
        return $http.put(config.apiUrl + '/header', data);
    }

    factory.delete = function (sid) {
        return $http.delete(config.apiUrl + '/header/' + sid);
    }


    return factory;

});
