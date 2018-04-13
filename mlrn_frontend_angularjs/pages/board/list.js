app.controller('board.list.ctrl', function ($sce, $scope, $rootScope, $window, $stateParams, boardService, headerService, appContextService, toastr, $log, $ngConfirm) {

    var vm = this;
    vm.appContext = appContextService.context;

    vm.trustAsHtml = function (string) {
        return $sce.trustAsHtml(string);
    };

    vm.htmlToPlaintext = function (text) {
        let str = text ? String(text).replace(/<[^>]+>/gm, '') : '';
        str = str.replace(/&nbsp;/g, ' ');
        // str = str.substr(0, 300);
        return str;
    }

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


    vm.data = {
        "searchText": ""
    };


    vm.pagination = {
        maxSize: 5,
        totalItems: 0,
        currentPage: 1,
        itemsPerPage: 6,

    };

    vm.load = function (page) {

        boardService.list($stateParams.sub_menu, page, vm.pagination.itemsPerPage, vm.sub_menu.isAscending ? 1 : -1, vm.data.searchText).then(
            function (res) {
                vm.items = res.data.list;

                vm.items.forEach(function(item) {
                    if (vm.sub_menu.listStyle !== 'tab') {
                        item.content = vm.htmlToPlaintext(item.content);
                    }
                });

                vm.item = vm.items[0];
                if (vm.item) {
                    vm.tabId = vm.item._id;
                }
                vm.pagination.totalItems = res.data.count;
                if ($stateParams.sub_menu === 'related_links') {
                    console.log('related_links......', vm.appContext.relatedLinks);
                    vm.appContext.relatedLinks = vm.items;
                    console.log('related_links......', vm.appContext.relatedLinks);
                }
            },
            function (err) {
                console.log(err);
            }
        );
    }

    // initial load & reset
    vm.load(vm.currentPage);

    vm.pageChanged = function () {
        console.log('Page changed to: ' + vm.pagination.currentPage);
        vm.load(vm.pagination.currentPage);
    };

    vm.search = function () {
        vm.pagination.currentPage = 1;
        vm.load(vm.pagination.currentPage);
    }

    vm.reset = function () {
        vm.pagination.currentPage = 1;
        vm.data.searchText = "";
        vm.load(vm.pagination.currentPage);
    }

    // vm.delete = function () {
    //     // alert('delete')
    //     // console.log(vm.data.selectedItem)

    //     boardService.delete(vm.data.selectedItem._id).then(
    //         function (result) {
    //             // window.history.back();
    //             vm.load(vm.currentPage);
    //         }, function (err) {
    //             alert(err);
    //         }
    //     )
    // }

    vm.delete = function (item) {

        console.log(item)

        $ngConfirm({
            boxWidth: '30%',
            useBootstrap: false,
            title: 'Confirm',
            content: 'Delete it?',
            // scope: vm,
            buttons: {
                confirm: {
                    text: 'Delete',
                    btnClass: 'btn-blue',
                    action: function (scope, button) {


                        boardService.delete(item._id).then(
                            function (result) {
                                window.history.back();
                            },
                            function (err) {
                                console.log(err);
                            }
                        )

                    }
                },
                cancel: {
                    text: 'Cancel',
                    btnClass: 'btn-orange',
                    // action: function (scope, button) {
                    // }
                },
            }
        });

    }

})