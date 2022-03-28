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
        title: 'Тарифы',
        path: '/price/'
      },{
        title: 'Меню администратора',
        collapsable: false,
        children: [{
          title: 'QNext. Настройки бота',
          path: '/admin/setting/'
        }, {
          title: 'QNext. Люди',
          path: '/admin/people/'
        }, {
          title: 'QNext. Контент',
          path: '/admin/content/'
        }, {
          title: 'QNext. Команды',
          path: '/admin/command/'
        }, {
          title: 'QNext. Расписание',
          path: '/admin/schedule/'
        }, {
          title: 'QNext. Чаты/Каналы',
          path: '/admin/chats-and-channels/'
        }, {
          title: 'QNext. Формы',
          path: '/admin/forms/'
        }, {
          title: 'QNext. Меню',
          path: '/admin/menu/'
        }, {
          title: 'QNext. Платежи',
          path: '/admin/pay/'
        }, {
          title: 'QNext. Рассылки',
          path: '/admin/newsletters/'
        }, {
          title: 'QNext. WEB',
          path: '/admin/web/'
        }, {
          title: 'QNext. Магазины',
          path: '/admin/stores/'
        }, {
          title: 'QNext. WorkFlows',
          path: '/admin/workflow/'
        }, {
          title: 'QNext. Конвертор',
          path: '/admin/converter/'
        }, {
          title: 'QNext. Внешние сервисы',
          path: '/admin/external-services/'
        }, {
          title: 'QNext. Клавиатура',
          path: '/admin/keyboard/'
        }, {
          title: 'QNext. Переменные',
          path: '/admin/variables/'
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
