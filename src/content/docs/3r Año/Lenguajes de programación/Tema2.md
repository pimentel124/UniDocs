---
title: Tema 2
description: Ejercicios Tema 2 Lenguajes de Programación
---

## Funcions

#### Definir la funció pertany que faci el mateix que _member_

```lisp
(defun pertany (x l)
  (cond ((null l) nil)
        ((equal x (car l)) t)
        (t (pertany x (cdr l)))))
> pertany

(pertany 'a '(b a c))
> t
```

#### Definir la funcio exponenciació que faci el mateix que _expt_

```lisp
(defun exponenciacio (x y)
  (cond ((= y 0) 1)
        (t (* x (exponenciacio x (- y 1))))))
> exponenciacio

(exponenciacio 2 3)
> 8
```

#### Escriure la funció fibonacci que retorna l’enèsim valor d’aquesta sèrie

```lisp
(defun fibonacci (n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (t (+ (fibonacci (- n 1)) (fibonacci (- n 2))))))
> fibonacci

(fibonacci 6)
> 8
```

#### Escriure la funció dividir, que fa la divisió entera de M entre N (tots dos positius). Fixau-vos que aquesta funció dóna el número de vegades que N està contingut dins M

```lisp
(defun dividir (m n)
  (cond ((< m n) 0)
        (t (+ 1 (dividir (- m n) n)))))
> dividir

(dividir 9 2)
> 4
```

#### Escriure també la funció parell a partir de dividir. Aquesta funció ens diu si un número és parell o no (igual que _evenp_)

```lisp
(defun parell (n)
  (= (dividir n 2) (* (dividir n 2) 2)))
> parell

(defun parell(n)
    (cond ((= (* 2 (dividir n 2)) n) t)
          (t nil)))
> parell

(parell 9)
> nil

(parell 10)
> t
```

#### Escriu una funció recursiva "senars" que donada una llista de números retorna una llista amb tots els números parells eliminats

```lisp
(defun senars (l)
  (cond ((null l) nil)
        ((not (parell (car l))) (cons (car l) (senars (cdr l))))
        (t (senars (cdr l)))))
> senars

(senars '(3 1 8 7 4 10))
> (3 1 7)
```

#### Definir la funció borra per eliminar la primera aparició d’un element dins una llista

```lisp
(defun borra (x l)
  (cond ((null l) nil)
        ((equal x (car l)) (cdr l))
        (t (cons (car l) (borra x (cdr l))))))
> borra
(borra 'a '(1 2 a 3 a b c))
> (1 2 3 a b c)
```

#### Definir la funció borra tots per eliminar totes les aparicions d’un element dins una llista

```lisp
(defun borra-tots (x l)
  (cond ((null l) nil)
        ((equal x (car l)) (borra-tots x (cdr l)))
        (t (cons (car l) (borra-tots x (cdr l))))))
> borra-tots

(borra-tots 'a '(1 2 a 3 a b c))
> (1 2 3 b c)
```
