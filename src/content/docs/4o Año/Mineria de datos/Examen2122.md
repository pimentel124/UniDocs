---
title: Examen Minería de datos 21/22
description: Examen Minería de datos 22/22
---

## Question 1

##### a) (1.5 POINTS) What do you understand by Knowledge Discovery in Databases? Descrie the steps and their purposes in the Knowledge Discovery in Databases process.

El Descubrimiento de Conocimiento en Bases de Datos (KDD) es el proceso no trivial de identificar patrones válidos, novedosos, potencialmente útiles y comprensibles en los datos. KDD implica extraer conocimiento de grandes volúmenes de datos de manera (semi) automática. Este proceso es crucial debido al gran volumen y variedad de información digital en bases de datos computarizadas, que ha crecido rápidamente en las últimas décadas. En el pasado, la extracción de conocimiento se realizaba manualmente, lo que era lento, costoso y subjetivo.

Pasos del proceso KDD y sus propósitos
El proceso KDD generalmente incluye los siguientes pasos, cada uno con un propósito específico:
- Conocer el problema: Este paso inicial implica comprender el conocimiento previo relevante y los objetivos de la aplicación. Se trata de definir el problema del mundo real.
- Creación de un conjunto de datos objetivo (Selección de datos): Implica la selección y submuestreo de los datos relevantes. El objetivo es crear un conjunto de datos específico que se utilizará en las fases posteriores del proceso.
- Limpieza y preprocesamiento de datos: Esta etapa es crucial y a menudo consume una gran parte del esfuerzo total (aproximadamente el 60%). Involucra la limpieza de datos, manejo de valores faltantes, datos ruidosos, y datos inconsistentes. Los datos de mala calidad llevan a resultados de minería de datos de mala calidad.
- Reducción y transformación de datos: En esta fase, se buscan características útiles, se realiza la reducción de la dimensionalidad o variables, y se busca una representación invariante de los datos. Esto puede incluir la aplicación de técnicas como el Análisis de Componentes Principales (PCA) para reducir la dimensionalidad.
- Elección de las funciones de minería de datos: En este paso, se decide qué tipo de tarea de minería de datos se aplicará (ej. clasificación, regresión, clustering, reglas de asociación). La minería de datos se puede dividir en modelos predictivos y modelos descriptivos.
- Elección de los algoritmos de minería: Una vez definida la tarea, se escogen los algoritmos específicos para llevarla a cabo.
- Minería de datos: Aquí, se aplican los algoritmos seleccionados para buscar patrones de interés en los datos. Esto puede implicar el uso de métodos estadísticos y de aprendizaje automático para obtener patrones y modelos.
- Evaluación de patrones y representación del conocimiento: Los patrones encontrados se interpretan, evalúan y se convierten en conocimiento útil. Esto puede incluir la visualización, la transformación y la eliminación de patrones redundantes.
- Uso del conocimiento descubierto: Finalmente, el conocimiento extraído se utiliza para tomar decisiones o realizar acciones informadas.

##### b) (1.5 POINTS) data pre-processing and cleaning is one of the key factors that determine ehether a data mining project will bea a success. Describe what kind of problems can be encountered when processing the data and what steps (or techniques) can be used to improve the "quality" of the data.

El preprocesamiento y la limpieza de datos son fundamentales para el éxito de un proyecto de minería de datos. La calidad de los resultados de la minería de datos depende directamente de la calidad de los datos de entrada. Aquí se describen algunos problemas y técnicas clave:
Problemas que se pueden encontrar en los datos:
- Datos incompletos: Esto incluye valores de atributos faltantes (valores nulos) o atributos ausentes.
- Datos ruidosos: Se refieren a errores u outliers (valores atípicos) en los datos. Los outliers son objetos de datos que se desvían significativamente de los objetos normales. El ruido es un error aleatorio o varianza en una variable medida.
- Datos inconsistentes: Esto puede incluir datos que no concuerdan entre sí o que violan reglas de integridad.
- Datos de alta dimensionalidad: Cuando hay un gran número de variables, el análisis se vuelve más complejo y puede haber problemas de "maldición de la dimensionalidad", donde los datos se vuelven dispersos.

Técnicas para mejorar la "calidad" de los datos:
- Selección de datos: Es importante seleccionar las variables más relevantes para el análisis y eliminar las redundantes o irrelevantes.
- Limpieza de datos:
  - Manejo de valores faltantes: Puede incluir la eliminación de registros con valores faltantes, la imputación de valores (usando la media, mediana, etc.), o el uso de métodos más sofisticados de estimación.
  - Eliminación de ruido: Esto puede incluir el uso de técnicas para identificar y corregir errores en los datos o la eliminación de outliers.
- Transformación de datos:
  - Normalización y estandarización: Escalar los datos para que tengan un rango similar, lo que ayuda a que los algoritmos funcionen mejor. Esto es importante en clustering para que las variables no dominen el cálculo de distancias.
  - Reducción de dimensionalidad: Técnicas como PCA se pueden usar para reducir el número de variables sin perder demasiada información.
  - Discretización: Convertir variables continuas en categorías discretas. Por ejemplo, agrupar edades en rangos como "joven", "adulto", "anciano".
  - Codificación de variables categóricas: Convertir variables categóricas a un formato numérico apropiado. Por ejemplo, usando codificación one-hot.
