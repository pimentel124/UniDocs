---
title: Examen Minería de datos 22/23
description: Examen Minería de datos 22/23
---

## Question 2

Consider the following statemenst. Do you agree? (Is the statement true or false?) Justify your asnwer.

_a) (1.0 POINTS) Stochastig gradient descent performs less computation per update than batch gradient descent._

Sí, estoy de acuerdo. El descenso de gradiente estocástico (SGD) realiza menos cálculos por actualización que el descenso de gradiente por lotes (BGD).
En SGD, el gradiente se calcula utilizando un solo punto de datos o una pequeña muestra (mini-batch) en cada iteración.
Por lo tanto, la cantidad de cálculo necesaria para una sola actualización es menor.
En BGD, el gradiente se calcula utilizando todos los puntos de datos del conjunto de entrenamiento en cada iteración, lo que implica una mayor carga computacional por actualización.
Aunque BGD puede converger en menos iteraciones, cada iteración es mucho más costosa computacionalmente.
En el contexto de la pregunta, el enfoque está en el costo computacional por actualización, donde SGD es más eficiente.


b) (1.0 POINTS) A project team claims taht their method is good based on the low error (SEE) reported on the training set.

No, no estoy de acuerdo. Un equipo de proyecto no puede afirmar que su método es bueno basándose únicamente en un error bajo (SSE o Suma de Errores al Cuadrado) en el conjunto de entrenamiento.
El SSE mide qué tan bien se ajusta un modelo a los datos de entrenamiento, pero no es una medida fiable de qué tan bien se desempeñará el modelo con datos nuevos e invisibles.
Un error bajo en el conjunto de entrenamiento puede indicar un sobreajuste (overfitting), lo que significa que el modelo se ha ajustado demasiado a los datos de entrenamiento y no se generalizará bien a otros datos.
Para evaluar la calidad de un modelo, es necesario utilizar un conjunto de prueba separado que el modelo no haya visto durante el entrenamiento.
Métricas como el Error Cuadrático Medio (MSE) o el Error Absoluto Medio (MAE) en el conjunto de prueba pueden proporcionar una mejor evaluación del rendimiento del modelo.
Además, la calidad del modelo siempre requiere una opinión razonada. Un error bajo en el conjunto de entrenamiento es insuficiente para validar un modelo.

c) (1.0 POINTS) Leave-one-out cross-validation (LOOCV) is a special case of k-fold cross-validation.
