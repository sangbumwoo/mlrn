app.constant('config', {
    appName: 'My App',
    appVersion: 1.0,
    pageTitle: 'MLRN',
    appTitle: 'Mid-Latitude Region Network',
    email: 'mlrn_ojeri@korea.ac.kr',
    userId: 'mlrn_ojeri@korea.ac.kr',
    address1: '(02841) #317, East Bldg., College of Life Science, Korea University,',
    address2: 'Anam-ro 145, Seongbuk-gu, Seoul , KOREA',
    // apiUrl: 'http://127.0.0.1:1337',
    apiUrl: 'http://mlrn.cafe24.com',
    menuArray: [{
            name: 'about',
            title: 'ABOUT',
            activeIndex: 0,
            list: [{
                    name: 'mlrn',
                    title: 'MLRN',
                    mode: 'page',
                    listStyle: 'page',

                    isPage: true,
                    showTitle: false,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'about_us',
                    title: 'ABOUT US',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'contact',
                    title: 'CONTACT US',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
            ]
        },
        {
            name: 'network',
            title: 'NETWORK',
            activeIndex: 0,
            list: [{
                    name: 'member',
                    title: 'MEMBER',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'partner',
                    title: 'PARTNER',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'group_networks',
                    title: 'GROUP NETWORKS',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'join_us',
                    title: 'JOIN US',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    contactFormRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
            ]
        },

        {
            name: 'focus',
            title: 'FOCUS',
            activeIndex: 0,
            list: [{
                    name: 'nexus',
                    title: 'NEXUS',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'thematic_groups',
                    title: 'THEMATIC GROUPS',
                    listStyle: 'page',
                    mode: 'page',
                    isPage: true,
                    titleRequired: false,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'meeting_outcomes',
                    title: 'MEETING OUTCOMES',
                    summary: 'Outcomes of the Expert Group Meeting',
                    listStyle: 'tab',
                    mode: 'board',
                    // boardType: 'tabList',
                    // isAscending: true,
                    showHeader: true,
                    isTabList: true,
                    titleRequired: true,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
            ]
        },
        {
            name: 'resources',
            title: 'RESOURCES',
            activeIndex: 0,
            list: [{
                    name: 'reports_papers',
                    title: 'REPORTS & PAPERS',
                    listStyle: 'list',
                    mode: 'board',
                    showHeader: true,
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    // fileRequired: true,
                    thumbnailRequired: true,
                },
                {
                    name: 'events',
                    title: 'EVENTS',
                    listStyle: 'list',
                    mode: 'board',
                    showHeader: true,
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    // fileRequired: true,
                    thumbnailRequired: true,
                },
            ]
        },

        /*

        NOTICE 게시판은 제목/날짜/no. 등 기본정보만 보이는 리스트형 게시판 (내용노출X)
        MLRN Activities, Issue Brief 게시판 스타일: 제목/ 내용 일부/ 만 보이도록 깔끔하게

        */


        {
            name: 'news',
            title: 'NEWS',
            activeIndex: 0,
            list: [{
                    name: 'notice',
                    title: 'NOTICE',
                    listStyle: 'table',
                    mode: 'board',
                    showHeader: true,
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
                {
                    name: 'activities',
                    title: 'ACTIVITIES',
                    listStyle: 'list',
                    mode: 'board',
                    showHeader: true,
                    showContentInList: true,
                    titleRequired: true,
                    contentRequired: true,
                    htmlEdit: true,
                    imageRequired: false,
                    fileRequired: false,
                },
            ]
        },
        {
            name: 'SETTINGS',
            title: 'SETTINGS',
            activeIndex: 0,
            adminRequired: true,
            list: [{
                    name: 'main_banner',
                    title: 'MAIN BANNER',
                    listStyle: 'list',
                    mode: 'board',
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: false,
                    htmlEdit: false,
                    imageRequired: true,
                    fileRequired: false,
                },
                {
                    name: 'link_banner',
                    title: 'LINK BANNER',
                    listStyle: 'list',
                    mode: 'board',
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: false,
                    urlRequired: true,
                    htmlEdit: false,
                    imageRequired: true,
                    fileRequired: false,
                },
                {
                    name: 'related_links',
                    title: 'RELATED LINKS',
                    listStyle: 'list',
                    mode: 'board',
                    showContentInList: false,
                    titleRequired: true,
                    contentRequired: false,
                    urlRequired: true,
                    htmlEdit: false,
                    imageRequired: false,
                    fileRequired: false,
                },
                // {
                //     name: 'function_test',
                //     title: 'Function Test',
                // },

            ]
        },
    ],
});