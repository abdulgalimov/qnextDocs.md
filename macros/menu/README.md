## QNext. Макрос menu

[⬅️QNext. Макросы](/docs-test/macros)



Макрос позволяет работать с разделом 🕹Меню, созданном в вашем боте. Макрос работает в разных режимах в зависимости от параметра **type**.
* [type: open](#type:-open)


### type: open

Показывает ссылку для открытия меню в боте:
```js 
!{menu| 
  type: open;
  menuId: IdВашегоМеню;
  menuItemId: IdРазделаМеню;
  text: Открыть меню;
}
```

Если вы хотите показать только ссылку, без текста:
```js 
!{menu| 
  type: open;
  menuId: IdВашегоМеню;
  menuItemId: IdРазделаМеню;
  linkOnly;
}
```





[⬅️QNext. Макросы](/docs-test/macros)


  

