
---
title: Review of holomorphic functions
taxon: lecture
date: September 3, 2014
author: [Dustin Clausen](../person/dustin-clausen)
---


$\gdef\spaces#1{~ #1 ~}$
$\gdef\CC{\mathbb{C}}$

The subject of this course is Riemann surfaces. A one sentence "definition" of a Riemann surface is that is geometric object obtained by patching together pieces of the complex plane along _biholomorphic maps_. Before studying Riemann surfaces, it's a good idea to understand the notion of a biholomorphic map, or more generally, just a holomorphic. In this lecture we'll review the basic definitions and results on holomorphic maps, giving some intuitive explanations but no proofs. For the proofs you can see any basic text on complex analysis. 

First, some notations. The set of complex numbers is 

$$ \CC \spaces= \{ a + b \cdot i \mid a, b, \in \R \} $$

For a complex number $z \in \CC$ and a positive real number $r$, the _open disk_ of radius $r$ centered at $z$ is

$$ D(z,r) \spaces= \{ w \in \CC \mid |w-z| < r \} $$

and the analogous _closed disk_ is

$$ \overline D(z,r) \spaces= \{ w \in \CC \mid |w-z| \le r \} $$

Its _boundary_ is the circle

$$ \partial \overline D(z,r) \spaces= \{ w \in \CC \mid |w-z| = r \} $$

Here is the first definition. 

[+](./rmsf-0001.md#:embed)

Now we can say what is a [holomorphic function](./rmsf-0002.md). 

[+](./rmsf-0002.md#:embed)

There are two ways of thinking about this definition. One is that it is the complex analog of the usual notion of a differentiable function of one real variable. So insofar as the complex numbers, with its algebraic operations and its notion of absolute value, the notion of a holomorphic function is like the notion of a real differentiable function. 

But this perspective hides the magic of [holomorphic functions](./rmsf-0002.md), which in many ways are very different from real differentiable functions. To bring out the magic, its helpful to think geometrically, viewing the complex numbers as the plane $\R^2$ and thus thinking of $f$ as a function of two real variables. 

Then we can ask, what is it that distinguishes a [holomorphic function](./rmsf-0002.md) from an arbitrary real differentiable function of two variables? The anwser can be phrased as follows. Suppose give a real differentiable function $f: U \to \R^2$ and a point $p \in U$. The derivative of $f$ at $p$ is by definition a certain linear map

$\gdef\d{\operatorname{d}}$

$$ \d f|_p : \R^2 \to \R^2 $$

where we think of the source (resp. target) as the vector emanating from $p$ (resp. $f(p)$). Then an immediate comparsion of the definitions shows that $f$ is [holomorphic](./rmsf-0002.md) if and only if $\d f|_p$ is given by multiplication by some complex number (which will be $f'(p)$). 

Now, it is only certain linear maps which are of that form. Multiplication by a complex number is either the zero map, or it is the composition of a rotation and a scaling. A particularly vivid consequence is that when $f$ is [holomorphic](./rmsf-0002.md), $\d f|_p$ is either zero or it preserves oriented angles. Another consequence is a certain rigidity: the whole linear map $\d f|_p$ is determined by its value on any nonzero vector, since already that fixes the amount of rotation and scaling undergone by the whole map.  
