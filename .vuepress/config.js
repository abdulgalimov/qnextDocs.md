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
        title: 'Оплата',
        path: '/price/'
      },{
        title: 'Меню администратора',
        collapsable: false,
        children: [{
          title: 'Настройки бота',
          path: '/admin/setting/'
        }, {
          title: 'Люди',
          path: '/admin/people/'
        }, {
          title: 'Контент',
          path: '/admin/content/'
        }, {
          title: 'Команды',
          path: '/admin/command/'
        }, {
          title: 'Расписание',
          path: '/admin/schedule/'
        }, {
          title: 'Чаты/Каналы',
          path: '/admin/chats-and-channels/'
        }, {
          title: 'Формы',
          path: '/admin/forms/'
        }, {
          title: 'Меню',
          path: '/admin/menu/'
        }, {
          title: 'Платежи',
          path: '/admin/pay/'
        }, {
          title: 'Рассылки',
          path: '/admin/newsletters/'
        }, {
          title: 'WEB',
          path: '/admin/web/'
        }, {
          title: 'Магазины',
          path: '/admin/stores/'
        }, {
          title: 'WorkFlows',
          path: '/admin/workflow/'
        }, {
          title: 'Конвертор',
          path: '/admin/converter/'
        }, {
          title: 'Внешние сервисы',
          path: '/admin/external-services/'
        }, {
          title: 'Клавиатура',
          path: '/admin/keyboard/'
        }, {
          title: 'Переменные',
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
          path: '/admin/useful/'
        }]
      }],
    }]
  },
}
