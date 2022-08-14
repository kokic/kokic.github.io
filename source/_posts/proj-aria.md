
---
title: Java 中基于匿名类的 $\lambda$ 函数合成
date: 2022-7-14,
categories:
  - 计算机
tag:
  - 程序语言
---

<script>
document.title = "Java 中基于匿名类的 𝜆 函数合成";
</script>

## 背景 & 问题

### 反射

Java 中的函数强调为方法, 遵循其对象为先的理念, 即
<center>
方法 $\quad\overset{\text{def}}{=}\quad$ 作为类成员的函数
</center>

对于任何一个方法, 总是作为某个类的成员而存在. 并且依正常的手段, 总是先取得该类的对象, 再通过对象调用方法 $——$ 换言之, 对方法所能做的仅仅只有调用, 方法本身并不能被引用.

但反射 `Reflect` 通过一系列类型给出了 Java 中原本难以触及之区域的对象表示
<center>
字段 $\quad\leadsto\quad$ <code>Field</code>, $\quad$ 方法 $\quad\leadsto\quad$ <code>Method</code>
</center>

这种关系可以理解成 
<center>
类 $\quad\leadsto\quad$ <code>Class&lt;?&gt;</code>
</center>

这些类型的对象本身记录了所要刻画的区域充分多的信息, 甚至有能力修改区域本身的内容, 如 <code>Field</code>.

重新回忆反射包中几个类的声明, 这些声明间的差异将在后文用于佐证为何需要 $\lambda$ 函数及其合成.

- `Field` 继承自 `AccessibleObject`, 实现了 `Member`.
- `Method` 继承自 `Executable`, `Executable` 继承自 `AccessibleObject`, 实现了 `Member`, `GenericDeclaration`.

---

### 热修复

传统的热修复手段始终将目光聚焦于方法本身, 当然本身方法的重要性不言而喻, 只要程序仍然以方法作为最小的可执行区域. 在重载方法这件事上, 各大 Hook 工具尽管实现的细节各有不同, 但整体手段相差无异, Java 层很难做到的方法钩往往使用更底层的手段 $——$ 原生层 `C/C++` 的方法钩. 举例如下