- Ingeniería de características: Creación de nuevas variables a partir de las existentes que pueden ser más informativas para el modelo

## Question 2

We've covered serveral data mining techniques in this course. for each of the chosen techniques, describe the technique, identify which problems it is bet suited for, identify which problems it has difficulties with, describe any issues or limitations of each technique.

##### a) (1.0 POINTS) Multilinear Regression

This statistical technique models relationships between multiple independent variables and one dependent variable. Think of it as drawing a best-fit line through data points in multiple dimensions. It works wonderfully for problems with clear linear relationships, like predicting house prices based on features such as size, location, and number of rooms. However, it struggles when relationships aren't linear or when predictor variables are closely related to each other. It's also quite sensitive to outliers, which can throw off the entire model.

##### b) (1.0 POINTS) Decision Trees

Decision trees create a flowchart-like structure that makes predictions by following a series of yes/no questions about the data. Imagine playing a game of "20 Questions" – each question narrows down the possibilities until you reach a final answer. They're particularly valuable when you need to explain how a decision was made, making them perfect for applications like medical diagnosis or loan approval systems. Their main weakness is that they can become too specific to the training data (overfitting) and might create overly complex rules that don't generalize well to new situations.

##### c) (1.0 POINTS) Bayesian classifier

This technique uses probability theory to make predictions, specifically Bayes' theorem, which updates probabilities as new evidence comes in. It's similar to how a doctor might update their diagnosis as they gather more symptoms and test results. Bayesian classifiers excel at tasks like spam detection or document categorization, where they can learn from patterns in the data. Their primary limitation is that they assume all features are independent of each other – like assuming that the presence of one word in an email has no relationship to the presence of other words, which isn't always true in reality.

## Question 3

##### a) (1.0 POINTS) What is an artificial neural net? Describe its components. What do you understand by "training a neural set"? What is a training set and how is it used to train neural networks? Describe the main steps of the neural net training algorithm

Las Redes Neuronales Artificiales son sistemas inspirados en el funcionamiento del cerebro biológico que sirven como base fundamental para el aprendizaje automático.

Componentes de una RNA:
- Neuronas Artificiales: Son las unidades básicas de procesamiento en una RNA, inspiradas en las neuronas biológicas. Estas neuronas reciben entradas, las procesan y generan una salida.
- Conexiones (Sinapsis): Cada conexión entre neuronas tiene un peso asociado que determina la fuerza de la conexión. Las sinapsis pueden ser excitadoras (incrementan la señal), inhibidoras (disminuyen la señal), o inexistentes.
- Entradas: Representan los datos que se introducen en la red para su procesamiento.
- Salidas: El resultado del procesamiento realizado por la red.
- Función de Activación (Transferencia): Compara la suma ponderada de las entradas con un umbral y decide si la neurona se activa (envía una señal) o no.
- Umbral (Bias): Un valor que se suma a la combinación lineal de las entradas, antes de pasar por la función de activación.

El proceso de entrenamiento es fundamental y consiste en ajustar los pesos de las conexiones para que la red aprenda a realizar una tarea específica. Este proceso utiliza un conjunto de datos de entrenamiento donde se conocen tanto las entradas como las salidas deseadas. El entrenamiento sigue un algoritmo iterativo que incluye:

- Inicialización: Se asignan valores aleatorios a los pesos y al umbral.
- Presentación de Ejemplos: Se presenta a la red cada ejemplo del conjunto de entrenamiento.
- Cálculo de la Salida: Se calcula la salida actual de la red para las entradas dadas.
- Cálculo del Error: Se compara la salida actual con la salida deseada (valor objetivo) y se calcula el error.
- Actualización de Pesos: Se ajustan los pesos y el umbral utilizando una regla de aprendizaje basada en el error. La regla de aprendizaje del perceptrón es: Wj ← Wj + λ(dj - yj)Xj, donde Wj son los pesos, λ es el factor de aprendizaje, dj es la salida deseada, yj es la salida actual, y Xj es la entrada.
- Iteración: Se repiten los pasos 2-5 para cada ejemplo del conjunto de entrenamiento hasta que la red clasifica correctamente todos los ejemplos o se alcanza un número máximo de iteraciones.
- Convergencia: El proceso de entrenamiento continua hasta que la red converge a una solución, es decir, que los pesos y el umbral ya no cambian significativamente.

Los datos se dividen típicamente en conjuntos de entrenamiento y prueba para construir y validar el modelo respectivamente. El objetivo final es encontrar los valores óptimos de pesos y umbrales que permitan a la red clasificar correctamente los datos de entrada.

##### b) (1.0 POINTS) An "electronic nose" uses sensors to analyze the vapors from various substances and classify them based on the quantitative information obtained. Suppose we use 16 sensors to identify four types of red wine: Cabernet, Merot, Syraz and Tempranillo. Can a neural network be used to solve this problem? Make a brief description of the network you would propose. Can you use the trained network to identify a new red wine? How would you do it?

