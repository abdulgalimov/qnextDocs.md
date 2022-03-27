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

    sidebar: [{
      title: 'Документация',
      path: '/',
      collapsable: false,
      children: [{
        title: 'Меню администратора',
        collapsable: false,
        children: [{
          title: 'QNext. Настройки бота',
          path: '/admin/setting-about/'
        }, {
          title: 'QNext. Люди',
          path: '/admin/people-about/'
        }, {
          title: 'QNext. Контент',
          path: '/admin/content-about/'
        }, {
          title: 'QNext. Команды',
          path: '/admin/command-about/'
        }, {
          title: 'QNext. Расписание',
          path: '/admin/schedule-about/'
        }, {
          title: 'QNext. Чаты/Каналы',
          path: '/admin/chats-and-channels-about/'
        }, {
          title: 'QNext. Формы',
          path: '/admin/forms-about/'
        }, {
          title: 'QNext. Меню',
          path: '/admin/menu-about/'
        }, {
          title: 'QNext. Платежи',
          path: '/pay/'
        }, {
          title: 'QNext. Рассылки',
          path: '/admin/newsletters-about/'
        }, {
          title: 'QNext. WEB',
          path: '/admin/web-about/'
        }, {
          title: 'QNext. Магазины',
          path: '/admin/stores-about/'
        }, {
          title: 'QNext. WorkFlows',
          path: '/admin/workflow-about/'
        }, {
          title: 'QNext. Конвертор',
          path: '/admin/converter-about/'
        }, {
          title: 'QNext. Внешние сервисы',
          path: '/admin/external-services-about/'
        }, {
          title: 'QNext. Клавиатура',
          path: '/admin/keyboard-about/'
        }, {
          title: 'QNext. Переменные',
          path: '/admin/variables-about/'
        }]
      }, {
        title: 'Исполняемые модули',
        collapsable: false,
        children: [{
          title: 'Реакции',
          path: '/reactions/'
        }, {
          title: 'Ограничения',
          path: '/restrictions/'
        }, {
          title: 'Скрипты',
          path: '/script/'
        }, {
          title: 'Макросы',
          path: '/macros/'
        }]
      }, {
        title: 'Статьи',
        collapsable: false,
        children: [{
          title: 'Уведомления',
          path: '/root/notifications/'
        }, {
          title: 'Регистрация бота и обновление токена',
          path: '/root/token-about/'
        }, {
          title: 'Таймаут рассылки',
          path: '/newsletters/timeout/'
        }, {
          title: 'RegEx',
          path: '/admin/useful-regex/'
        }]
      }],
    }]
  },
}
