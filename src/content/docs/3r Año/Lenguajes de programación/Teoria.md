---
title: Teoria
description: Teoria Lenguajes de Programación
---

# Tema 1 - Introducción a los lenguajes de programación 

### Llenguajes interpretados
• Comprobación de sintaxis y ejecución del código línea a línea.
• Tiempo de ejecución mayor.
• Más rápido tener un programa "listo" para ejecutar.


### Llenguajes compilados
• Tiempo de copilación + tiempo de enlazado.
• Tiempo de ejecución menor.

# Tema 2 - Visión general de los diferentes tipos de lenguajes de programación

## Classificación de los llengujes de programación

Los criterios de clasificación de los lenguajes de programación son:

### Segun la metodología utilizada de diseño de programas

- Estructura o división del programa en procedimientos.
- Modularidad o divisiónd en módulos.
- Encapsulación o abstracción de datos.
- Orientación a objetos.

### Según las diferentes generaciones

- Primera generación: Lenguaje máquina.
- Segunda generación: Eensamblador.
- Tercera generación: Alto nivel.
- Cuarta generación: Hojas de cálculo, sistemas de BBDD, gráficos, etc.
- Quinta generación: Programación declarativa.

### Segun el paradigma de programación

- Procedimientos o imperativo.
- Programación lógica o declarativa.
- Funcional o aplicativa.
- Flujo de datos.

### Según la manera de considerar los datos

### Según el propósito del lenguaje

## Lenguajes procedurales o imperativos

- Se basan en el estilo de programación Von Neumann.
- El cuello de botella es la operación de asignación.
- Consiste en planificar y detallar el tráfico de la información para este cuello.
- Son muy eficientes pero dependen mucho del concepto de memoria.

## Lenguajes funcionales

- Se basan en el concepto de función matemática y en la operación y composición de funciones.
- Una función es un medio para establecer una relación entre elementos de un conjunto de valores (dominio) con los elementos de otro conjunto (rango).
- Este paradigma se puede interpretar como cajas (bloques) que sirven para construir un programa funcional. Añadir más cajas, se llama composición de funciones.
- Transparencia referencial: Una expresión le corresponde siempre una misma evaluación, sin tener miedo de los efectos colaterales producidos por la existencia de variables globales.

### Lenguajes de programación lógica

- Consiste en programar por descripción (representación del conocimiento declarativo)
- Un programa es una descripcion de conocimientos y un procedimiento de inferencia, independinte de la aplicación.
- La nueva información se puede ir añadiendo a la base de conocimientos.
- Se puden obtener obtener los pasos que nos muestran la solución del problema.

# Tema 3 - Técnicas de descripción de los lenguajes de programación

## Sintaxis

Permite decidir si una secuencia de palabras es una frase válida del lenguaje.  
Dota a la frase de una estructura que ayuda a enconctrar su significado.

## Gramática

Definición formal de la sintaxis de un lenguaje de programación. Es decir, es un conjunto de reclas y producciones que especifican las secuencias permitidas de elementos léxicos.

Gramáticas libre de contexto: Un lenguaje es libre de contexto sí y solo si se puede definir mediante un conjunto de producciones que son libres de contexto.  
Un conjunto de producciones son libres de contexto si todos sus miembros son de la forma:  
$A :== \xi \quad (A \in N, \xi \in (N\ U\ T)^*)$

## Semántica

Significada de cada constucción en el lenguaje. Es decir, hace referencia al significado de las estructuras sintacticamente correctas del lenguaje.

### Tipos de semántica

- Modelos gramaticales (gramáticas de atributos).
- Modelos operacionales (imperativos).
- Modelos denotacionales (funcionales o aplicativos).
- Mdelos axiomaticos (lógicos).
- Modelos de especificación (tipos algebraicos de datos).

# Tema 4 - Características generales de los lenguajes de programación

## Enlace y tiempos de enlace (_binding_ & _binding time_)

### _Binding_

El enlace de un elemento de un programa es la asociación a una característica particular o propiedad. Se define como la elección de la propiedad entre un conjunto de posibilidades.

### _Binding time_

Tiempo en el que se elije esta propiedad.

#### Tipos de _binding time_

- Tiempo de ejecución (_run time_).
- Tiempo de compilación (_compile time_).
- Tiempo de implementación del lenguaje.
- Tiempo de definición del lenguaje.

## Tipos de datos

Clase de objetos con un conjunto de operaciones para crearlos y operar con ellos.  
Cada lenjuaje tiene un conjunto de tipo de datos primitivos construidos y algunos ofrecen la posibilidad de añadir nuevos tipos de datos.

### Niveles diferentes de tipos de datos

#### Nivel de especificación

- Los atributos que distinguen a los objetos de este tipo.
- Los valores que los objetos de este tipo pueden tomar.
- Las operaciones que definen las posibles manipulaciones de los objetos de este tipo.

#### Nivel de implementación

- Representación dentro de la memoria
- La forma en la que las operaciones se definen para este tipo de datos.

### Tipos

#### Elementales

- Especificación: Invariantes, imporante su representación en memoria y generalmente operaciones primitivas.
- Implementación: Representación del objeto en memoria.

#### Estructurados

- Especificación: Se contruyen a partir de la agrupación de otros tipos, puedn ser fijos o variables y se componen de tipos de datos heterogéneos y homogéneos.
- Implementación: La representación en memoria incluye: la forma de guardarlos y un descritor. Se pueden representar de forma secuencial o con listas enlazadas. Operaciones implementadas por software.

