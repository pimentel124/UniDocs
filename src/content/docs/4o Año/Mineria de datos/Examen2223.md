---
title: Examen Minería de datos 22/23
description: Examen Minería de datos 22/23
---

## Question 1

Consider the following statemenst. Do you agree? (Is the statement true or false?) Justify your asnwer.

##### a) (1.0 POINTS) Stochastig gradient descent performs less computation per update than batch gradient descent

Sí, estoy de acuerdo. El descenso de gradiente estocástico (SGD) realiza menos cálculos por actualización que el descenso de gradiente por lotes (BGD).
En SGD, el gradiente se calcula utilizando un solo punto de datos o una pequeña muestra (mini-batch) en cada iteración.
Por lo tanto, la cantidad de cálculo necesaria para una sola actualización es menor.
En BGD, el gradiente se calcula utilizando todos los puntos de datos del conjunto de entrenamiento en cada iteración, lo que implica una mayor carga computacional por actualización.
Aunque BGD puede converger en menos iteraciones, cada iteración es mucho más costosa computacionalmente.
En el contexto de la pregunta, el enfoque está en el costo computacional por actualización, donde SGD es más eficiente.

##### b) (1.0 POINTS) A project team claims taht their method is good based on the low error (SEE) reported on the training set

No, no estoy de acuerdo. Un equipo de proyecto no puede afirmar que su método es bueno basándose únicamente en un error bajo (SSE o Suma de Errores al Cuadrado) en el conjunto de entrenamiento.
El SSE mide qué tan bien se ajusta un modelo a los datos de entrenamiento, pero no es una medida fiable de qué tan bien se desempeñará el modelo con datos nuevos e invisibles.
Un error bajo en el conjunto de entrenamiento puede indicar un sobreajuste (overfitting), lo que significa que el modelo se ha ajustado demasiado a los datos de entrenamiento y no se generalizará bien a otros datos.
Para evaluar la calidad de un modelo, es necesario utilizar un conjunto de prueba separado que el modelo no haya visto durante el entrenamiento.
Métricas como el Error Cuadrático Medio (MSE) o el Error Absoluto Medio (MAE) en el conjunto de prueba pueden proporcionar una mejor evaluación del rendimiento del modelo.
Además, la calidad del modelo siempre requiere una opinión razonada. Un error bajo en el conjunto de entrenamiento es insuficiente para validar un modelo.

##### c) (1.0 POINTS) Leave-one-out cross-validation (LOOCV) is a special case of k-fold cross-validation

Sí, estoy de acuerdo. La validación cruzada de dejar uno fuera (LOOCV) es, en efecto, un caso especial de la validación cruzada de k-pliegues. En la validación cruzada de k-pliegues, el conjunto de datos se divide en k subconjuntos o pliegues, y el modelo se entrena en k-1 pliegues y se evalúa en el pliegue restante. Este proceso se repite k veces, usando un pliegue diferente como conjunto de prueba cada vez. En el caso de LOOCV, se utiliza un valor de k igual al número total de ejemplos en el conjunto de datos, con lo cual cada punto de datos se convierte en su propio pliegue. En otras palabras, en LOOCV, el modelo se entrena en todos los puntos de datos excepto uno, y luego se evalúa en el punto de datos restante. Esto se repite para todos los puntos de datos. Por lo tanto, LOOCV es un caso extremo de validación cruzada de k-pliegues donde k es igual al número de puntos de datos.

- k-Fold Cross-Validation: Divide los datos en k subconjuntos y evalúa el modelo en cada subconjunto.
- Leave-One-Out Cross-Validation: Es un caso especial de k-fold cross-validation donde k es igual al número de puntos de datos.
- Similitud: LOOCV sigue la misma lógica que k-fold cross-validation, pero con cada punto de datos como su propio pliegue de prueba

## Question 2

We've covered serveral data mining techniques in this course. Classification and regression are two of them.

##### a) (1.6 POINTS) What do you urderstand by classification? And regression? Are they the same? Sate similarities and differences. Indentify each technique is best suited for, identify which problems it has difficulties with, describe any issues or limitations of each technique

Clasificación:

- La clasificación es una técnica de modelado predictivo que busca asignar una etiqueta de clase categórica a cada punto de datos. El objetivo es construir un modelo que pueda predecir a qué clase pertenece una nueva instancia.
- En la clasificación, la variable objetivo (dependiente) toma un número finito de valores no ordenados. Estos valores son las etiquetas de clase.
- El modelo resultante particiona el espacio de datos en regiones de decisión. El objetivo es que las instancias similares se agrupen en la misma región, y que las regiones de diferentes clases estén separadas por superficies de decisión.
- Ejemplos de algoritmos de clasificación incluyen árboles de decisión, redes neuronales, perceptrones, Naive Bayes y k-NN.
- En la práctica, el conjunto de datos se divide en conjuntos de entrenamiento y prueba. El conjunto de entrenamiento se utiliza para construir el modelo, y el conjunto de prueba se utiliza para evaluar su rendimiento.

Regresión:

