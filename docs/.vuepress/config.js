module.exports = {
    title: 'dali的个人博客',  //标题
    keywords: '前端开发',
    description: 'dali的个人博客',
    repo: 'https://github.com/Jasnini',  //仓库地址
    base: '/blog/',  // 配合部署项目
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ] 
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/Jasnini' },
        ],
        sidebar: {
            '/android/': [
                        "",
                        "android1", 
                ],
                "/ios/":[
                        "",
                        "ios1",
                        ],
                "/web/":[
                        "",
                        "web1",
                ],
            },
        sidebarDepth: 2,
        serviceWorker: true,
    },
}