---
title: "collections的用法"
layout: post
date: 2024-07-30 22:44
picture: "/assets/images/wanzi2.jpg"
background_image: "/assets/images/background.jpg"
toc: true
tags: [python, collections]
category: python
author: 大老师
description: python的collections详解
---

1. **`namedtuple`**：生成可以使用名称来访问元素内容的元组。
2. **`deque`**：双端队列，支持从队列两端快速增加或删除元素。
3. **`Counter`**：计数器，用于计数可哈希对象。
4. **`OrderedDict`**：有序字典，字典子类，记住了添加键值对的顺序。
5. **`defaultdict`**：带有默认值的字典。

### namedtuple

`namedtuple` 是一个工厂函数，用于创建带字段名的元组子类。

```python
from collections import namedtuple

# 创建一个 Point 类
Point = namedtuple('Point', ['x', 'y'])

# 创建一个 Point 实例
p = Point(11, 22)
print(p.x, p.y)  # 输出: 11 22
```

### deque

`deque` 是一个双端队列，可以在两端快速地添加和删除元素。

```python
from collections import deque

# 创建一个空的 deque
d = deque()

# 从右侧添加元素
d.append(1)
d.append(2)

# 从左侧添加元素
d.appendleft(3)

print(d)  # 输出: deque([3, 1, 2])

# 从右侧删除元素
d.pop()

# 从左侧删除元素
d.popleft()

print(d)  # 输出: deque([1])
```

### Counter

`Counter` 是一个计数器，用于计数可哈希对象。

```python
from collections import Counter

# 创建一个 Counter 对象
c = Counter('gallahad')

print(c)  # 输出: Counter({'a': 3, 'l': 2, 'g': 1, 'h': 1, 'd': 1})

# 计数某个元素
print(c['a'])  # 输出: 3

# 计数器的更新
c.update('aabb')
print(c)  # 输出: Counter({'a': 5, 'b': 2, 'l': 2, 'g': 1, 'h': 1, 'd': 1})
```

### OrderedDict

`OrderedDict` 是一个有序字典，记住了元素添加的顺序。

```python
from collections import OrderedDict

# 创建一个 OrderedDict 对象
od = OrderedDict()

# 添加键值对
od['a'] = 1
od['b'] = 2
od['c'] = 3

print(od)  # 输出: OrderedDict([('a', 1), ('b', 2), ('c', 3)])

# 迭代时按插入顺序返回元素
for key, value in od.items():
    print(key, value)
# 输出:
# a 1
# b 2
# c 3
```

### defaultdict

`defaultdict` 是一个带有默认值的字典，当访问的键不存在时，会返回一个默认值。

```python
from collections import defaultdict

# 创建一个 defaultdict 对象，默认值为 list
dd = defaultdict(list)

# 访问不存在的键时，返回默认值
print(dd['key'])  # 输出: []

# 可以直接向这个默认值中添加元素
dd['key'].append(1)
print(dd)  # 输出: defaultdict(<class 'list'>, {'key': [1]})
```