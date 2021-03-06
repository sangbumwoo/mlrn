
app.controller('main.ctrl', function ($window, $rootScope, $scope, userService, boardService, appContextService, toastr, config) {

    var vm = this;
    vm.appContext = appContextService.context;
    vm.appContext.pageTitle = config.pageTitle;
    vm.appContext.appTitle = config.appTitle;
    vm.appContext.email = config.email;
    vm.appContext.address1 = config.address1;
    vm.appContext.address2 = config.address2;
    vm.appContext.apiUrl = config.apiUrl;

    var window = angular.element($window);
    function checkMobile() {
        vm.appContext.width = window.innerWidth();
        if (Number(window.innerWidth()) <= 600) {
            vm.appContext.isMobile = true;
        } else {
            vm.appContext.isMobile = false;
        }
    }
    checkMobile();
    window.bind('resize', function() {
        $scope.$apply(function(){
            checkMobile();            
        })
    })

    vm.appContext.menuArray = angular.copy(config.menuArray);
    if (!vm.appContext.user || vm.appContext.user.role != 'admin') {
        _.remove(vm.appContext.menuArray, {
            adminRequired: true
        });
    }

    userService.list().then(function (res) {
        vm.appContext.users = res.data;
        // if (!res.data.length) {
        //     toastr.info('ctrl. No admin users are registered.')
        // }
    });

    vm.appContext.styleName = 'green.theme.css';

    vm.changeStyle = function (styleName) {
        vm.appContext.styleName = styleName + '.css';
    };

    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        vm.appContext.isLocalhost = true;
    }

    boardService.list('related_links', 1, 100, -1, '').then(
        function (results) {
            vm.appContext.relatedLinks = results.data.list;
        },
        function (err) {
            console.log(err);
        }
    );

})