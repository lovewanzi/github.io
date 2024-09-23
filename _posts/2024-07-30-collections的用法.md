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

**注意：**时间复杂度为`O(1)`，因为底层是双链表。

## namedtuple

`namedtuple` 是一个工厂函数，用于创建带字段名的元组子类。

```python
from collections import namedtuple

# 创建一个 Point 类
Point = namedtuple('Point', ['x', 'y'])

# 创建一个 Point 实例
p = Point(11, 22)
print(p.x, p.y)  # 输出: 11 22
```

## deque

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

## Counter

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

## OrderedDict

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

## defaultdict

`defaultdict` 是一个带有默认值的字典，当访问的键不存在时，会返回一个默认值。

**注意：**当键不存在，会将这个键存入`key`，并赋予一个默认值。

+ ~~~python
  import collections
  
  if __name__ == '__main__':
      dic = collections.defaultdict(list)
      dic[3] = [2]
      print(dic)
      print(dic[1])
      print(dic)
      print(2 in dic)
      for k in dic[2]:
          print(k)
      print(dic)
      print(2 in dic)
      # 输出
      # defaultdict(<class 'list'>, {3: [2]})
      # []
      # defaultdict(<class 'list'>, {3: [2], 1: []})
      # False
      # defaultdict(<class 'list'>, {3: [2], 1: [], 2: []})
      # True
  ~~~

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

### 1.基本用法

创建一个 `defaultdict` 时，你需要传递一个工厂函数。常见的工厂函数有 `int`、`list`、`set` 等等。

```python
# 创建一个以 int() 作为工厂函数的 defaultdict，默认值为 0
int_dict = defaultdict(int)

# 创建一个以 list() 作为工厂函数的 defaultdict，默认值为空列表
list_dict = defaultdict(list)

# 创建一个以 set() 作为工厂函数的 defaultdict，默认值为空集合
set_dict = defaultdict(set)
```

### 2.使用示例

#### 示例 1：计数

`defaultdict` 可以用来计数。

```python
text = "apple banana apple orange banana apple"
words = text.split()

# 使用 int() 作为工厂函数
word_count = defaultdict(int)

for word in words:
    word_count[word] += 1

print(word_count)
# 输出: defaultdict(<class 'int'>, {'apple': 3, 'banana': 2, 'orange': 1})
```

#### 示例 2：分组

`defaultdict` 可以用来分组。

```python
students = [
    ('Alice', 'A'),
    ('Bob', 'B'),
    ('Charlie', 'A'),
    ('David', 'B'),
    ('Eve', 'C')
]

# 使用 list() 作为工厂函数
grade_dict = defaultdict(list)

for name, grade in students:
    grade_dict[grade].append(name)

print(grade_dict)
# 输出: defaultdict(<class 'list'>, {'A': ['Alice', 'Charlie'], 'B': ['Bob', 'David'], 'C': ['Eve']})
```

#### 示例 3：集合操作

`defaultdict` 可以用来存储集合。

```python
data = [
    ('apple', 1),
    ('banana', 2),
    ('apple', 2),
    ('banana', 3),
    ('orange', 1)
]

# 使用 set() 作为工厂函数
fruit_set = defaultdict(set)

for fruit, number in data:
    fruit_set[fruit].add(number)

print(fruit_set)
# 输出: defaultdict(<class 'set'>, {'apple': {1, 2}, 'banana': {2, 3}, 'orange': {1}})
```

### 3.自定义工厂函数

你可以传递任何可调用对象作为工厂函数，例如一个自定义的函数。

```python
def default_value():
    return 'default'

custom_dict = defaultdict(default_value)
print(custom_dict['nonexistent_key'])
# 输出: 'default'
```

#### 自定义工厂函数示例

##### 示例 1：使用普通函数

你可以定义一个简单的函数，并将其作为工厂函数传递给 `defaultdict`。

```python
from collections import defaultdict

def default_value():
    return 'default'

custom_dict = defaultdict(default_value)

print(custom_dict['key1'])  # 输出: 'default'
print(custom_dict)          # 输出: defaultdict(<function default_value at 0x...>, {'key1': 'default'})
```

在这个例子中，`default_value` 函数被用作工厂函数。当你访问不存在的键 `'key1'` 时，`defaultdict` 调用 `default_value` 函数并将其返回值作为键 `'key1'` 的默认值。

##### 示例 2：使用 lambda 表达式

你可以使用 lambda 表达式来定义更简洁的工厂函数。

```python
custom_dict = defaultdict(lambda: 'default')

print(custom_dict['key1'])  # 输出: 'default'
print(custom_dict)          # 输出: defaultdict(<function <lambda> at 0x...>, {'key1': 'default'})
```

##### 示例 3：使用类作为工厂函数

你可以使用一个类作为工厂函数，这在需要复杂初始化逻辑时特别有用。

```python
class DefaultValue:
    def __call__(self):
        return 'default'

custom_dict = defaultdict(DefaultValue())

print(custom_dict['key1'])  # 输出: 'default'
print(custom_dict)          # 输出: defaultdict(<__main__.DefaultValue object at 0x...>, {'key1': 'default'})
```

在这个例子中，`DefaultValue` 类实现了 `__call__` 方法，使其实例化对象可以作为工厂函数传递给 `defaultdict`。

##### 示例 4：带参数的工厂函数

如果工厂函数需要参数，可以使用 `functools.partial` 来创建一个带有预定义参数的工厂函数。

```python
from collections import defaultdict
from functools import partial

def default_value(param1, param2):
    return f'{param1}-{param2}'

partial_func = partial(default_value, 'param1', 'param2')
custom_dict = defaultdict(partial_func)

print(custom_dict['key1'])  # 输出: 'param1-param2'
print(custom_dict)          # 输出: defaultdict(<functools.partial object at 0x...>, {'key1'
```

### 4.注意事项

1. `defaultdict` 只有在访问不存在的键时才会调用工厂函数。
2. `defaultdict` 是字典的子类，因此可以使用字典的所有方法和操作。
3. 如果你不需要使用工厂函数，普通的 `dict` 可能更适合你的需求。

通过 `defaultdict`，我们可以方便地处理字典中的默认值问题，从而避免手动检查键是否存在的繁琐操作。