- La regresión es una técnica de modelado predictivo que busca modelar funciones con valores continuos para predecir valores desconocidos o futuros.
- En la regresión, la variable objetivo (dependiente) toma valores continuos o discretos ordenados.
- El modelo de regresión se utiliza para estimar la relación matemática entre una variable dependiente y una o más variables independientes.
- Un ejemplo común es la regresión lineal, donde se modela la relación entre variables usando líneas. La regresión lineal simple utiliza una variable independiente, mientras que la regresión lineal múltiple utiliza varias.
- Otros modelos de regresión incluyen regresión polinómica y regresión logística. La regresión logística se usa cuando la variable objetivo tiene dos valores posibles.

Similitudes entre clasificación y regresión:

- Ambas son técnicas de aprendizaje supervisado que aprenden un mapeo de X a Y. Es decir, ambas buscan construir un modelo que pueda predecir un valor de salida (Y) dado un conjunto de variables de entrada (X).
- Ambas son sensibles a la dimensionalidad de las variables de entrada.
- La generalización a nuevos datos es importante en ambas. Es decir, ambos modelos deben poder hacer predicciones precisas en datos que no se utilizaron para su entrenamiento.
- Muchos modelos pueden ser utilizados tanto para clasificación como para regresión. Por ejemplo, las redes neuronales y los árboles de decisión pueden ser utilizados para ambos tipos de tareas.

Diferencias entre clasificación y regresión:

- La principal diferencia es el tipo de variable objetivo (dependiente). En la clasificación, la variable objetivo es categórica (discreta o nominal), mientras que en la regresión, la variable objetivo es continua o discreta ordenada.
- Las funciones de costo son diferentes: en la clasificación, se utilizan métricas como el error de clasificación, mientras que en la regresión, se utiliza la suma de errores al cuadrado.
- La regresión lineal asume una relación lineal entre variables, mientras que la regresión logística no.

Aplicaciones y Limitaciones:

- Clasificación:
  - Adecuada para: Problemas donde se necesita asignar una etiqueta a los datos, como detección de spam, reconocimiento de imágenes, clasificación de documentos, diagnóstico médico, etc.
  - Dificultades con: Problemas con clases desequilibradas, donde hay muchas más instancias de una clase que de otras. También puede tener dificultades con datos de alta dimensión. Puede verse afectada por el ruido en los datos.
  - Limitaciones: La decisión de clase es discreta, y no se puede obtener una probabilidad o una medida de confianza en el resultado. Los modelos pueden ser sensibles a la elección de las características y a la configuración de los parámetros.
- Regresión:
  - Adecuada para: Problemas donde se necesita predecir un valor numérico, como pronóstico de ventas, predicción de precios de la vivienda, análisis de series temporales.
  - Dificultades con: Problemas donde la relación entre variables no es lineal, o donde hay valores atípicos que pueden influir en la estimación de los parámetros.
  - Limitaciones: La regresión lineal asume linealidad, lo que puede no ser realista para algunas relaciones entre variables. Los modelos pueden ser sensibles a la escala de las variables, y puede ser necesario realizar transformaciones. La heteroscedasticidad también puede ser un problema, donde la varianza de los errores no es constante.

En resumen, la clasificación y la regresión son técnicas de modelado predictivo que se adaptan a diferentes tipos de problemas. La clasificación se utiliza para asignar etiquetas de clase, mientras que la regresión se utiliza para predecir valores numéricos. Ambas técnicas tienen sus propias fortalezas y debilidades, y la elección de la técnica adecuada dependerá del tipo de datos y del problema específico a resolver.

##### b) (0.9 POINTS) Consider the following scenarios. Explain whether each scenrio is classification or regression problem

###### 1. We collect a set of data on the top 500 firms in the US. For each firm we record profit, number of employees, typo of the industry and the CEO (Chied Executive Officer) salary. We are interested in understanding which factors affect CEO salary

Análisis: En este escenario, la variable objetivo (la variable que se busca predecir) es el salario del CEO. El salario es una variable numérica continua, lo que significa que puede tomar cualquier valor dentro de un rango determinado. Los datos de entrada (ganancias, número de empleados, tipo de industria, etc.) son utilizados para predecir el salario.

Tipo de Problema: Este es un problema de regresión, ya que el objetivo es predecir un valor numérico continuo. Se pueden utilizar técnicas de regresión lineal, regresión polinómica o modelos más avanzados para modelar la relación entre las variables de entrada y el salario del CEO

###### 2. We are considering launching a new product and wish to know whether it will be a success or a failure. We collect data on 20 similar products that were previously launched. For each product we have recorded whether it was a success or a failure, price charged for the product, marketing budget, competition price, and ten other variables

Análisis: En este escenario, la variable objetivo es el resultado del lanzamiento del producto, que puede ser "éxito" o "fracaso". Esta es una variable categórica, con dos posibles valores. Las variables de entrada (precio, presupuesto de marketing, etc.) son utilizadas para predecir el resultado.