- 字节跳动, [ShadowHook](https://github.com/bytedance/android-inline-hook/). Android inline hook 库.
- Tiann, [Epic](https://github.com/tiann/epic), Android Java 层方法 Hook 框架.
- 平安银河实验室, [YAHFA](https://github.com/PAGalaxyLab/YAHFA), 同上.
- Lody, [Whale](https://github.com/asLody/whale), 跨平台 Hook Framework, 支持Android、IOS、Linux、MacOS.
- Lody, [SandHook](https://github.com/asLody/SandHook), Android ART 虚拟机上的 Java 层 Hook 框架.

当然, 原生层凭借着其直接操作物理内存的巨大优势, `C/C++` 层函数的 Hook 也易如反掌, 这方面的例子首推 IOS 平台的著名越狱工具 [Cydia Substrate](http://www.cydiasubstrate.com/), Minecraft Bedrock Edition 玩家并不陌生的第三方启动器 BlockLauncher 最核心的功能正是基于 Substrate 实现.

---

### 嵌入

上述两点, 尽管目的各有不同, 但都将间接或直接的面临一个重要问题 $——$ 对 `Method` 的操作. 这个问题的困难来自语言本身, 也即最初所说的 “对象为先的理念”. 如果待操作的对象是某个 `Field`, 那么仅用反射就可以轻易修改, 因此不禁要问, 是否存在一种包装 $f$ 使得
<center>
$f($<code>Method</code>$)$ &emsp;作为&emsp; <code>Field</code>
</center>

这个问题的答案就是匿名类对象.

为了确定这个方案确实可行, 重新梳理假想对象 $\mathcal{Q}_\Box$ 满足的良好性质
- 对所有方法 $F$, 都能定义一个 $\mathcal{Q}_F$ 使两者有着相同的调用结果.
- 对所有 `Method` $F$, 都能定义一个 $\mathcal{Q}_F$ 使两者有着相同的调用结果.
- 对任意 $\mathcal{Q}_F$, $\mathcal{Q}_G$, 都能通过 $\mathcal{Q}_C$ 返回其复合函数, 即 $\mathcal{Q}_C(\mathcal{Q}_F,\mathcal{Q}_G)(X)=\mathcal{Q}_F(\mathcal{Q}_G(X))$.

最后一条正是 $\mathcal{Q}_\Box$ 的优势所在, 并且 $\mathcal{Q}_C$ 的实现也极为容易.

```java
two_t<base, base, base> with = (f, g) -> g instanceof zero 
        ? (zero_t<Object>) () -> invoke(f, invoke(g)) 
        : (any_t<Object>) args -> invoke(f, invoke(g, args));
```

此处由于 `invoke` 参数长度可变, 调用时区分 `zero` 与 `any`. 同时也可以看出, 这种结合丢失了原本函数的信息, `any` 将参数类型和返回类型都模糊化了, 尽管这并不影响函数的正常调用. 简单起见, 此处仅仅是做了最基本的参数长度是否为零的判断, 更复杂的返回类型会在另一个精确版本的 `with` 函数中得到正确处理, 想要使这种模糊的结果变得精确并不困难, 在理论和实践上都完全可行.

## 简单使用

### 基本例子

有些应关注的简单例子, 已经定义在了 [Prelude.java](https://github.com/kokic/aria/blob/main/src/aira/Prelude.java) 中
```java
public static final one_void<Object> expr = x -> {};
public static final one_bool<Boolean> keep = x -> x;
public static final one_bool<Object> pass = x -> true;
```
- `expr` 保留了 `void` 这一特殊的返回类型, 但除了这一点类型信息之外, 什么都不做, 具体的事项完全交给了其唯一的 `Object` 类型的参数.
- `keep` 是 `Boolean` 上的 $\text{id}$, 不过对于工业视角下的编程而言很难看出其实际用途.
- `pass` 接收一个参数, 无条件返回真. 这使得原本必须拆分成多条语句的代码能够以表达式的方式组合在一起.


另一个非 $\lambda$ 的写法 $($ 目前而言, 由于方法本身带了泛型, 也无法使用 $\lambda$ 表达$)$ 下的例子, 实现了 `if` 的表达式版本, 并且在原理上完全不依赖 `if` 语句本身.
```java
public static final three_u<Boolean, Object, Object> delta = 
                new three_u<Boolean, Object, Object>() {
    public <u> u invoke(Boolean condition, Object trueCase, Object falseCase) {
        return Unsafe.as(condition ? trueCase : falseCase);
    }
};
    
public static final three_u<Boolean, zero_t<Object>, zero_t<Object>> deltaIf = 
                new three_u<Boolean, zero_t<Object>, zero_t<Object>>() {
    public <u> u invoke(Boolean condition, zero_t<Object> trueCase, zero_t<Object> falseCase) {
        return delta.<zero_t<u>>invoke(condition, trueCase, falseCase).invoke();
    }
};
```

最后一个稍显怪异的例子是 `foreach`, 为了充分展现这个项目在非实用性方面的特点.
```java
public static final any_t<one_void<one_void<?>>> foreach = args -> {
    return (one_void<one_void<?>>) apply -> {
        Index index = new Index();
        while (keep.invoke(index.less.invoke(args.length))
            && pass.invoke(index.apply.invoke(apply, args))
            && pass.invoke(index.increase.invoke()))
        {}
   };
};
```

在异常处理上, 对于 `try-catch` 目前已经做了一定程度的封装, 在这种观点下, 并不是所有的异常都会报告错误, 某些异常的发生将被认为是合理的, 因此将不会打印栈. 下面的例子基本等同于正常的 `try-catch`, 但在异常发生时, 将仅打印最后一行引发的错误信息.
```java
final MethodHandles.Lookup lookup = MethodHandles.lookup();
final MethodHandle methodHandle = (MethodHandle) eval.invoke(() -> lookup.unreflect(method));
result = trialEval.invoke(() -> methodHandle.invokeWithArguments(list));
```

---

### 函数式

下面的例子来自另一个项目 [PinkMonsoon](https://github.com/kokic/PinkMonsoon), 展现了对于字符串是否符合某种格式的数字的判定方法, 以及相对而言较原始的部分化函数的使用.

```java
public static final two_t<String, Character, Boolean> isUniqueChar = 
    (xs, x) -> xs.indexOf(x) == xs.lastIndexOf(x);
    
public static final one_bool<Character> isPlusOrMinus = 
    x -> x == '+' || x == '-';

public static final one_t<String, String> castUnsigned = 
    x -> isPlusOrMinus.invoke(x.charAt(0)) ? x.substring(1) : x;

public static final two_t<one_bool<Character>, String, Boolean> isUnsignedNumberPartial = 
    (f, xs) -> (Boolean) foldl.invoke((With<Character>) (prev, x) -> prev && f.invoke(x), 
        true, PinkMonsoon.toCharList.invoke(xs));

public static final two_t<one_bool<Character>, String, Boolean> isNumberPartial = 
    (f, xs) -> isUnsignedNumberPartial.invoke(f, castUnsigned.invoke(xs));
    
public static final one_bool<Character> isDecimalIntSingle = 
    x -> '0' <= x && x <= '9';

public static final one_bool<String> isDecimalInt = 
    xs -> isNumberPartial.invoke(isDecimalIntSingle, xs);
    
public static final one_bool<String> isDecimalFrac = 
        xs -> isUniqueChar.invoke(xs, '.') && isNumberPartial.invoke(
            x -> '.' == x || isDecimalIntSingle.invoke(x), 
            castUnsigned.invoke(xs));
            
public static final one_bool<String> isBinInt = 
    s -> ((one_bool<String>) xs -> xs.charAt(0) == '0' && xs.charAt(1) == 'b' && 
        isUnsignedNumberPartial.invoke(x -> x == '0' || x == '1', 
        xs.substring(2))).invoke(castUnsigned.invoke(s).toLowerCase());

public static final one_bool<String> isHexInt = 
    s -> ((one_bool<String>) xs -> xs.charAt(0) == '0' && xs.charAt(1) == 'x' && 
        isUnsignedNumberPartial.invoke(x -> isDecimalIntSingle.invoke(x) || 
            ('A' <= x && x <= 'F') || ('a' <= x && x <= 'f'), 
        xs.substring(2))).invoke(castUnsigned.invoke(s).toLowerCase());
```


