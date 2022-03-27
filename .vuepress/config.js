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
          path: '/ph/admin/content-about/'
        }, {
          title: 'QNext. Команды',
          path: '/ph/admin/command-about/'
        }, {
          title: 'QNext. Расписание',
          path: '/ph/admin/shedule-about/'
        }, {
          title: 'QNext. Чаты/Каналы',
          path: '/ph/admin/chats-and-channels-about/'
        }, {
          title: 'QNext. Формы',
          path: '/ph/admin/forms-about/'
        }, {
          title: 'QNext. Меню',
          path: '/ph/admin/menu-about/'
        }, {
          title: 'QNext. Платежи',
          path: '/ph/admin/pay/'
        }, {
          title: 'QNext. Рассылки',
          path: '/ph/admin/newsletters-about/'
        }, {
          title: 'QNext. WEB',
          path: '/ph/admin/web-about/'
        }, {
          title: 'QNext. Магазины',
          path: '/ph/admin/stores-about/'
        }, {
          title: 'QNext. WorkFlows',
          path: '/ph/admin/workflow-about/'
        }, {
          title: 'QNext. Конвертор',
          path: '/ph/admin/converter-about/'
        }, {
          title: 'QNext. Внешние сервисы',
          path: '/ph/admin/external-services-about/'
        }, {
          title: 'QNext. Клавиатура',
          path: '/ph/admin/keyboard-about/'
        }, {
          title: 'QNext. Переменные',
          path: '/ph/admin/variables-about/'
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
        }, {
          title: 'Макросы',
          path: '/ph/macroses/'
        }]
      }, {
        title: 'Статьи',
        collapsable: false,
        children: [{
          title: 'Уведомления',
          path: '/ph/root/notifications/'
        }, {
          title: 'Регистрация бота и обновление токена',
          path: '/ph/root/token-about/'
        }, {
          title: 'Таймаут рассылки',
          path: '/ph/newsletters/timeout/'
        }, {
          title: 'RegEx',
          path: '/ph/admin/useful-regex/'
        }]
      }],
    }]
  },
}
