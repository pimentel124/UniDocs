---
title: Tema 1
description: Ejercicios Tema 1 Lenguajes de Programación
---

## Exercicis bàsics

#### Calculau $553 + 47$

```lisp
(+ 553 47)
> 600
```

#### Calculau $386 – 70 + 38$

```lisp
(+ (- 386 70) 38)
> 354
```

#### Calculau: $4^{3}$

```lisp
(expt 4 3)
> 64

(* 4 4 4)
> 64

(* 4 ( * 4 4))
> 64
```

#### Calculau $1024 + 2^{3} - (\dfrac{27}{3} + 1)$

```lisp
(+ 1024 (expt 2 3) (- (/ 27 3) 1))
> 1039

(+ 1024 (* 2 (* 2 2)) (- (+ (/ 27 3) 1)))
> 1039
```

## Manipulació de llistes

Les operacions bàsiques són el CAR i el CDR
– El CAR retorna el primer element d'una llista
– El CDR retorna el resta de la llista (sense el primer element).

```lisp
(car '(a b c d))
> a   
;pot ser un àtom o una llista

(cdr '(a b c d))
> (b c d)
;sempre és una llista
```

#### Obteniu el segon elemente de la llista (a b c d): b

```lisp
(car (cdr '(a b c d)))
> b
```

#### Obteniu el tercer elemente de la llista (a b c d): c

```lisp
(car (cdr (cdr '(a b c d))))
> c
```

Podem trobar funcions amb el  ormat CxxxR on x és una A o una D que permeten la composició de CAR i CDR per obtenir el segon, el tercer, etc.

```lisp
;cadr == car(cdr)
(cadr '(a b c d))
> b

;caddr == car(cdr(cdr))
(caddr '(a b c d))
> c
```

Altres funcions són:

- _null_ : mira si una llista és buida o no.  
- _append_: s'utilitza per afegir dues llistes.  
- _member_: mira si un element pertany a una llista.  
- _delete_: borra un element d'una llista.  
- _reverse_: inverteix una llista.  

#### Eliminau l'element b de la llista (a b c d)

```lisp
(delete 'b '(a b c d))
> (a c d)
```

#### Afegiu les llistes (a b) i (a b c d): (a b a b c d)

```lisp
(append '(a b) '(a b c d))
> (a b a b c d)
```

#### Afegiu l'element a a la llista (b c d): (a b c d)

```lisp
(append '(a) '(b c d))
> (a b c d)
```

### Construcció de llistes

Per construir llistes es poden utilitzar el CONS i el LIST.

- CONS afegeix un nou element al principi d'una llista
donada

```lisp
(cons 'a '(b c d))
> (a b c d)

(cons '(1 2) '(b c d))
> ((1 2) b c d)
```

- LIST crea una llista a partir del seus arguments

```lisp
(list 'a 'b 'c 'd)
> (a b c d)
```

#### Afegiu l'element a a la segona posició de la llista (b c d): (b a c d)

```lisp
(cons (car '(b c d)) (cons 'a (cdr '(b c d))))
> (b a c d)

(append (list (car '(b c d)) 'a) (cdr '(b c d)))
> (b a c d)
```

### Assignacions

Encara que la seva utilització no és massa aconsellada, es poden donar valors als àtoms directament amb dues funcions: SET i SETQ

- SETQ vol dir "_set quote_" i permet assignar un valor a un àtom.

```lisp
(setq ciutats '(palma inca manacor))
> (palma inca manacor)

(set 'ciutats '(palma inca manacor))
> (palma inca manacor)
```

### Diferència EQUAL i EQ

- EQ mira si dos àtoms són iguals.
- EQUAL mira si dues llistes són iguals.

```lisp
(set 'l1 '(a b c))
> (a b c)

(set 'l2 l1)
> (a b c)

(set 'l3 '(a b c))
> (a b c)

(eq l1 l2)
> t

(eq l1 l3)
> nil

(eq l2 l3)
> nil

(equal l1 l2)
> t

(equal l1 l3)
> t

(equal l2 l3)
> t
```

## Definició de noves funcions

Les funcions es poden definir amb la instrucció DEFUN.
El format és el següent:

```lisp
(defun nom-de-funció parametres expressió)
```

Exemple:

```lisp
(defun suma1 (x) (+ x 1))
> suma1

(suma1 4)
> 5
```

#### Escriu la funciço _quadrat_, que calculi el quadrar d'un nombre

```lisp
(defun quadrat (x) (* x x))
> quadrat

(quadrat 4)
> 16
```

#### Escriu la funció _suma3_, que calculi la suma de tres nombres

```lisp
(defun suma3 (x y z) (+ x y z))
> suma3

(suma3 4 5 5)
> 14
```

#### Escriu la funció _tercer_, que retorni el tercer element d'una llista

```lisp
(defun tercer (l) (car (cdr (cdr l))))
> tercer

(tercer '(a b c ))
> c
```

#### Escriu la funció _darrer_, que retorni l'últim element d'una llista

```lisp
(defun darrer (l) (car (reverse l)))
> darrer

(darrer '(a b c d))
> d
```

## Recursivitat

Per poder definir recursivament una funció necessitarem una instrucció condicional que ens permeti determinar quan s’acaba la recursivitat.

### Expressions condicionals

```lisp
(cond (condició-1 acció-1)
      (condició-2 acció-2)
      (condició-3 acció-3)
      ...
      (condició-n acció-n)  )
```

S'avalua l'acció corresponent a la primera condició que es verifiqui.

És un bon costum que la darrera condició sigui _t_ (true) per assegurar que al menys una de les condicions es compleix (equivalent a un _default_).

#### Escriu la funció _darrer_, que retorni el darrer element d'una llista (sense emprar el _reverse_)

```lisp
(defun darrer (L)
  (cond ((null (cdr L)) (car L))
        (t (darrer (cdr L)))))
> darrer

(darrer '(a b c d))
> d
```

#### Escriu la funció _longitud_, que retorni la longitud d'una llista

```lisp

(defun longitud (L)
  (cond ((null L) 0)
        (t (+ 1 (longitud (cdr L))))))
> longitud

(longitud '(a b c d))
> 4
```
