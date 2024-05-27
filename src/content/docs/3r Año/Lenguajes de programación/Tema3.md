---
title: Tema 3
description: Ejercicios Tema 3 Lenguajes de Programación
---

#### Definir la funció rdc que torna tots els elements d’una llista menys el darrer

```lisp
(defun rdc (l)
    (cond ((null (cdr l)) nil)
        (t (cons (car l) (rdc (cdr l))))))
> rdc

(rdc '(a b c d))
> (a b c)
```

#### Definir la funció snoc que afegeix un element al final d’una llista

```lisp
(defun snoc (l x)
    (cond ((null l) (list x))
        (t (cons (car l) (snoc (cdr l) x)))))
> snoc

(snoc '(a b c) 'd)
> (a b c d)
```

#### Definir la funció escala per multiplicar tots els elements d’una llista per un número

```lisp
(defun escala (x l)
    (cond ((null l) nil)
        (t (cons (* x (car l)) (escala x (cdr l))))))
> escala

(escala 2 '(1 2 3 4))
> (2 4 6 8)
```

#### Definir les funcions màxim i mínim d’una llista de números

```lisp


(defun max (l)
    (cond ((null (cdr l)) (car l))
        (t (max (list (max (car l) (cadr l)) (cddr l))))))
> max

(defun min (l)
    (cond ((null (cdr l)) (car l))
        (t (min (list (min (car l) (cadr l)) (cddr l))))))
> min

(max '(1 2 3 4 5))
> 5

(min '(1 2 3 4 5))
> 1
```

#### Escriure una funció per ordenar una llista de números amb el mètode de selecció directa (trobar el mínim a cada passa i posar-ho al principi)

```lisp
(defun ordena (l)
    (cond ((null l) nil)
        (t (cons (min l) (ordena (remove (min l) l))))))
> ordena

(ordena '(5 4 3 2 1))
> (1 2 3 4 5)
```

#### Escriure la funció invertir que donada una llista la gira al revés (sense utilitzar reverse)

```lisp
(defun invertir (l)
    (cond ((null l) nil)
        (t (snoc (car l) (invertir (rdc l))))))
> invertir

(invertir '(a b c d))
> (d c b a)
```
