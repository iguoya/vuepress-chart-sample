module.exports = {
  title: 'vuepress图例',
  description: '测试各种图表',
  base: '/vuepress-chart-sample/',
  plugins: [
    ['autobar'],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      'vuepress-plugin-mermaidjs'
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.my-wrapper .my-img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
        },
      },
    ],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/home/'
      },
      {
        text: 'H5',
        link: '/H5/'
      },
      {
        text: '规范',
        link: '/Standard/'
      }
    ],
  }
}
