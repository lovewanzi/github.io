---
title: "make it real"
layout: post
date: 2024-07-17 22:44
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- elements
star: true
category: blog
author: johndoe
description: Markdown summary with different options
---

```python
#“key”参数的函数只是提供排序依据，即按照函数计算列表中的值来作为排序的依据，并不会改变原列表的元素值。
#如下面一段代码
a = [2, 4, 6]
	def func(x):  
	return x // 2
a.sort(key= func, reverse=True)
print(a) 
#排序结果： [6, 4, 2]，会按照计算结果[3, 2, 1]进行排序
```

![看看美女]({{site.image}} "狗屁丸子")

# 1.sort方法**作用**：

​	用于对列表进行就地排序（原地排序），即直接修改原列表。

​	**返回值**：None。它不返回新列表，而是对原列表进行排序。用法示例：

```python
#定义一个列表
numbers = [5, 2, 9, 1, 5, 6]
#使用sort方法排序
numbers.sort() 
#输出排序后的列表
print(numbers)  输出: [1, 2, 5, 5, 6, 9]
```

​	**关键字参数**：key：一个函数，根据该函数的结果进行排序。reverse：一个布尔值。如果为True，则列表按降序排序。用法示例（带关键字参数）：

```python
# 定义一个列表
words = ["banana", "apple", "cherry"]
# 按字符串长度排序words.sort(key=len)
# 输出排序后的列表
print(words) # 输出: ['apple', 'banana', 'cherry']
# 按降序排序
words.sort(reverse=True)
# 输出排序后的列表
print(words) # 输出: ['cherry', 'banana', 'apple'] 根据计算长度进行排序，不会改变words的内容
```

# 2.sorted函数作用：

​	用于返回一个新的排序后的列表，而不修改原列表。

​	**返回值**：排序后的新列表。

```python
# 定义一个列表
numbers = [5, 2, 9, 1, 5, 6]
# 使用sorted函数排序
sorted_numbers = sorted(numbers)
# 输出排序后的新列表
print(sorted_numbers) 
# 输出: [1, 2, 5, 5, 6, 9]# 输出原列表，原列表未被修改print(numbers) # 输出: [5, 2, 9, 1, 5, 6]
```

**关键字参数**：key：一个函数，根据该函数的结果进行排序。reverse：一个布尔值。如果为True，则列表按降序排序。用法示例（带关键字参数）：

```
# 定义一个列表
words = ["banana", "apple", "cherry"]
# 按字符串长度排序
sorted_words = sorted(words, key=len)
# 输出排序后的新列表
print(sorted_words)
# 输出: ['apple', 'banana', 'cherry']
# 输出原列表，原列表未被修改
print(words) # 输出: ['banana', 'apple', 'cherry']
# 按降序排序 
sorted_words_desc = sorted(words, reverse=True)
# 输出排序后的新列表
print(sorted_words_desc) # 输出: ['cherry', 'banana', 'apple']
```

# 3.总结

​	sort方法用于对列表进行就地排序，不会返回新列表，直接修改原列表。sorted函数返回一个新的排序后的列表，而不修改原列表。两者都支持key和reverse关键字参数用于自定义排序逻辑。