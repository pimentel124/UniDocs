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

##### b) (1.0 POINTS) Decision Trees

##### c) (1.0 POINTS) Bayesian classifier
