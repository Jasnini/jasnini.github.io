module.exports = {
    title: 'dali的个人博客',  //标题
    keywords: '前端开发',
    description: 'dali的个人博客',
    repo: 'https://github.com/Jasnini',  //仓库地址
    base: '/blog',  // 配合部署项目
    dest: './blog',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: '前端技术', link: '/frontEnd/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Jasnini' },
        ],
        sidebar: {
            '/frontEnd/': [
                {
                    title: '前端技术总结',
                    sidebarDepth: 2,
                    collapsable: true,
                    children: [
                        ["/frontEnd/如何学好前端", "如何学好前端"],
                        ["/frontEnd/网站性能优化", "网站性能优化"],
                        ["/frontEnd/网页布局", "网页布局"]
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        serviceWorker: true,
    },
}