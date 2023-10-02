---
title: Taller 1
description: taller 1 de la asignatura de Sistemas inteligentes
--- 

## Pregunta 1

<br>

#### Muéstrese cómo pueden usarse las tablas de verdad para establecer la validez, la satisfactibilidad y la insatisfactibilidad de una oración compleja

<br>

Para establecer la validez, la satisfactibilidad y la insatisfactibilidad de una oración compleja, se pueden utilizar tablas de verdad. Como ejemplos tenemos los ejercicios de a continuación:

## Pregunta 2

<br>

#### Sean «a» y «b» las representaciones asociadas a los hechos reales «A» y «B» respectivamente

<br>

**Considera las siguientes bases de conocimientos en un instante dado: BC1= {a→b}, BC2 = {a, a→b}, BC3 = {b, a→b} y BC4 = {b→b}.**

Razona claramente sobre cuál de las bases de conocimientos permite inferir el hecho B y cuál permite inferir el hecho A en el instante
considerado. Justifica el anterior razonamiento a través del uso de tablas de verdad.  

Para inferir el hecho B, se necesita una base de conocimientos que contenga la representación de B. Por lo tanto, la única base de conocimientos que permite inferir el hecho B es BC3, ya que contiene la representación de B.

Para inferir el hecho A, se necesita una base de conocimientos que contenga la representación de A. La base de conocimientos BC2 contiene la representación de A, pero también contiene la implicación a→b, lo que significa que A implica B. Por lo tanto, si A es verdadero, entonces B también debe ser verdadero. Por lo tanto, la base de conocimientos BC2 permite inferir tanto el hecho A como el hecho B.

**Para la base de conocimientos BC1:**

| a | b | a→b |
|---|---|-----|
| V | V |  V  |
| V | F |  F  |
| F | V |  V  |
| F | F |  V  |

**Para la base de conocimientos BC2:**

| a | b | a→b |
|---|---|-----|
| V | V |  V  |
| V | F |  F  |
| F | V |  V  |
| F | F |  V  |

**Para la base de conocimientos BC3:**

| a | b | a→b |
|---|---|-----|
| V | V |  V  |
| V | F |  V  |
| F | V |  F  |
| F | F |  V  |

**Para la base de conocimientos BC4:**

| b | b→b |
|---|-----|
| V |  V  |
| F |  V  |

<br>

## Pregunta 3

<br>

#### Sea BC={a, a→b}. Probar mediante una demostración formal que BC /= b

<br>

Para probar que BC no implica b, es suficiente encontrar una interpretación en la que BC sea verdadero y b sea falso. Una interpretación es una asignación de valores de verdad a las proposiciones atómicas a y b.

Supongamos que a es verdadero y b es falso. Entonces, la implicación a→b es falsa, ya que una implicación es falsa si el antecedente es verdadero y el consecuente es falso. Por lo tanto, la base de conocimientos BC={a,a→b} es verdadera, pero b es falsa en esta interpretación.

Por lo tanto, hemos encontrado una interpretación en la que BC es verdadero y b es falso, lo que significa que BC no implica b.

## Pregunta 4

<br>

#### Probar la anterior implicación mediante una tabla de verdad

<br>

Para probar que BC implica b, podemos construir una tabla de verdad que muestre todas las posibles combinaciones de valores de verdad para las proposiciones atómicas a y b, así como para la implicación a→b. Si la implicación a→b es verdadera para todas las combinaciones en las que BC es verdadero, entonces podemos concluir que BC implica b.

| a | b | a→b | BC |
|---|---|------|----|
| V | V |  V   | V  |
| V | F |  F   | V  |
| F | V |  V   | V  |
| F | F |  V   | F  |

En esta tabla, se evalúa la implicación a→b y la base de conocimientos BC para todas las posibles combinaciones de valores de verdad para a y b. La columna BC es verdadera para las combinaciones en las que a es verdadero, ya que BC={a, a→b}. La implicación a→b es verdadera para tres de las cuatro combinaciones, pero es falsa cuando a es verdadero y b es falso.  

## Pregunta 5

<br>

#### ¿La oración «O bien 2+2=4 y está lloviendo o 2+2=4 y no está lloviendo» está afirmando algo relacionado con la aritmética, el clima o ninguna de ambas cosas?

<br>

La oración "O bien 2+2=4 y está lloviendo o 2+2=4 y no está lloviendo" está afirmando algo relacionado con la lógica proposicional y no está afirmando nada relacionado con la aritmética o el clima. La oración es una disyunción lógica que afirma que al menos una de las dos proposiciones es verdadera: "2+2=4 y está lloviendo" o "2+2=4 y no está lloviendo". La verdad o falsedad de la oración no depende de si es cierto o no que 2+2=4 o si está lloviendo o no, sino de si al menos una de las dos proposiciones es verdadera. Por lo tanto, la oración no está afirmando nada sobre la aritmética o el clima, sino simplemente sobre la lógica proposicional.  

## Pregunta 6

<br>

#### ¿Por qué se utiliza preferentemente el término «conocimiento» en vez de «información» en el contexto de la inteligencia artificial?

<br>

En el contexto de la inteligencia artificial, se utiliza preferentemente el término "conocimiento" en lugar de "información" porque el conocimiento implica una comprensión más profunda y significativa de los datos. La información se refiere a datos sin procesar o hechos aislados, mientras que el conocimiento implica una comprensión más profunda de cómo se relacionan los datos y cómo se pueden utilizar para tomar decisiones o resolver problemas. En la inteligencia artificial, el objetivo es crear sistemas que puedan razonar y tomar decisiones como lo haría un ser humano, y esto requiere más que simplemente procesar información.  

## Pregunta 7

<br>

#### ¿Cómo puede garantizarse completamente el éxito de un programa de inteligencia artificial?

<br>

Aunque se pueden tomar medidas para minimizar los errores y aumentar la precisión, siempre existe la posibilidad de que un programa de inteligencia artificial falle o tome una decisión incorrecta. Esto se debe a que la inteligencia artificial se basa en la información y los datos disponibles en un momento dado, y estos datos pueden ser incompletos o inexactos. Además, la inteligencia artificial también puede verse afectada por factores externos impredecibles, como cambios en el entorno. Por lo tanto, aunque se pueden tomar medidas para mejorar la precisión y minimizar los errores, no se puede garantizar completamente el éxito de un programa de inteligencia artificial.

En único caso hipotético en el el que se podría garantizar el éxito de una inteliencia es en caso de que esta fuera omnisciente y tuviera acceso a toda la información del universo y la persona que persona encargada de programarla fuera capaz de programarla de forma que fuera capaz de procesar toda esa información y tomar las decisiones correctas.
