
app.controller('board.view.ctrl', function ($sce, $scope, $rootScope, $window, $stateParams, boardService, toastr, $location, $ngConfirm, config, appContextService) {


          $scope.options = {
    height: 300,
    focus: true,
    // airMode: true,
    // disable: true,
    // contenteditable: false,
    editable: false,
    toolbar: [
    //         ['style', ['bold', 'italic', 'underline', 'clear']],
    // ['font', ['strikethrough', 'superscript', 'subscript']],
    // ['fontsize', ['fontsize']],
    // ['color', ['color']],
    // ['para', ['ul', 'ol', 'paragraph']],
    // ['height', ['height']],

    ['edit',['undo','redo']],
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['fontface', ['fontname']],
            ['fontsize', ['fontsize']],
            ['textsize', ['fontsize']],
            ['fontclr', ['color']],
            ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link','picture','video','hr']],
            ['view', ['fullscreen', 'codeview']],
            ['help', ['help']]
        ]
  };



    var vm = this;
    vm.appContext = appContextService.context;

    vm.trustAsHtml = function (string) {
        return $sce.trustAsHtml(string);
    };


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


    vm.delete = function () {

        $ngConfirm({
            boxWidth: '30%',
            useBootstrap: false,
            title: 'confirm',
            content: 'Delete it?',
            scope: $scope,
            buttons: {
                confirm: {
                    text: 'Delete',
                    btnClass: 'btn-blue',
                    action: function (scope, button) {

                        boardService.delete($stateParams.articleId).then(
                            function (result) {
                                window.history.back();
                            }, function (err) {
                                alert(err);
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

    boardService.get($stateParams.articleId).then(
        function (result) {
            // console.log(result);
            vm.item = result.data;
        }, function (err) {
            console.log(err);
        }
    )

    // console.log($location.$$url);
    // $scope.id = $location.$$url;

    vm.focus = function(e) {
        console.log(e);
        return false;
    }

    $scope.keydown = function(e) { 
        console.log('Key is pressed:', e.keyCode); 
        return;
    }

})
