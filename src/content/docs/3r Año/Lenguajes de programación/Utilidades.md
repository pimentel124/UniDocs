---
title: Utilidades lisp
description: Programas de utilidad en lisp
---

#### Definir la funció que redueix una fracció a partir del numerador i denominador

```lisp
(defun reduir (n d)
  (let ((mcd (maxim-comu-divisor n d)))
    (list (/ n mcd) (/ d mcd))))
> reduir

(reduir 105 84)
> (5 4)
```

#### Definir la funcions per canviar la terminal de color: (vermell, verd, blau, negre)

```lisp
(defun vermell ()
  (format t "\e[31m"))
> vermell

(defun verd ()
  (format t "\e[32m"))
> verd

(defun blau ()
  (format t "\e[34m"))
> blau

(defun negre ()
  (format t "\e[0m"))
> negre
```

#### Definir la funció per imprimir un caràcter en negreta

```lisp
(defun negreta (c)
  (format t "\e[1m~a\e[0m" c))
> negreta

(negreta "a")
> a
```

#### Definir la funció per imprimir un caràcter en cursiva

```lisp
(defun cursiva (c)
  (format t "\e[3m~a\e[0m" c))
> cursiva

(cursiva "a")
> a
```

#### Definir la funció per imprimir un caràcter subratllat

```lisp
(defun subratllat (c)
  (format t "\e[4m~a\e[0m" c))
> subratllat

(subratllat "a")
> a
```

#### Definir la funció per imprimir un caràcter en negreta i subratllat

```lisp
(defun negreta-subratllat (c)
  (format t "\e[1;4m~a\e[0m" c))
> negreta-subratllat

(negreta-subratllat "a")
> a
```

#### Definir la funció per imprimir un caràcter en negreta i cursiva

```lisp
(defun negreta-cursiva (c)
  (format t "\e[1;3m~a\e[0m" c))
> negreta-cursiva

(negreta-cursiva "a")
> a
```

#### Definir la funció per imprimir un caràcter en subratllat i cursiva

```lisp
(defun subratllat-cursiva (c)
  (format t "\e[3;4m~a\e[0m" c))
> subratllat-cursiva

(subratllat-cursiva "a")
> a
```

#### Definir una funcio que converteix graus en radians

```lisp
(defun radians (g)
  (* (/ g 180) pi))
> radians

(radians 180)
> 3.141592653589793
```
