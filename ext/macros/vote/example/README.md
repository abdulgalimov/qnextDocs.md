# Готовые примеры макроса !{vote|...}

### Пример 1

```plain 
!{vote| type: results}
```

![](./1.jpg)

---

### Пример 2

```plain 
!{vote|
 type:results;
 template: $title ($count);
}
```

![](./2.jpg)

---

### Пример 3

```plain
!{vote|
 type:results;
 template: $title ($percent%);
}
```

![](./9.jpg)

---

### Пример 4

```plain 
!{vote|
  type: users ; 
  userView: name;
  userLink: default;
  splitterUser: \n;
  splitterButton: \n;
}
```

![](./3.jpg)

---

### Пример  5

```plain
!{vote|
  type: users ; 
  userView: username;
  userPrefix: ✔️;
  userLink: default;
  splitterUser: \n;
  splitterButton: \n;
}
```

![](./4.jpg)

---

### Пример 6

```plain
!{vote|
  type: users ; 
  userView: name;
  userPrefix: ✅;
  userLink: default;
  splitterUser: \n;
  splitterButton: \n;
  button: 000000;
}

!{vote|
  type: users ; 
  userView: name;
  userPrefix: ❌;
  userLink: default;
  splitterUser: \n;
  splitterButton: \n;
  button: 000000;
}
```

![](./5.jpg)

---

### Пример 7

```plain
!{vote|
  type: users ; 
  userView: name;
  userLink: default;
  userTemplate: $index - $user ( $userId );
  splitterUser: \n;
  splitterButton: \n;
}
```

![](./6.jpg)

---
### Пример 8

```plain
!{vote| 
  type: count;
  where: buttons;
  buttons: 000000;
}

!{vote| 
  type: count;
  where: buttons;
  buttons: 000000;
}
```

![](./8.jpg) 

---

### Пример 9

```plain
Не голосовали
!{vote|
  type: userList;
  usersListId: 0000 ;
  notVotedTemplate: $user; 
  userView: name;
  filter: notVoted;
  profileId: 0000 ;
}

Проголосовали
!{vote|
  type: userList;
  usersListId: 0000 ;
  votedTemplate: $description $user  - $profile;
  userView: name;
  filter: voted;
  profileId: 0000 ;
}
``` 

![](./10.jpg) 

