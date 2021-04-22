module.exports = {
    title: 'dali&zxlg的博客',  //标题
    keywords: '前端开发',
    description: 'dali&zxlg的博客',
    repo: 'https://github.com/Jasnini',  //仓库地址
    base: '/blog/',  // 配合部署项目
    dest: './blog',
    port: '32087',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: '前端技术', link: '/frontEnd/' },
                {text: '机器学习', link: '/ml/'}
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Jasnini' },
        ],
        sidebar: [{
            '/frontEnd/': [
                {
                    title: '前端技术总结',
                    // sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ["/frontEnd/如何学好前端", "如何学好前端"],
                        ["/frontEnd/网站性能优化", "网站性能优化"],
                        ["/frontEnd/BFC", "BFC"],
                        ["/frontEnd/CSS3新特性", "CSS3新特性"],
                        ["/frontEnd/ES6新特性", "ES6新特性"],
                        ["/frontEnd/H5新特性", "H5新特性"],
                        ["/frontEnd/动画", "动画"],
                    ]
                }
            ]
        },
        {
            '/ml/': [
                {
                    title: '机器学习',
                    // sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ["/ml/机器学习早知道", "机器学习早知道"]
                    ]
                }
            ]
        }],
        // sidebarDepth: 2,
        serviceWorker: true,
    },
}