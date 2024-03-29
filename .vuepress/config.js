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
    sidebarDepth: 3,

    sidebar: [{
      title: 'Документация',
      path: '/',
      collapsable: true
    }, {
      title: 'С чего начать',
      path: '/root/getstarting/',
      collapsable: true,
      children: [{
        title: 'Знакомство с Qnextbot',
        path: '/root/getstarting/acquainqnext/'
      }, {
        title: 'BotFather. Регистрация бота',
        path: '/root/getstarting/registrationinbotfather/'
      }, {
        title: 'QnextBot. Подключение бота',
        path: '/root/getstarting/addbottoqnext/'
      }, {
        title: 'BotFather. Обновление токена',
        path: '/root/getstarting/resettokenbotfather/'
      }, {
        title: 'QnextBot. Обновление токена',
        path: '/root/getstarting/resettokenqnextbot/'
      }]
    }, {
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
        path: '/admin/schedule/',
        children: [{
          title: 'Общие расписания',
          path: '/admin/schedule/general/'
        }, {
          title: 'Отложенные действия',
          path: '/admin/schedule/pendaction/'
        }],
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
        path: '/admin/web/',
        children: [{
          title: 'WEB ссылки',
          path: '/admin/web/web-links/'
        }, {
          title: 'Webhook',
          path: '/admin/web/webhooks/'
        }, {
          title: 'Http-запросы',
          path: '/admin/web/http-request/'
        }]
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
        title: 'Триггеры',
        path: '/article/triggers/'
      }, {
        title: 'Реакции',
        path: '/admin/other/reactions/',
        collapsable: true,
        children: [{
          title: '!{Google}',
          path: '/admin/google/',
          children: [{
            title: 'googlewrite',
            path: '/admin/google/googlewrite/'
          }],
        }, {
          title: 'Trello',
          path: '/admin/trello/',
          children: [{
            title: 'trelloApiRequest',
            path: '/admin/trello/trelloapirequest/'
          }, {
            title: 'trelloAddComment',
            path: '/admin/trello/trelloaddcomment/'
          }, {
            title: 'trelloCreateCard',
            path: '/admin/trello/trellocreatecard/'
          }, {
            title: 'trelloGetCard',
            path: '/admin/trello/trellogetcard/'
          }, {
            title: 'trelloCreateCardAttachment',
            path: '/admin/trello/trellocreatecardattachment/'
          }, {
            title: 'trelloUpdateCard',
            path: '/admin/trello/trelloupdatecard/'
          }],
        }, {
          title: 'WEB',
          path: '/admin/web/reaction/',
          children: [{
            title: 'httpRequest',
            path: '/admin/web/reaction/httprequest/'
          }, {
            title: 'webhookResponse',
            path: '/admin/web/reaction/webhookresponse/'
          }, {
            title: 'weblinkRedirect',
            path: '/admin/web/reaction/weblinkredirect/'
          }, {
            title: 'weblinkResponse',
            path: '/admin/web/reaction/weblinkresponse/'
          }],
        }, {
          title: 'Глобальные переменные',
          path: '/admin/globalvar/',
          children: [{
            title: 'globalVarDel',
            path: '/admin/globalvar/globalvardel/'
          }, {
            title: 'globalVarSet',
            path: '/admin/globalvar/globalvarset/'
          }, {
            title: 'loadGlobalVar',
            path: '/admin/globalvar/loadGlobalVar/'
          }],
        }, {
          title: 'Голосование',
          path: '/admin/vote/',
          children: [{
            title: 'loadVote',
            path: '/admin/vote/loadvote/'
          }, {
            title: 'loadVoteResults',
            path: '/admin/vote/loadvoteresults/'
          }, {
            title: 'takePollUsers',
            path: '/admin/vote/takepollusers/'
          }, {
            title: 'vote',
            path: '/admin/vote/vote/'
          }, {
            title: 'voteAdd',
            path: '/admin/vote/voteadd/'
          }, {
            title: 'voteCancel',
            path: '/admin/vote/votecancel/'
          }, {
            title: 'voteSwitch',
            path: '/admin/vote/voteswitch/'
          }, {
            title: 'voteRevoke',
            path: '/admin/vote/voterevoke/'
          }],
        }, {
          title: 'Динамические переменные',
          path: '/admin/dynvar/',
          children: [{
            title: 'DynamicVarDel',
            path: '/admin/dynvar/DynamicVarDel/'
          }, {
            title: 'loadDynamicVar',
            path: '/admin/dynvar/loadDynamicVar/'
          }, {
            title: 'DynamicVarSet',
            path: '/admin/dynvar/DynamicVarSet/'
          }],
        }, {
          title: 'Контент',
          path: '/admin/content/reaction/',
          children: [{
            title: 'loadContent',
            path: '/admin/content/reaction/loadcontent/'
          }, {
            title: 'loadRandomContent',
            path: '/admin/content/reaction/loadrandomcontent/'
          }, {
            title: 'sendContent',
            path: '/admin/content/reaction/sendcontent/'
          }, {
            title: 'refreshContent',
            path: '/admin/content/reaction/refreshcontent/'
          }],
        }, {
          title: 'Локальные переменные',
          path: '/admin/localvar/',
          children: [{
            title: 'localVarAdd',
            path: '/admin/localvar/localvaradd/'
          }, {
            title: 'localVarDel',
            path: '/admin/localvar/localvardel/'
          }, {
            title: 'localVarSet',
            path: '/admin/localvar/localvarset/'
          }],
        }, {
          title: 'Магазин',
          path: '/admin/stores/',
          children: [{
            title: 'openStoreCarts',
            path: '/admin/stores/openstorecarts/'
          }, {
            title: 'openStoreCategory',
            path: '/admin/stores/openstorecategory/'
          }, {
            title: 'openStoreOrders',
            path: '/admin/stores/openstoreorders/'
          }, {
            title: 'openStoreProduct',
            path: '/admin/stores/openstoreproduct/'
          }, {
            title: 'orderCheckout',
            path: '/admin/stores/ordercheckout/'
          }, {
            title: 'sendStore',
            path: '/admin/stores/sendstore/'
          }, {
            title: 'sendStoreOrder',
            path: '/admin/stores/sendstoreorder/'
          }],
        }, {
          title: 'Переключатели',
          path: '/admin/switch/',
          children: [{
            title: 'scheduleSwitch',
            path: '/admin/switch/scheduleswitch/'
          }, {
            title: 'reactionOnSwitch',
            path: '/admin/switch/reactionswitch/'
          }],
        }, {
          title: 'Пользователи',
          path: '/admin/users/',
          children: [{
            title: 'takeAdmins',
            path: '/admin/users/takeadmins/'
          }, {
            title: 'takeMentions',
            path: '/admin/users/takementions/'
          }, {
            title: 'takeAuthorUser',
            path: '/admin/users/takeauthoruser/'
          }, {
            title: 'takeButtonUsers',
            path: '/admin/users/takebuttonusers/'
          }, {
            title: 'takeRandomUser',
            path: '/admin/users/takerandomuser/'
          }, {
            title: 'takeReplyUser',
            path: '/admin/users/takereplyuser/'
          }, {
            title: 'takeUsers',
            path: '/admin/users/takeusers/'
          }],
        }, {
          title: 'Пригласительные ссылки',
          path: '/admin/invitelink/',
          children: [{
            title: 'exportChatInviteLink',
            path: '/admin/invitelink/exportchatinvitelink/'
          }, {
            title: 'createChatInviteLink',
            path: '/admin/invitelink/createchatinvitelink/'
          },{
            title: 'editChatInviteLink',
            path: '/admin/invitelink/editchatinvitelink/'
          },{
            title: 'revokeChatInviteLink',
            path: '/admin/invitelink/revokechatinvitelink/'
          },{
            title: 'loadChatInviteLink',
            path: '/admin/invitelink/loadchatinvitelink/'
          }],
        }, {
          title: 'Профиль',
          path: '/admin/profile/',
          children: [{
            title: 'loadProfile',
            path: '/admin/profile/loadprofile/'
          }, {
            title: 'profileAdd',
            path: '/admin/profile/profileadd/'
          }, {
            title: 'profileDel',
            path: '/admin/profile/profiledel/'
          }, {
            title: 'profileSet',
            path: '/admin/profile/profileset/'
          }, {
            title: 'profileDelAll',
            path: '/admin/profile/profiledelall/'
          }, {
            title: 'profileSwitch',
            path: '/admin/profile/profileswitch/'
          }, {
            title: 'findProfileValue',
            path: '/admin/profile/findprofilevalue/'
          }, {
            title: 'profilesCount',
            path: '/admin/profile/profilescount/'
          }, ],
        }, {
          title: 'Рассылка',
          path: '/admin/newsletters/reaction/',
          children: [{
            title: 'newsletterCancel',
            path: '/admin/newsletters/reaction/newslettercancel/'
          }, {
            title: 'newsletterRevoke',
            path: '/admin/newsletters/reaction/newsletterrevoke/'
          }, {
            title: 'newsletterStart',
            path: '/admin/newsletters/reaction/newsletterstart/'
          }],
        }, {
          title: 'Списки пользователей',
          path: '/admin/userlist/',
          children: [{
            title: 'addtouserlist',
            path: '/admin/userlist/addtouserlist/'
          }, {
            title: 'delfromuserlist',
            path: '/admin/userlist/delfromuserlist/'
          }, {
            title: 'takeuserlist',
            path: '/admin/userlist/takeuserlist/'
          }],
        },{
          title: 'Темы (Топики)',
          path: '/admin/topic/',
          children: [{
            title: 'createForumTopic',
            path: '/admin/topic/createForumTopic/'
          }, {
            title: 'closeForumTopic',
            path: '/admin/topic/closeForumTopic/'
          }, {
            title: 'deleteForumTopic',
            path: '/admin/topic/deleteForumTopic/'
          }, {
            title: 'editForumTopic',
            path: '/admin/topic/editForumTopic/'
          }, {
            title: 'reopenForumTopic',
            path: '/admin/topic/reopenForumTopic/'
          }, {
            title: 'getForumTopicIconStickers',
            path: '/admin/topic/getForumTopicIconStickers/'
          }, {
            title: 'unpinAllForumTopicMessages',
            path: '/admin/topic/unpinAllForumTopicMessages/'
          }],
        }, {
          title: 'Клавиатура',
          path: '/admin/keyboard/reaction/',
          children: [{
            title: 'keyboardAction',
            path: '/admin/keyboard/reaction/keyboardaction/'
          }, {
            title: 'keyboardHide',
            path: '/admin/keyboard/reaction/keyboardhide/'
          }, {
            title: 'keyboardRefresh',
            path: '/admin/keyboard/reaction/keyboardrefresh/'
          }, {
            title: 'keyboardShow',
            path: '/admin/keyboard/reaction/keyboardshow/'
          }, ],
        }, {
          title: 'Форма',
          path: '/admin/forms/reaction/',
          children: [{
            title: 'formStart',
            path: '/admin/forms/reaction/formstart/'
          }, {
            title: 'formCancel',
            path: '/admin/forms/reaction/formcancel/'
          }, {
            title: 'formResult',
            path: '/admin/forms/reaction/formresult/'
          }, {
            title: 'loadFormResult',
            path: '/admin/forms/reaction/loadformresult/'
          }, {
            title: 'openFormResult',
            path: '/admin/forms/reaction/openformresult/'
          }, {
            title: 'takeFormResults',
            path: '/admin/forms/reaction/takeformresults/'
          }, {
            title: 'saveVariables',
            path: '/admin/forms/reaction/saveVariables/'
          }, {
            title: 'writeFormCustom',
            path: '/admin/forms/reaction/writeformcustom/'
          }],
        }, {
          title: 'Чаты/Каналы',
          path: '/admin/chat/',
          children: [{
            title: 'approveChatJoinRequest',
            path: '/admin/chat/approvechatjoinrequest/'
          }, {
            title: 'banChatMember',
            path: '/admin/chat/banchatmember/'
          }, {
            title: 'banChatSenderChat',
            path: '/admin/chat/banchatsenderchat/'
          }, {
            title: 'chatPermissions',
            path: '/admin/chat/chatpermissions/'
          }, {
            title: 'declineChatJoinRequest',
            path: '/admin/chat/declinechatjoinrequest/'
          }, {
            title: 'deleteChatStickerSet',
            path: '/admin/chat/deletechatstickerset/'
          }, {
            title: 'getChat',
            path: '/admin/chat/getchat/'
          }, {
            title: 'getChatMember',
            path: '/admin/chat/getchatmember/'
          }, {
            title: 'getChatMemberCount',
            path: '/admin/chat/getchatmembercount/'
          }, {
            title: 'getUserProfilePhotos',
            path: '/admin/chat/getuserprofilephotos/'
          }, {
            title: 'leaveChat',
            path: '/admin/chat/leavechat/'
          }, {
            title: 'promoteChatMember',
            path: '/admin/chat/promotechatmember/'
          }, {
            title: 'restrictChatMember',
            path: '/admin/chat/restrictchatmember/'
          }, {
            title: 'setChatAdminTitle',
            path: '/admin/chat/setchatadmintitle/'
          }, {
            title: 'setChatDescription',
            path: '/admin/chat/setchatdescription/'
          }, {
            title: 'setChatStickerSet',
            path: '/admin/chat/setchatstickerset/'
          }, {
            title: 'setChatTitle',
            path: '/admin/chat/setchattitle/'
          }, {
            title: 'takeChat',
            path: '/admin/chat/takechat/'
          }, {
            title: 'takeChatAdmins',
            path: '/admin/chat/takechatadmins/'
          }, {
            title: 'takeChatDir',
            path: '/admin/chat/takechatdir/'
          }, {
            title: 'takeChatMembers',
            path: '/admin/chat/takechatmembers/'
          }, {
            title: 'takeTechChat',
            path: '/admin/chat/taketechchat/'
          }, {
            title: 'unBanChatMember',
            path: '/admin/chat/unbanchatmember/'
          }, {
            title: 'unbanChatSenderChat',
            path: '/admin/chat/unbanchatsenderchat/'
          }],
        },],
        initialOpenGroupIndex: -1,
      }, {
        title: 'Ограничения',
        path: '/ext/restrictions/'
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
          title: '!{linkToMessage}',
          path: '/ext/macros/linktomessage/'
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
          path: '/ext/macros/script/'
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
      path: '/ext/otheruseful/',
      collapsable: true,
      children: [{
        title: 'Добавление бота в админы',
        path: '/ext/groupadminright/'
      }, {
        title: 'Регулярные выражения',
        path: '/admin/regexp/'
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
    }, {
      title: 'Чейнджлог',
      path: '/ext/changelog/'
    }, ]
  },
}

