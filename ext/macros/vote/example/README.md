# Примеры макроса !{vote|...}

![](./1.jpg)

```plain 
!{vote| type: results}
```

---

![](./2.jpg)

```plain 
!{vote|
 type:results;
 template: $title ($count);
}
```

---

![](./3.jpg)

```plain 
!{vote|
  type: users ; 
  userView: name;
  userLink: default;
  splitterUser: \n;
  splitterButton: \n;
}
```

---

![](./4.jpg)

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

---

![](./5.jpg)

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

---

![](./6.jpg)

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

---

![](./8.jpg)

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

---

![](./9.jpg)

```plain
!{vote|
 type:results;
 template: $title ($percent%);
}

```