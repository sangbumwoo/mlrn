app.controller('signin.ctrl', function ($scope, $window, $rootScope, $state, $stateParams, appContextService, userService, toastr, config) {

    var vm = this;
    vm.appContext = appContextService.context;

    vm.data = {
        email: '',
        password: ''
    }

    vm.login = function () {

        if (!vm.data.email) {
            toastr.error("이메일을 입력해 주세요");
            return;
        }
        if (!vm.data.password) {
            toastr.error("암호를 입력해 주세요");
            return;
        }

        userService.login(vm.data).then(
            function (result) {
                var token = result.data.id_token;
                var payload = JSON.parse(atob(token.split('.')[1]));
                vm.appContext.user = payload;
                $window.localStorage.setItem('token', JSON.stringify(payload));
                vm.appContext.menuArray = config.menuArray;

                // window.history.back();
                $state.go('home');

            },
            function (err) {
                console.log('Login error', err)
                toastr.error('Login error. Please try again.');
                // alert(JSON.stringify(err));
                // window.history.back();
                $state.go('signin')
            }
        )

    }

    vm.logout = function () {
        $window.localStorage.removeItem('token');
        vm.appContext.user = null;
        vm.appContext.menuArray = angular.copy(config.menuArray); 
        _.remove(vm.appContext.menuArray, {adminRequired : true});
        // toastr.success("You have logged out.");
        // $state.go('signin');
        $state.go('home');
    }


})

