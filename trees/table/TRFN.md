
---
title: 圆函数清单
taxon: table
---

<style>

</style>

我们先列出 $\R$ 上主要的圆函数及其范围, 然后总结其相关恒等式. 此处 "主要的圆函数" 明确指三角函数 $\cos, \sin, \cot, \tan$ 和对应的双曲函数. 

$$
\def\arraystretch{1.5}
\begin{array}{c|cc}
& 定义域 & 值域 \\ \hline
\cos & \R & [-1, 1] \\
\sin & \R & [-1, 1] \\
\cot & \R\setminus\Z\pi & \R \\
\tan & \R\setminus(\frac{\pi}{2} + \Z\pi) & \R \\
\end{array}
\hspace{3em}
\begin{array}{c|cc}
& 定义域 & 值域 \\ \hline
\cosh & \R & [1, \infty) \\
\sinh & \R & \R \\
\coth & \R & (-\infty, -1) \cup (1, \infty) \\
\tanh & \R\setminus\{0\} & (-1,1) \\
\end{array}
$$

$$
\def\arraystretch{1.5}
\begin{array}{c|cc}
  & \alpha + \beta & \alpha - \beta \\ \hline
\cos 
  & \cos\alpha \cos\beta - \sin\alpha \sin\beta 
  & \cos\alpha \cos\beta + \sin\alpha \sin\beta \\
\sin 
  & \sin\alpha \cos\beta + \cos\alpha \sin\beta 
  & \sin\alpha \cos\beta - \cos\alpha \sin\beta
\end{array}
$$

$$
\def\arraystretch{1.5}
\begin{array}{c|cc}
  & x + y & x - y\\ \hline
\cosh 
  & \cosh x \cosh y + \sinh x \sinh y
  & \cosh x \cosh y - \sinh x \sinh y \\
\sinh 
  & \sinh x \cosh y + \cosh x \sinh y 
  & \sinh x \cosh y - \cosh x \sinh y
\end{array}
$$

$$
\def\arraystretch{1.5}
\begin{array}{c|cc}
  & \alpha + \beta & \alpha - \beta 
  \\ \hline \\[-1em]
\cot 
  & \dfrac{\cot\alpha \cot\beta - 1}{\cot\alpha + \cot\beta} 
  & \dfrac{\cot\alpha \cot\beta + 1}{\cot\beta - \cot\alpha} \\[2em]
\tan 
  & \dfrac{\tan\alpha + \tan\beta}{1 - \tan\alpha \tan\beta}
  & \dfrac{\tan\alpha - \tan\beta}{1 + \tan\alpha \tan\beta}
\end{array}
\hspace{3em}
\begin{array}{c|cc}
  & x + y & x - y\\ \hline \\[-1em]
\coth 
  & \dfrac{1 + \coth x \coth y}{\coth x + \coth y}
  & \dfrac{1 - \coth x \coth y}{\coth x - \coth y} \\[2em]
\tanh 
  & \dfrac{\tanh x + \tanh y}{1 + \tanh x \tanh y} 
  & \dfrac{\tanh x - \tanh y}{1 - \tanh x \tanh y}
\end{array}
$$
