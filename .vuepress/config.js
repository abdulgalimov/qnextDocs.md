const conf = require(__dirname+'/conf.json');
module.exports = {
  title: 'QNext',
  description: '📦 Документация для бота.',
  theme1: 'api',
  base: conf.basePath,
  locales: {
    '/': {
      lang: 'ru-RU',
      title: '',
      text: 'Русский',
      description: '📦 Документация для бота.',
    },
  },
  themeConfig: {
    lastUpdated: true, // string | boolean

    sidebar: [
      ['demo/first/', 'первая страница'],
      ['demo/second/', 'вторая страница'],
      ['demo/third/', 'третья страница'],
    ]
  },
}
