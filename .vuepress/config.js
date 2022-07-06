const conf = require(__dirname+'/conf.json');
module.exports = {
  title: 'QNext',
  description: '🤖 Документация платформы QNext',
  theme1: 'api',
  base: conf.basePath,
  dest: 'docs',
  locales: {
    '/': {
      lang: 'ru-RU',
      title: '',
      text: 'Русский',
      description: '🤖 Документация платформы QNext',
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
      collapsable: true
    },{
      title: 'Меню администратора',
      path: '/admin/',
      collapsable: true,
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
      collapsable: true,
      initialOpenGroupIndex: -1,
      children: [{
        title: 'Реакции',
        path: '/admin/other/reactions/',
        collapsable: true,
        children: [{
          title: '!{Google}',
          path: '/admin/google/'
        }, {
          title: 'Trello',
          path: '/admin/trello/'
        }, {
          title: 'WEB',
          path: '/admin/web/'
        }, {
          title: 'Глобальные переменные',
          path: '/admin/globalvar/'
        }, {
          title: 'Голосование',
          path: '/admin/vote/'
        }, {
          title: 'Динамические переменные',
          path: '/admin/dynvar/'
        }, {
          title: 'Контент',
          path: '/admin/content/'
        }, {
          title: 'Локальные переменные',
          path: '/admin/localvar/'
        }, {
          title: 'Пользователи',
          path: '/admin/users/'
        }, {
          title: 'Пригласительные ссылки',
          path: '/admin/invitelink/'
        }, {
          title: 'Профиль',
          path: '/admin/profile/'
        }, {
          title: 'Рассылка',
          path: '/admin/newsletters/'
        }, {
          title: 'Списки пользователей',
          path: '/admin/userlist/'
        }, {
          title: 'Клавиатура',
          path: '/admin/keyboard/'
        }, {
          title: 'Форма',
          path: '/admin/forms/'
        }, {
          title: 'Чаты/Каналы',
          path: '/admin/chat/'
        },],
        initialOpenGroupIndex: -1,
      }, {
        title: 'Макросы',
        path: '/ext/macros/',
        collapsable: true,
        children: [{
          title: '!{amount}',
          path: '/ext/macros/amount/'
        }, {
          title: '!{array}',
          path: '/ext/macros/array/'
        }, {
          title: '!{attachment}',
          path: '/ext/macros/attachment/'
        }, {
          title: '!{date}',
          path: '/ext/macros/date/'
        }, {
          title: '!{crypto}',
          path: '/ext/macros/crypto/'
        }, {
          title: '!{decodeURI}',
          path: '/ext/macros/decodeuri/'
        }, {
          title: '!{encodeURI}',
          path: '/ext/macros/encodeuri/'
        }, {
          title: '!{file}',
          path: '/ext/macros/file/'
        }, {
          title: '!{git}',
          path: '/ext/macros/git/'
        }, {
          title: '!{globalVar}',
          path: '/ext/macros/globalvar/'
        }, {
          title: '!{html}',
          path: '/ext/macros/html/'
        }, {
          title: '!{if}',
          path: '/ext/macros/if/'
        }, {
          title: '!{json}',
          path: '/ext/macros/json/'
        }, {
          title: '!{makeLink}',
          path: '/ext/macros/makelink/'
        }, {
          title: '!{menu}',
          path: '/ext/macros/menu/'
        }, {
          title: '!{pay}',
          path: '/ext/macros/pay/'
        }, {
          title: '!{profile}',
          path: '/ext/macros/profile/'
        }, {
          title: '!{random}',
          path: '/ext/macros/random/'
        }, {
          title: '!{script}',
          path: '/ext/script/'
        }, {
          title: '!{string}',
          path: '/ext/macros/string/'
        }, {
          title: '!{switch}',
          path: '/ext/macros/switch/'
        }, {
          title: '!{template}',
          path: '/ext/macros/template/'
        }, {
          title: '!{trello}',
          path: '/ext/macros/trello/'
        }, {
          title: '!{url}',
          path: '/ext/macros/url/'
        }, {
          title: '!{user}',
          path: '/ext/macros/user/'
        }, {
          title: '!{usersCount}',
          path: '/ext/macros/usercount/'
        }, {
          title: '!{value}',
          path: '/ext/macros/value/'
        }, {
          title: '!{vote}',
          path: '/ext/macros/vote/'
        },]
      },{
        title: 'Ограничения',
        path: '/ext/restrictions/'
      }, {
        title: 'Скрипты',
        path: '/ext/script/'
      },]
      }, {
      title: 'Настройки в QNextBot',
      path: '/ext/setting/',
      collapsable: true,
      children: [{
        title: 'Уведомления',
        path: '/article/notifications/'
      }, {
        title: 'Локализация',
        path: '/ext/localization/'
      }, {
        title: 'Первичная регистрация бота',
        path: '/root/new-token/'
      }, {
        title: 'Обновление токена бота',
        path: '/root/reset-token/'
      }]
      }, {
      title: 'Ресурсы проекта',
      path: '/ext/servicelink/',
      collapsable: true,
      children: [{
        title: 'Ссылки',
        path: '/ext/link/'
      }]
      }, {
      title: 'Разное',
      path: '/ext/otheruserul/',
      collapsable: true,
      children: [{
        title: 'Логи',
        path: '/admin/other/reactions/log/'
      }, {
        title: 'Триггеры',
        path: '/article/triggers/'
      }, {
        title: 'Добавление бота в админы',
        path: '/ext/groupadminright/'
      }, {
        title: 'Регулярные выражения',
        path: '/admin/regexp/'
      }, {
        title: 'Чейнджлог',
        path: '/ext/changelog/'
      }]
      }, {
      title: 'Соглашения',
      path: '/ext/agreements/',
      collapsable: true,
      children: [{
        title: 'Тарифы',
        path: '/root/price/'
      }, {
        title: 'Политика конфиденциальности',
        path: '/agreements/privacy/'
      }, {
        title: 'Пользовательское соглашение',
        path: '/agreements/terms/'
      }]
    }]
  },
}

