/**
 * Created by mac on 18/02/2017.
 */
app.controller('home.ctrl', function ($scope, boardService, appContextService) {


    var vm = this;
    vm.appContext = appContextService.context;

    vm.contentsRaw = [{
        header: 'REPORTS & PAPERS',
        main_menu: 'resources',
        sub_menu: 'reports_papers',
        sort: -1,
    }, {
        header: 'NOTICE',
        main_menu: 'news',
        sub_menu: 'notice',
        sort: -1,
    }, {
        header: 'EVENTS',
        main_menu: 'resources',
        sub_menu: 'events',
        sort: -1,
    }, {
        header: 'MLRN ACTIVITIES',
        main_menu: 'news',
        sub_menu: 'activities',
        sort: -1,
    }];

    vm.menus = [{
            title: 'MLRN?',
            isPage: true,
            main_menu: 'about',
            sub_menu: 'mlrn'
        },
        {
            title: 'MEETING OUTCOMES',
            isPage: false,
            main_menu: 'focus',
            sub_menu: 'meeting_outcomes'
        },
        {
            title: 'Nexus',
            isPage: true,
            main_menu: 'focus',
            sub_menu: 'nexus'
        },
        {
            title: 'Contact',
            isPage: true,
            main_menu: 'about',
            sub_menu: 'contact'
        },
    ];

    vm.getContents = function () {
        // vm.contentsRaw.forEach((element, index) => {
        //     boardService.list(element.sub_menu, 1, 4, element.sort, '').then(
        //         function (res) {
        //             if (res.data.list.length) {
        //                 element._id = res.data.list[0]._id;
        //                 element.title = res.data.list[0].title;
        //                 element.list = res.data.list;
        //             }
        //             if (index === vm.contentsRaw.length - 1) {
        //                 vm.contents = _.chunk(vm.contentsRaw, 2);
        //             }
        //         },
        //         function (err) {
        //             console.log(err);
        //         }
        //     );
        // });


        vm.contentsRaw.forEach(function (element, index) {
            boardService.list(element.sub_menu, 1, 4, element.sort, '').then(
                function (res) {
                    if (res.data.list.length) {
                        element._id = res.data.list[0]._id;
                        element.title = res.data.list[0].title;
                        element.list = res.data.list;
                    }
                    if (index === vm.contentsRaw.length - 1) {
                        vm.contents = _.chunk(vm.contentsRaw, 2);
                    }
                },
                function (err) {
                    console.log(err);
                }
            );

        });
    }
    vm.getContents();

    vm.getBanners = function (page) {
        vm.currentPage = page;
        boardService.list('main_banner', 1, 100, -1, '').then(
            function (results) {
                vm.slides = results.data.list;
                if (vm.slides.length) {
                }
            },
            function (err) {
                console.log(err);
            }
        );
        boardService.list('link_banner', 1, 100, -1, '').then(
            function (results) {
                vm.links = results.data.list;
            },
            function (err) {
                console.log(err);
            }
        );

    }
    vm.getBanners(vm.currentPage);

    vm.ngIncludeTemplates = [{
        index: 0,
        name: 'first',
        url: 'firstSwipe.html'
    }, {
        index: 1,
        name: 'second',
        url: 'secondSwipe.html'
    }, {
        index: 2,
        name: 'third',
        url: 'thirdSwipe.html'
    }, {
        index: 3,
        name: 'fourth',
        url: 'fourthSwipe.html'
    }];
    vm.selectPage = selectPage;

    /**
     * Initialize with the first page opened
     */
    vm.ngIncludeSelected = vm.ngIncludeTemplates[0];

    /**
     * @name selectPage
     * @desc The function that includes the page of the indexSelected
     * @param indexSelected the index of the page to be included
     */
    function selectPage(indexSelected) {
        if (vm.ngIncludeTemplates[indexSelected].index > vm.ngIncludeSelected.index) {
            vm.moveToLeft = false;
        } else {
            vm.moveToLeft = true;
        }
        vm.ngIncludeSelected = vm.ngIncludeTemplates[indexSelected];
    }












})