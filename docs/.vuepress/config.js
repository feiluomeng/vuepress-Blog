module.exports = {
  themeConfig: {
    logo: '/assets/img/hero.jpg',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '感悟', target: '_self',
        items: [
          { text: 'Css', link: '/about/' },
          { text: 'Js', link: '/about/' },
          { text: 'Vue', link: '/about/' },
          { text: 'React', link: '/about/' },
        ]
      },
    ]
  }
}