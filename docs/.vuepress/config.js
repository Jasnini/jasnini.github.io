module.exports = {
    title: 'dali&zxlg的博客',  //标题
    keywords: '前端开发',
    description: 'dali&zxlg的博客',
    repo: 'https://github.com/Jasnini',  //仓库地址
    base: '/blog/',  // 配合部署项目
    dest: './blog',
    port: '32087',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        // add jquert and fancybox
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
        ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
        ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '技术博文',
              items: [
                { text: '前端知识点', link: '/frontEnd/如何学好前端' },
                { text: '前端相关', link: '/frontEnd/面试知识点'},
                {text: '机器学习', link: '/ml/机器学习早知道'}
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Jasnini' },
        ],
        sidebar: {
            '/frontEnd/': [
                {
                    title: '前端知识点',
                    // sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        {path: "/frontEnd/如何学好前端", title: "如何学好前端"},
                        {path: "/frontEnd/网站性能优化", title:"网站性能优化"},
                        {path: "/frontEnd/BFC", title:"BFC"},
                        {path: "/frontEnd/CSS3新特性", title: "CSS3新特性"},
                        {path: "/frontEnd/ES6新特性", title: "ES6新特性"},
                        {path: "/frontEnd/H5新特性", title: "H5新特性"},
                        {path: "/frontEnd/动画", title: "动画"},
                    ]
                },
                {
                    title: '前端相关',
                    collapsable: true,
                    children: [
                        {title: '面试知识点',path: '/frontEnd/面试知识点'}
                    ]
                }
            ],
            // '/frontEndDetail/': [
            //     {
            //         title: '前端相关',
            //         collapsable: true,
            //         children: [
            //             {title: '面试知识点',path: '/forntEndDetail/面试知识点'}
            //         ]
            //     }
            // ],
            '/ml/': [
                {
                    title: '机器学习',
                    collapsable: true,
                    children: [
                        {title: '机器学习早知道',path: '/ml/机器学习早知道'}
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        serviceWorker: true,
    },
}