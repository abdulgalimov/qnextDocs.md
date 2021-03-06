# !{amount|...}


Макрос `!{amount}` используется для форматирования цены. Переданное макросу значение, разделяется на целую и дробную часть, т.о. из копеек можно получить рубли и копейки. 

Параметр `path` служит для передачи в макрос пути до значения:
```plain 
!{amount|
  path: storeOrder.totalAmount;
}
```

По умолчанию разделителем целой и дробной части служит символ , (запятая).
С помощью параметра `splitter` можно задать любой разделитель, например . (точка):
```plain 
!{amount|
  path: storeOrder.totalAmount; 
  splitter: .;
}
```