
---
title: Binary Trees
---

A binary tree is a collection of nodes of two types, external and internal, and three relations among these nodes: parent, left child and right child. Every node except a special one called the root has a parent, and every internal node has a left and a right child. External nodes have no children. A tree is said to be of size $n$ if it has $n$ internal nodes. A tree of size $n$ has $n + 1$ external nodes. (See [5,10] for a more complete description of binary trees and tree terminology.) The number of steps required to walk from the root of the tree to a node is the depth of that node. (Each step moves from a node to one of its children.)

A symmetric order traversal of the tree visits all of the nodes exactly once. This order can be described by a recursive algorithm as follows: If the node is an internal node, traverse its left subtree in symmetric order, visit the node itself, then traverse its right subtree in symmetric order. If the node is an external node, merely visit it. The order in which the nodes are visited is called the symmetric order permutation of the nodes (or simply the symmetric order of the nodes).

In a common computer-related application of binary trees the tree is used to store an ordered collection of pieces of information (called items). Each internal node of the tree is labeled with an item, and the order of the items is represented by the symmetric order of the nodes.

A rotation is an operation that changes one binary tree into another. In a tree of size $n$ there are $n - 1$ possible rotations, one corresponding to each non-root internal node. Figure 1 shows the general rotation rule and the effect of a particular rotation on a particular tree. The rotation corresponding to a node changes the structure of the tree near that node, but leaves the structure elsewhere intact. A rotation maintains the symmetric order of the nodes, but changes the depths of some of them. Rotations are the primitives used by most schemes that maintain "balance" in binary trees [5,10].

A rotation is an invertible operation; that is, if tree $T$ can be changed into $T'$ by a rotation, then $T'$ can be changed back into $T$ by a rotation. The rotation graph for trees of size $n$ (denoted $RG(n)$) is an undirected graph with one vertex for each tree of size $n$, and an edge between vertices $T$ and $T'$ if there is a rotation that changes $T$ into $T'$.
