---
title: Apuntes Sitemas inteligentes
description: Apuntes de Sistemas Inteligentes
---

El orden de precedencia en la lógica proposicional es –de mayor a menor prioridad–:
$\neg, \land, \lor, \implies, \iff$

Por lo tanto, la oración: $\lnot P \lor Q \land R \implies S $
se puede escribir como: $((\lnot P) \lor (Q \land R)) \implies S $

![Tabla de contenido](/img/SITable.png)

BC = Base de conocimiento

#### Demuéstrese paso a paso, por aplicación de una secuencia de reglas de inferencia, que existe una contradicción en la siguiente base de conocimientos

{$\alpha, \lnot \beta, \alpha \implies \beta$}

**Solución:**

1. Tenemos la premisa $\alpha$ (dada por la base de conocimientos).
2. Tenemos la premisa $\lnot \beta$ (dada por la base de conocimientos).
3. Tenemos la premisa $\alpha \implies \beta$ (dada por la base de conocimientos).

Aplicamos la regla de Modus Ponens a las premisas 1 y 3, lo que nos da $\beta$.
Ahora tenemos una contradicción, ya que tenemos $\beta$ (de la premisa 4) y $\lnot \beta$ (de la premisa 2).
Por lo tanto, la base de conocimientos es contradictoria.

#### Conviertre la siguiente oración en lógica de primer orden en cláusulas

$
\forall x [B(x) \lor (\exists y \space \lnot\exists z \space C(y, z) \implies D(x, y))] \implies Q(K)
$ donde K es una constante

**Solución:**
Primero, eliminamos los implicadores (A implica B se convierte en no A o B):

$ \forall x \lnot [B(x) \lor (\exists y \space \lnot\exists z \space C(y, z) \implies D(x, y))] \lor Q(K) $