Una red neuronal del tipo Perceptrón Multicapa (MLP) puede clasificar los cuatro tipos de vino basándose en las lecturas de los 16 sensores del olfato electrónico. La arquitectura tendría una capa de entrada con 16 neuronas (una por sensor), una o dos capas ocultas para procesar los patrones, y una capa de salida con 4 neuronas representando cada tipo de vino (Cabernet, Merlot, Syrah y Tempranillo).
Para entrenar la red, necesitamos un conjunto de datos con las lecturas de los sensores y las etiquetas correctas de cada vino. La red aprenderá ajustando sus pesos mediante retropropagación hasta minimizar el error de clasificación.
Para identificar un nuevo vino, simplemente tomamos las lecturas de los sensores, las pasamos por la red entrenada, y la neurona de salida con mayor activación nos indica el tipo de vino predicho.
Es importante normalizar los datos de entrada y usar validación cruzada para evaluar el rendimiento del modelo.

En caso de querer identificar un nuevo tipo de vino, es fundamental interpretar estos resultados con cautela. Si todas las probabilidades de salida son relativamente bajas o cercanas entre sí, podría indicar que el vino es significativamente diferente de aquel con el que se entrenó la red.
Es como pedirle a una persona que sólo ha visto manzanas rojas que identifique el color de una manzana. Puede que diga que es roja con mucha seguridad cuando se le muestra una manzana roja, pero puede dar respuestas confusas o inciertas cuando se le muestra una manzana verde porque no coincide con su entrenamiento.

## Question 4

##### a) (1.5 POINTS) Prediction vs Description. What do you understand by prediction? and description? Are they the same? State similarities and differences. Choose one clustering technique, present its main ideas

En el contexto del análisis de datos, la predicción y la descripción son dos enfoques distintos con objetivos diferentes.

- Predicción: La predicción implica el uso de un conjunto de variables para estimar valores desconocidos o futuros de otras variables. Este enfoque se centra en construir modelos que puedan predecir con precisión resultados basándose en patrones aprendidos de los datos. La predicción se asocia a menudo con métodos de aprendizaje supervisado, donde se utilizan datos etiquetados para entrenar modelos. Ejemplos de esto son los modelos de regresión para predecir salarios, o los modelos de clasificación para predecir si se aprobará un préstamo.
- Descripción: La descripción, por otro lado, busca identificar patrones y relaciones dentro de los datos, que sean interpretables por humanos. No se trata tanto de predecir valores futuros, sino de comprender la estructura subyacente y las características de los datos. La descripción se relaciona más con métodos de aprendizaje no supervisado, donde los datos no están etiquetados y el objetivo es descubrir patrones por sí mismos. Un ejemplo clave de métodos descriptivos es el clustering, que agrupa objetos similares en conjuntos.

Similitudes y diferencias

- Similitudes: Tanto la predicción como la descripción son métodos de análisis de datos que buscan extraer información útil de los datos. Ambos pueden usar métodos estadísticos y computacionales.
- Diferencias: La principal diferencia radica en su objetivo. La predicción se centra en la capacidad de predecir resultados, mientras que la descripción se enfoca en la comprensión e interpretación de los datos. La predicción suele utilizar aprendizaje supervisado y la descripción, aprendizaje no supervisado.

Técnicas de Clustering: K-means
Una técnica de clustering representativa es K-means. A continuación, se presentan sus principales ideas:

- Partición: K-means es un método de partición que divide los datos en k clusters, donde k es un parámetro especificado por el usuario.
- Centroides: Cada cluster se representa mediante un centroide, que es el promedio de todos los puntos dentro de ese cluster.
- Asignación: El algoritmo asigna cada punto al cluster cuyo centroide es el más cercano.
- Actualización: Los centroides se recalculan iterativamente basados en la asignación de puntos a los clusters. Este proceso se repite hasta que los centroides ya no cambian o se alcanza un número máximo de iteraciones.
- Objetivo: K-means busca minimizar la suma de las distancias al cuadrado de cada punto a su centroide más cercano (SSE).
- Tipos de clusters: K-means tiende a producir clusters de forma globular.

En resumen, K-means es una técnica de clustering popular por su simplicidad y eficiencia. Sin embargo, puede ser sensible a la elección inicial de los centroides y puede no funcionar bien con clusters de formas irregulares.

##### b) The following is an example of customer purchase transaction data set
  
| **TID** | **Items Purchased ** |
|:-------:|:--------------------:|
| 01      | A, B                 |
| 02      | A, C, E, G           |
| 03      | A, B, C, D           |
| 04      | B, C                 |
| 05      | B, D, G              |
| 06      | A, C, F, G           |
| 07      | A, E, G              |
| 08      | A, B, C              |
| 09      | B, D, F              |
| 10      | A, B, C, F           |

Define itemset, frequent itemset, support and confidence of an association rule.
The following is the list of requent two-itemsets. Show the steps to apply the Apriori property to generate and prune the candidates for frequent three-itemsets. State the Apriori principle and describe how the Apriori property is used in the steps. Give the final list of candidate frequent three-itemsets:
{A, B} {A, C} {B, C} {B, D}


