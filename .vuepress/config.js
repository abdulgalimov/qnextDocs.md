const conf = require(__dirname+'/conf.json');
module.exports = {
  title: 'QNext',
  description: '📦 Документация для бота.',
  theme1: 'api',
  base: conf.basePath,
  dest: 'docs-test',
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
    sidebarDepth: 2,

    sidebar1: 'auto',
    sidebar1: [
      ['demo/first/', 'первая страница'],
      ['demo/second/', 'вторая страница'],
      ['demo/third/', 'третья страница'],
    ],
    sidebar: [{
      title: 'Документация',
      path: '/ph/',
      collapsable: false,
      children: [{
        title: 'Меню администратора',
        collapsable: false,
        children: [{
          title: 'QNext. Настройки бота',
          path: '/ph/admin/setting-about/'
        }, {
          title: 'QNext. Люди',
          path: '/ph/admin/people-about/'
        }, {
          title: 'QNext. Контент',
          path: '/ph/admin/command-about/'
        }]
      }, {
        title: 'Исполняемые модули',
        collapsable: false,
        children: [{
          title: 'Реакции',
          path: '/ph/reactions/'
        }, {
          title: 'Ограничения',
          path: '/ph/restrictions/'
        }, {
          title: 'Скрипты',
          path: '/ph/script/'
        }]
      }, {
        title: 'Статьи',
        collapsable: false,
        children: [{
          title: 'Уведомления',
          path: '/ph/root/notifications/'
        }, {
          title: 'Логи',
          path: '/ph/reactions/log/'
        }]
      }],
    }]
  },
}
