app.controller('board.ctrl', function ($sce, $scope, $rootScope, $window, $stateParams, boardService, headerService, appContextService, toastr, $log, $ngConfirm) {

    var vm = this;
    vm.appContext = appContextService.context;
    vm.isHeaderEditing = false;

    var main_menu = _.find(vm.appContext.menuArray, function(menu) {
        return menu.name === $stateParams.main_menu;
    });

    

    if (main_menu) {

        vm.sub_menu = _.find(main_menu.list, function(menu){
            return menu.name === $stateParams.sub_menu;
        })
    }


    var getHeader = function () {
        vm.headerText = '';
        headerService.get($stateParams.sub_menu).then(function (res) {
            if (res.data) {
                vm.headerText = res.data.headerText;
                vm.headerTextDisplay = res.data.headerText;
            }
        },
            function (err) {
                console.log(err);
            }
        )
    }
    getHeader();

    vm.saveHeaerText = function () {
        let data = {
            articleType: $stateParams.sub_menu,
            headerText: vm.headerText
        }
        headerService.save(data).then(function (res) {
            getHeader();
            toastr.success('Header text saved');
            vm.toggleEditHeaderText();
        },
            function (err) {
                console.log(err);
            }
        )
    }

    vm.toggleEditHeaderText = function () {
        vm.isHeaderEditing = !vm.isHeaderEditing;
    }

})