
app.controller('board.page.ctrl', function ($sce, $state, $scope, $rootScope, $window, $stateParams, boardService,  toastr, $location, $ngConfirm, appContextService, config) {

    // if ($stateParams.articleType === 'un-sdsn') $scope.viewTitle = "UN SDSN 소식";
    // if ($stateParams.articleType === 'korea-sdsn') $scope.viewTitle = "Korea SDSN 소개";

    // $rootScope.menu = $window.localStorage.getItem('menu');
    // $scope.viewTitle = $window.localStorage.getItem('boardTitle');
    // $scope.apiUrl = vm.appContext.apiUrl;

    // $rootScope.menu = menuService.get($stateParams).menu;
    // $scope.viewTitle = menuService.get($stateParams).boardTitle;

    // console.log($rootScope.menu);
    // console.log($stateParams.articleType);

    var vm = this;
    vm.appContext = appContextService.context;

    var main_menu = _.find(vm.appContext.menuArray, function (menu) {
        return menu.name === $stateParams.main_menu;
    });

    if (main_menu) {
        vm.sub_menu = _.find(main_menu.list, function (menu) {
            return menu.name === $stateParams.sub_menu;
        });
    }

    if (!vm.sub_menu) {
        toastr.error('vm.sub_menu not defined.')
        return;
    }

    vm.trustAsHtml = function (string) {
        return $sce.trustAsHtml(string);
    };


    vm.delete = function (id) {

        $ngConfirm({
            boxWidth: '30%',
            useBootstrap: false,
            title: 'Delete confirm',
            content: 'Delete it?',
            scope: $scope,
            buttons: {
                confirm: {
                    text: 'delete',
                    btnClass: 'btn-blue',
                    action: function (scope, button) {

                        boardService.delete(id).then(
                            function (result) {
                                // window.history.back();
                                getPage();
                            }, function (err) {
                                alert(err);
                            }
                        )

                    }
                },
                cancel: {
                    text: 'cancel',
                    btnClass: 'btn-orange',
                    // action: function (scope, button) {
                    // }
                },
            }
        });

    }

    var getPage = function() {
        boardService.getPage($stateParams.sub_menu).then(
            function (result) {
                // console.log(result);
                vm.item = result.data;
            }, function (err) {
                console.log(err);
            }
        )
    }

    getPage();
    // console.log($location.$$url);
    // $scope.id = $location.$$url;


    vm.data = {
        name: '',
        email: '',
        title: '',
        message: ''
    };

    if (vm.appContext.isLocalhost) {
        vm.data = {
            name: 'user',
            email: 'sbwoo87@gmail.com',
            title: 'title',
            message: 'message'
        };
    }


    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    vm.sendMail = function() {
        // vm.data; 
        console.log('sendMail....', vm.data)
        if (!validateEmail(vm.data.email)) {
            toastr.error('Email not valid');
            return;
        }
        if (!vm.data.name || !vm.data.title || !vm.data.message) {
            toastr.error('Field required');
            return;
        }
        // return;
        boardService.sendMail(vm.data).then(
            function (result) {
                console.log(result);
                // vm.item = result.data;
                // toastr.success('Mail has been sent successfully');
                alert('Mail has been sent successfully');
                $state.go('home');

            }, function (err) {
                console.log(err);
            }
        )
    }

})