### Calculo de posición de un elemento en memoria

$a$ = _offset_.  
$D$ = posiciones de memoria que ocupa el descriptor.  
$E$ = espacio por caracter.  
$LB1$ = límite inferior del rango de índices.  
$LB2$ = límite inferior del rango de índices.  
$UB1$ = límite superior del rango de índices.  
$UB2$ = límite superior del rango de índices.  
$i$ = índice de la primera dimensión.  
$j$ = índice de la segunda dimensión.  

Sea por ejemplo un array[LB1..UB1, LB2..UB2] de enteros.

- **Fórmula de acceso column-major order**:  
  $dades[i,j] = a+D+(i-LB1)^*S+(j-LB2)^*E$  
  $S = (UB2-LB2+1)^*E$

- **Fórmula de acceso row-major order**:  
  $dades[i,j] = a+D+(j-LB2)^*S+(i-LB1)^*E$  
  $S = (UB1-LB1+1)^*E$

## Control de secuencia

Control del orden de ejecución de las operaciones de un programa.

### Tipos de control de secuencia

- Implícitos.
- Explícitos.

### Niveles

#### Estructuras utilizadas en expresiones

Dependen de la linealización.

- **Prefija**:
  - Ordinaria: $^*( +\ (a, b), -\ (c, a))$
  - Polaca: $^*+ab\ -\ ca$
  - Cambridge: $(^*\ (+\ a\ b) (-\ c\ a))$
- **Postfija**:
  - Ordinaria: $((a, b)\ +,\ (c, a)- )^*$
  - Polaca inversa $ab\ +\ ca\ -\ ^*$
- **Infija**: Se emplea en binario, con dos operandos y el símbolo de operación va entre los operandos.

#### Estructuras utilizadas a nivel de instrucción

#### Estructuras utilizadas entre subprogramas

- Por nombre: parámetro real.
- Por referencia: dirección del parámetro real.
- Por valor: valor del parámetro real.
- Por valor resulatdo: variable local que se copia al final.
- Por valor constante: constante local.
- Por resultado: variable local sin valor inicial.

## Gestión de memoria

### Elementos que requieren gestión de memoria

- Almacenamiento.
- Operaciones de reserva y liberación de memoria.

### Gestión de memoria del programador y del sistema

- Programador: visión precisa.
- Sistema: difícil determinación.

### Fases en la gestión de memoria

- Reserva inicial.
- Recuperación de memoria.
- Reutilización y compactación.

### Gestión estática de la memoria

- Reserva durante la traducción.
- Fija en el tiempo de ejecución (no necesita gestión de memoria).
- Etapas de recuperación y reutilización no necesarias.

### Gestión dinámica de la memoria

#### Gestión de memoria basada en pila

- Reserva inicial de espacio para una pila.
- Reserva, reutilización y compactación son problemes triviales de
gestión del _top_:
  - Reserva: avance del _top_.
  - Reutilización: retroceso del _top_.
  - Compactación: garantizada por la naturaleza de la reserva y la liberación.

#### Gestión de memoria basada en _heap_

- Bloque de memoria en el que se reservan y liberan trozos de forma relativamente desestructurada.
- Diversas formas de reservar, recuperar, compactar y reutilizar.

### Tipos de gestión del _heap_

#### Con todos los elementos de diversos tamaños

- _First-fit_: se reserva el primer bloque que cumple con el tamaño requerido. Muy rápido pero no muy eficiente.
- _Best-fit_: se reserva el bloque que mejor se ajusta al tamaño requerido. Más lento pero más eficiente.

#### Con todos los elementos de un mismo tamaño

- $k$ elemento de $n$ palabras
- Reserva y/o liberación:
  - <u>Retorno explícito</u>: programador o sistema identifican el espacio y el momento en el que se debe producir la liberación de memoria. Problemas:
    - Referencias colgadas: Se produce cuando se libera una estructura de datos antes de liberarse todos los enlaces o apuntadores que le accede.
    - Libreación de basura: Se produce cuando se liberan todos los enlaces a una estructura antes de ser destituida. La memoria ocupada no podrña ser accedida para una reutilización.
  - <u>Contador de referencias</u>:
    - Se emplean como alternativa a complemento de la liberación explícita de memoria paa evitar los problemas de referencias colgadas y liberación de basura.
    - Cada _heap_ tiene un contador de referencias que indica el número de referencias que apuntan a cada elemento del _heap_.
    - Si el contador de referencias es 0, el elemento se puede liberar.
  - <u>Garbage collector</u>:
    - Se basa en permitir la generación de basura evitando el riesgo de referencias colgadas.
    - La memoria se ira llenando hasta cierto punto, el cual, se iniciará un programa encargado de liberar la memoria que no se esté utilizando.
    - Fases:
      - Marcar los elementos activos y no activos:
        - Identificar elementos que son empleador por las estructuras de datos accesibles del programa (activos).
        - Un elemento está activo cuando hay un apuntados al elemento desde fuera del _heap_ u otro elemento activo.
        - Un marcaje es correcto cuando:
          1. Se puede acceder desde fuera del _heap_ a cualquier elemento activo.
          2. Se puede identificar a cualquier apuntador desde fuera
          3. Se pueden identificar los campos que contienen apuntadores a otros elementos
      - Recolección de los elemenos no activos: recorrido secuencial de los elementos marcados como no activos

___
[Download this file as PDF](/Files/PDF/Teoria.pdf)  
[Download this file as DOCX](/Files/DOCX/Teoria.docx)