Tipo de Problema: Este es un problema de clasificación, ya que el objetivo es asignar una etiqueta de clase a cada producto. El modelo buscará clasificar un nuevo producto como "éxito" o "fracaso" basándose en los datos de entrada. Los modelos de regresión logística son apropiados cuando la variable dependiente tiene dos posibles resultados

###### 3. We are interested in predicting the % change in the US dollar in relation to the weekly changes in the world stock market. Hence we collect weekly data for all of 2022. For each week we record the % change in the dollar, the % change in the US market, the % change in the British market, and the % change in the German market

Análisis: La variable objetivo en este caso es el cambio porcentual del dólar, que es una variable numérica continua. Se utilizan los cambios porcentuales de los mercados de valores como variables de entrada para modelar este cambio.

Tipo de Problema: Este es un problema de regresión, ya que se busca predecir un valor numérico continuo. Se pueden utilizar modelos de regresión lineal o de series de tiempo para modelar la relación entre las variables de entrada y el cambio porcentual del dólar. En series de tiempo, se utilizan datos pasados para pronosticar valores futuros.

## Question 3

Consider the following dataset. Each data instance corresponds to a patient. The attributes are:

- sore-throat {yes, no}
- fever {yes, no}
- swollen-glands {yes, no}
- congestion {yes, no}
- headache {yes, no}
- diagnosis {strep-throat, allergy, cold}

Use the dataset below to learn a decission tree which predicts diagnosis, based on the values of attributes sore throat, fever, swollen-glands, congestion, and headache.

| **sore-throat** | **fever** | **swollen-glands** | **congestion** | **headache** | **diagnosis** |
|:---------------:|:---------:|:------------------:|:--------------:|:------------:|:-------------:|
| yes             | yes       | yes                | yes            | yes          | strep-throat  |
| yes             | no        | yes                | no             | no           | strep-throat  |
| no              | no        | yes                | no             | no           | strep-throat  |
| no              | no        | no                 | yes            | yes          | allergy       |
| no              | no        | no                 | yes            | no           | allergy       |
| yes             | no        | no                 | yes            | yes          | allergy       |
| yes             | yes       | no                 | yes            | no           | cold          |
| no              | yes       | no                 | yes            | no           | cold          |
| no              | yes       | no                 | yes            | yes          | cold          |
| yes             | yes       | no                 | yes            | yes          | cold          |

Also the entropies of the predictiong attributes with respect to diagnosis are provided:

- Entropy of sore-throat with respect to diagnosis = 1.5
- Entropy of fever with respect to diagnosis = 0.82
- Entropy of swollen-glands with respect to diagnosis = 0.68
- Entropy of congestion with respect to diagnosis = 1.12
- Entropy of sore-throat with respect to diagnosis = 1.5

#### a) (0.2 POINTS) Show the steps of the calculations of the entropy of sore-throat with respect to diagnosis (you already know that result is 1.5, but show in detail how such value is produced)

The entropy formula for an attribute A with respect to target class C is:
H(C|A) = -∑ P(a) ∑ P(c|a) log₂ P(c|a)
Where:

- a represents each possible value of attribute A (in this case, "yes" or "no" for sore-throat)
- c represents each possible diagnosis (strep-throat, allergy, cold)
- P(a) is the probability of each attribute value
- P(c|a) is the probability of each class given the attribute value

Let's solve this step by step:

###### 1. First, let's count the occurrences:
- For sore-throat = "yes" (5 total cases):
  - 2 strep-throat
  - 1 allergy
  - 2 cold

- For sore-throat = "no" (5 total cases):
  - 1 strep-throat
  - 2 allergy
  - 2 cold

###### 2. Calculate P(sore-throat = yes) = 5/10 = 0.5 || Calculate P(sore-throat = no) = 5/10 = 0.5

###### 3. 

For sore-throat = "yes":

- P(strep|yes) = 2/5 = 0.4
- P(allergy|yes) = 1/5 = 0.2
- P(cold|yes) = 2/5 = 0.4

For sore-throat = "no":

- P(strep|no) = 1/5 = 0.2
- P(allergy|no) = 2/5 = 0.4
- P(cold|no) = 2/5 = 0.4

###### 4. Now let's calculate

H(C|sore-throat) = P(yes) · [-P(strep|yes)log₂P(strep|yes) - P(allergy|yes)log₂P(allergy|yes) - P(cold|yes)log₂P(cold|yes)] + P(no) · [-P(strep|no)log₂P(strep|no) - P(allergy|no)log₂P(allergy|no) - P(cold|no)log₂P(cold|no)]

###### 5. Plugging in the values

0.5 · [-0.4log₂(0.4) - 0.2log₂(0.2) - 0.4log₂(0.4)] + 0.5 · [-0.2log₂(0.2) - 0.4log₂(0.4) - 0.4log₂(0.4)]

###### 6. Calculating

0.5 · [0.529 + 0.464 + 0.529] + 0.5 · [0.464 + 0.529 + 0.529]

###### 7. Final calculation

0.5 · 1.522 + 0.5 · 1.522 = 1.522