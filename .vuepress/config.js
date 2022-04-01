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
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
      test: ['/(admin)|(article)|(ext)|(root)/']
    }]
  ],
  patterns: ['**/*.md', '!.vuepress', '!node_modules', '!_export'],
  themeConfig: {
    lastUpdated: true, // string | boolean
    sidebarDepth: 2,

    sidebar: [{
      title: 'Документация',
      path: '/',
      collapsable: false,
      children: [{
        title: 'Оплата',
        path: '/article/price/'
      },{
        title: 'Меню администратора',
        path: '/admin/',
        collapsable: false,
        children: [{
          title: '⚙Настройки бота',
          path: '/admin/setting/'
        }, {
          title: '👤Люди',
          path: '/admin/people/'
        }, {
          title: '📋Контент',
          path: '/admin/content/'
        }, {
          title: '↙Команды',
          path: '/admin/command/'
        }, {
          title: '📅Расписание',
          path: '/admin/schedule/'
        }, {
          title: '👥Чаты/Каналы',
          path: '/admin/chats-and-channels/'
        }, {
          title: '🗄Формы',
          path: '/admin/forms/'
        }, {
          title: '🕹Меню',
          path: '/admin/menu/'
        }, {
          title: '💰Платежи',
          path: '/admin/pay/'
        }, {
          title: '📬Рассылки',
          path: '/admin/newsletters/'
        }, {
          title: '🌐WEB',
          path: '/admin/web/'
        }, {
          title: '🏪Магазины',
          path: '/admin/stores/'
        }, {
          title: '🔀WorkFlows',
          path: '/admin/workflow/'
        }, {
          title: '🗃Конвертор',
          path: '/admin/converter/'
        }, {
          title: '🧩Внешние сервисы',
          path: '/admin/external-services/'
        }, {
          title: '⌨️Клавиатура',
          path: '/admin/keyboard/'
        }, {
          title: '💼Переменные',
          path: '/admin/variables/'
        }]
      }, {
        title: 'Исполняемые модули',
        path: '/ext/',
        collapsable: false,
        children: [{
          title: 'Реакции',
          path: '/ext/reactions/'
        }, {
          title: 'Ограничения',
          path: '/ext/restrictions/'
        }, {
          title: 'Скрипты',
          path: '/ext/script/'
        }, {
          title: 'Макросы',
          path: '/ext/macros/'
        }]
      }, {
        title: 'Настройки в QNextBot',
        collapsable: false,
        children: [{
          title: 'Уведомления',
          path: '/article/notifications/'
        }, {
          title: 'Первичная регистрация бота',
          path: '/article/price/newtoken/'
        }, {
          title: 'Обновление токена бота',
          path: '/article/price/reltoken/'
        }]
      }, {
        title: 'Разное',
        collapsable: false,
        children: [{
          title: 'Логи',
          path: '/ext/reactions/log/'
        }, {
          title: 'Триггеры',
          path: '/article/triggers/'
        }, {
          title: 'Регулярные выражения',
          path: '/admin/regexp/'
        }]
      }],
    }]
  },
}
