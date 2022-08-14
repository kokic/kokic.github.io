
---
title: Construction of letters
date: 2022-5-17
categories:
  - 计算机
tag:
  - 程序语言
---

<script src="../lib/loader.js"></script>

$—$ Exploring minimal representation in ECMAScript

---

Notice: *This article is motivated by several Kata on Codewars. This post will show how to solve the hardest parts of these problems naturally, but for obvious reasons I can't link the corresponding problems directly. At the same time, those readers who know exactly what the problem is, please don't read until you solve the problem independently, or at least only read a little bit as a hint.*

First of all, we have to define some basic rules, many of which seem to be restrictive, but that is the real core of the problem.

- no ASCII & unicode letters allowed 
- only allowed to use numbers (`0-9`) and special characters (`()[]{}_!`, etc.)
$\impliedby$ implicit string construction, there are some letters whose construction is not obvious.
- every line must have at most `1` ASCII character 
$\impliedby$ expressions that allow arbitrary line breaks.
- $N$ lines or less
$\impliedby$ it's not important, as long as the principle is clear, it's not difficult to do this.

---

There are some obvious tricks to use `!1`, `!0` and `[]._` which give `false`, `true` and `undefined` respectively. The same object may have multiple constructs, eg.

<center>
$\bigg\{$ <code>[]._</code> $,$ <code>{}._</code>  $,$ $\dots$ $\bigg\}$ $\xtwoheadrightarrow{\qquad}$ $\bigg\{$ <code>undefined</code> $\bigg\}$
</center>

This means that representations of minimal length exist, but are not always unique. It seems like a meaningful thing to find a minimal representation, which can solve the problem of the limit of the $N$ lines.

Next, consider how to implicitly convert objects to strings, and we know that the direct way is `+ []`

<center>
<code>obj + []</code> $\xmapsto{\qquad}$ <code>obj.toString()</code>
</center>

Combining the above two points, we get the corresponding representation of the following character set

```JavaScript
  'a'  (b)  (c)  'd'  'e'  'f'  (g)
  (h)  'i'  (j)  (k)  'l'  (m)  'n'
  (o)  (p)  (q)       'r'  's'  't'
  'u'  (v)  (w)       (x)  (y)  (z)
```

Another key part comes from `{}+[]`. This expression will give the string `[object Object]`. Finally there are some characters that look too special to appear in any of the existing JavaScript built-in symbols. 

```JavaScript
  'a'  'b'  'c'  'd'  'e'  'f'  (g)
  (h)  'i'  'j'  (k)  'l'  (m)  'n'
  'o'  (p)  (q)       'r'  's'  't'
  'u'  (v)  (w)       (x)  (y)  (z)
```

But actually, we don't need to get all the characters from the inner object, with method `.toString(36)` we will get all lowercase letters. Assuming that the integer `n` satisfies `10 <= n <= 35`

<center>
<code>n.toString(36)</code> $\cong$ $\big\{$ <code>'a'</code> $,\dots,$ <code>'z'</code> $\big\}$ 
<br> <code>10</code> $\xmapsto{\qquad}$ <code>'a'</code>
<br> $\kern-0.6em\vdots$
<br> <code>35</code> $\xmapsto{\qquad}$ <code>'z'</code>
</center>

This approach allows us to take many steps forward at once, and it looks like we're about to reach the end, but the construction of the uppercase letters isn't going to be smooth sailing. In fact, before we can get all lowercase letters, we have to get `'S'` by other constructions e.g. literal coincidence, via the constructor

```JavaScript
> ``['constructor']
[Function: String]

> (``['constructor'] + [])[9]
'S'
```

---

Good news, we have obtained all lowercase letters. It is no coincidence that the construction of all uppercase letters will also be obtained in one go by some key method, which is obviously `String.fromCharCode`. 

Here, the focus can be found on how to generate  the character `'C'`. I will give a tricky approach.

```JavaScript
> []['flat']['constructor']('return escape')()
function escape() { [native code] }

> escape(',')
'%2C'
```

---

In the last step, which may be a mathematical problem, we need to consider the decomposition of an integer in an additive or multiplicative way. These decompositions need to meet the following requirements: 

- only one number can appear in each term, i.e. each term must satisfy `1 <= n <= 9`
- minimized decomposition length

Since the composite numbers can always be decomposed by prime factors, in fact, this problem can be considered only for the case of prime numbers.

$$N=\prod_{p\\,|\\,N}p^{v_p(N)} \quad \leadsto \quad p$$ 

Of course, for prime numbers, the only available decomposition method is addition. In order to make the length of the decomposition as short as possible, we need a large number of digits 9. With the help of some knowledge of elementary number theory, it is obvious that we consider the number modulo 9. $$p=r\mod 9$$

Further, we can also figure out exactly how many additive decompositions there are for each number.
<center>
$a_p\overset{\text{def}}{=}\#\text{ decomposition of }p$ <br>
$$\sum a_pX^p=\prod^\ell\frac{X(1-X^9)}{1-X}$$

$$a_p=\sum_{k=0}^{\lfloor(p-\ell)/9\rfloor}(-1)^k{\ell\choose k}{p-1-9k \choose \ell-1}$$
</center>

