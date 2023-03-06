---
title: SPEL表达式解析
date: 2023-03-07 00:23:01
categories:
- 代码收藏
- Java
---

## SPEL表达式解析

```java
StandardEvaluationContext context = new StandardEvaluationContext();
context.setVariable("DEPT1", "3333");
context.setVariable("DEPT2", "444411");
ExpressionParser parser = new SpelExpressionParser();

Expression expression = parser.parseExpression("#DEPT3 + #DEPT2");
System.out.println(expression.getValue(context));

```