Luego, movemos la negación hacia adentro (De Morgan's Laws):

$ \forall x [\lnot B(x) \land \lnot (\exists y \space \lnot\exists z \space C(y, z) \implies D(x, y))] \lor Q(K) $

Después, eliminamos los cuantificadores existenciales:

$ \forall x [\lnot B(x) \land (\forall y \space \exists z \space C(y, z) \land \lnot D(x, y))] \lor Q(K) $

Finalmente, convertimos a la forma normal de Skolem:

$ \forall x [\lnot B(x) \land (C(f(x), g(x)) \land \lnot D(x, f(x)))] \lor Q(K) $

Donde f(x) y g(x) son funciones de Skolem que representan los valores específicos que y y z pueden tomar, respectivamente.

#### Describe formalmente en términos de un ejemplo en lógica proposicional el conceptro de consecuencia lógica $\alpha \models \beta$ e ilustralo también en terminos semánticos, mediante relaciones entre conjuntos

**Solución:**

La consecuencia lógica, denotada como $\alpha \models \beta$, se refiere a la idea de que si $\alpha$ es verdadero, entonces $\beta$ también debe ser verdadero. Es decir, $\beta$ sigue lógicamente de $\alpha$.

Por ejemplo, consideremos las proposiciones $\alpha: P \land Q$ y $\beta: P$. Aquí, podemos decir que $\alpha \models \beta$ porque si $P \land Q$ es verdadero (es decir, tanto $P$ como $Q$ son verdaderos), entonces $P$ también debe ser verdadero.

En términos semánticos y de conjuntos, podemos pensar en $\alpha$ y $\beta$ como conjuntos de mundos posibles o estados de cosas en los que estas proposiciones son verdaderas. Decir que $\alpha \models \beta$ es decir que el conjunto de mundos donde $\alpha$ es verdadero es un subconjunto del conjunto de mundos donde $\beta$ es verdadero. En otras palabras, en todos los mundos donde $\alpha$ es verdadero, $\beta$ también es verdadero.

##### Demustra formalmente, paso a pasao y muy claramente en lógica preposicional, que las siguientes expresiones

##### A. $(P \implies (Q \implies R)) \models ((P \land Q) \implies R)$

**Solución:**

Para demostrar que $(P \implies (Q \implies R)) \models ((P \land Q) \implies R)$, necesitamos mostrar que en todas las interpretaciones en las que $(P \implies (Q \implies R))$ es verdadero, $((P \land Q) \implies R)$ también es verdadero.

Podemos demostrar $(P \implies (Q \implies R)) \models ((P \land Q) \implies R)$ con una tabla de verdad. La tabla de verdad para estas expresiones es la siguiente:

| $P$ | $Q$ | $R$ | $Q \implies R$ | $P \implies (Q \implies R)$ | $P \land Q$ | $(P \land Q) \implies R$ |
|:---:|:---:|:---:|:--------------:|:---------------------------:|:-----------:|:------------------------:|
| T   | T   | T   | T              | T                           | T           | T                        |
| T   | T   | F   | F              | F                           | T           | F                        |
| T   | F   | T   | T              | T                           | F           | T                        |
| T   | F   | F   | T              | T                           | F           | T                        |
| F   | T   | T   | T              | T                           | F           | T                        |
| F   | T   | F   | F              | T                           | F           | T                        |
| F   | F   | T   | T              | T                           | F           | T                        |
| F   | F   | F   | T              | T                           | F           | T                        |

Supongamos que $(P \implies (Q \implies R))$ es verdadero. Esto significa que si $P$ es verdadero, entonces $(Q \implies R)$ también es verdadero.

Si $P$ es falso, entonces $(P \implies (Q \implies R))$ es verdadero (porque la implicación es verdadera si la primera parte es falsa), y $((P \land Q) \implies R)$ también es verdadero (por la misma razón).

Si $P$ es verdadero, entonces $(Q \implies R)$ es verdadero. Esto significa que si $Q$ es verdadero, entonces $R$ es verdadero.

Si $Q$ es falso, entonces $(Q \implies R)$ es verdadero (por la misma razón que antes), y por lo tanto, $((P \land Q) \implies R)$ también es verdadero (porque $P \land Q$ es falso).

Si $Q$ es verdadero, entonces $R$ es verdadero. Esto significa que $((P \land Q) \implies R)$ también es verdadero (porque la implicación es verdadera si la segunda parte es verdadera).

Por lo tanto, en todas las interpretaciones en las que $(P \implies (Q \implies R))$ es verdadero, $((P \land Q) \implies R)$ también es verdadero. Por lo tanto, $(P \implies (Q \implies R)) \models ((P \land Q) \implies R)$.

Como puedes ver, en todas las filas donde $P \implies (Q \implies R)$ es verdadero, $((P \land Q) \implies R)$ también es verdadero. Por lo tanto, $(P \implies (Q \implies R)) \models ((P \land Q) \implies R)$.

##### B. $(P \iff Q) \models ((P \land Q) \lor (\lnot P \land \lnot Q))$

**Solución:**

Para demostrar que $(P \iff Q) \models ((P \land Q) \lor (\lnot P \land \lnot Q))$, necesitamos mostrar que en todas las interpretaciones en las que $(P \iff Q)$ es verdadero, $((P \land Q) \lor (\lnot P \land \lnot Q))$ también es verdadero.

| $P$ | $Q$ | $P \iff Q$ | $P \land Q$ | $\lnot P$ | $\lnot Q$ | $\lnot P \land \lnot Q$ | $(P \land Q) \lor (\lnot P \land \lnot Q)$  |
|:---:|:---:|:----------:|:-----------:|:---------:|:---------:|:-----------------------:|:-----------------------------------------:|
| T   | T   | T          | T           | F         | F         | F                       | T                                         |
| T   | F   | F          | F           | F         | T         | F                       | F                                         |
| F   | T   | F          | F           | T         | F         | F                       | F                                         |
| F   | F   | T          | F           | T         | T         | T                       | T                                         |

Supongamos que $(P \iff Q)$ es verdadero. Esto significa que $P$ y $Q$ tienen el mismo valor de verdad.

Si $P$ y $Q$ son ambos verdaderos, entonces $(P \land Q)$ es verdadero y por lo tanto, $((P \land Q) \lor (\lnot P \land \lnot Q))$ es verdadero.

Si $P$ y $Q$ son ambos falsos, entonces $(\lnot P \land \lnot Q)$ es verdadero y por lo tanto, $((P \land Q) \lor (\lnot P \land \lnot Q))$ es verdadero.

Por lo tanto, en todas las interpretaciones en las que $(P \iff Q)$ es verdadero, $((P \land Q) \lor (\lnot P \land \lnot Q))$ también es verdadero. Por lo tanto, $(P \iff Q) \models ((P \land Q) \lor (\lnot P \land \lnot Q))$.
