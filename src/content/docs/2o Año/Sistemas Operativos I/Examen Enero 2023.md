---
title: Examen Enero 2023
description: Examen de Sistemas Operativos Enero de 2023, Modelo 1
---

# Examen Enero 2023

#### La instrucción signal(SIGINT, ctrlc)

a) Al ser ejecutada lanza el manejador *ctrlc* pasándole la señal SIGINT como parámetro.  
b) Interrumpe el proceso *ctrlc* cuando recibe una señal externa.  
<u>c) Indica que hay que ejecutar el manejador *ctrlc* cuando se reciba la señal SIGINT.</u>  
d) Produce la señal SIGINT y se la pasa por función a *ctrlc*.  

#### En la práctica de hilos, siendo NUM_THREADS = 10, cuantos hilos pueden permanecer bloqueados a la vez en el mutex?

a) 10  
<u>b) 9</u>  
c) 1  
d) 0  

#### ¿Cuál es la técnica más sencilla y breve para implementar productor-consumidor con *buffer finito*?

a) Usando semáforos.  
<u>b) Canal de comunicación asíncrona.</u>  
c) Dos semáforos contadores.  
d) Memoria compartida.  

#### ¿De qué depende le tamaño de los arrays de números y selección en el algoritmo de la panadería?

a) Del tiempo de ejecución de los procesos.  
b) Del número máximo de procesos concurrentes y/o activos en el sistema.  
<u>c) Del número de procesos que pueden acceder a la sección crítica.</u>  
d) Del número de accesos toales a la sección crítica.  

#### Indica cuál de las siguientes afirmaciones es falsa

a) En un sistema operativo apropiativo, el uso del temporizador evita que un proceso monopolice el uso del procesador.  
<u>b) El planificador o *scheduler* es quien toma la decisión de cuál de los procesos bloqueados pasa a estado listo.</u>  
c) El activador o *dispatcher* es la parte del sistema operativa que intercambia el procesador de un proceso a otro.  
d) La traza es el listado de la secuencia de instrucciones que se ejecutan para un proceso.  

<div style="page-break-before: always"></div>

#### En el problema de los filósofos, haciendo que uno o varios filósofos sean zurdos y los demás diestros, ¿cuál de las siguientes condiciones necesarias para que se produzcan interbloqueos no se cumple?

a) Exclusión mutua.  
b) Retención y espera.  
c) No apropiación.  
<u>d) Espera circular.</u>  

#### *test&set* (TAS) o *compare&swap* (CAS)

<u>a) Son instrucciones que leen y modifican el valor de uno o varios registros sin ser interrumpidas.</u>  
b) Evitan la espera activa.  
c) Aseguran la espera limitada.  
d) No hacen uso de barreras de memoria.  

#### El intervalo de tiempo entre que se lanza un proceso hasta el momento que se completa su ejecución se llama

a) Tiempo de respuesta.  
<u>b) Timpo de estancia (*turnaround time*)</u>.  
c) Tiempo de espera.  
d) Rendimiento (*throughput*).  

#### Un semáforo contador se inicializa a 10. Se realizan 6 intrucciones *Wait* i 4 operaciones *Signal*. ¿Cuál es el valor final del semáforo?

a) 0  
<u>b) 8</u>  
c) 10  
d) 12  

#### Cuando múltiples procesos o hilos leen y escriben datos de manera que el resultado final depende del orden de ejecución de las instrucciones en los procesos se denomina

a) Inanición (*Starvation*).  
b) Bloqueo activo (*Livelock*).  
c) Interbloqueo (*Deadlock*).  
<u>d) Condición de carrera (*race condtion*).</u>  

<div style='page-break-after: always;'></div>

#### Tras la ejecución del siguiente programa, que utiliza las estructuras de datos de nuestra pila dinámica genérica y las funciones implementadas en my_lib.c, ¿qué se habrá escrito en el fichero "mipila"?

```c
#include "my_lib.h"
int main(){
    struct my_stack *s;
    s = my_stack_init(sizef(int));
    for (int i = 0; i < 3; i++){
        my_stack_push(s, &datos[i]);
    }
    my_stack_write(s, "mipila");
}
```

a) 321  
b) 123  
c) 1123  
<u>d) 4123</u>  

#### Indica cuál de las siguientes afirmaciones es falsa

a) Lleva menos tempo crear un nuevo hilo en un proceso existente que crear un proceso totalmente nuevo.  
<u>b) Una interrupción siempre implica un cambio de proceso.</u>  
c) Si se expulsa un proceso, también se expulsan sus hilos ya que comparten el mismo espacio de direcciones.  
d) Todos los hilos de un proceso comparten los recursos de ese proceso y tienen acceso a las mismas variables globales.  

#### Si lanzamos nuestro mini shell y ejecutamos la siguiente secuencia. Indica cuál seria el contenido de jobs_list[1].status y jobs_list[1].cmd en cuanto ejecutamos la misma instrucción

```bash
$ ./mi_sleep 80
  ^Z
$ bg 1
```

a) E&emsp;    *./mi_sleep 80*  
b) D&emsp;    *./mi_sleep 80*  
<u>c) E&emsp;    *./mi_sleep 80 &*</u>  
d) D&emsp;    *./mi_sleep 80 &*  

#### Indica cuál de las siguientes afirmaciones es falsa

<u>a) La multiprogramación es la técnica mediante la cual se pueden ejecutar varios programas en paralelos.</u>  
b) El multihilo es la capacidad del sistema operativo de dar soporte a múltiples hilos de ejecución simultáneos en un solo proceso.  
c) Los sistemas multiusuario normalmente son sistemas de tiempo completo.  
d) El multiproceso requiere de mútiples procesadores.  

#### En la instrucción que sigue inmediatamente a un exec...()

a) No se ejecuta nunca.  
b) Se ejecuta dos veces.  
c) Se ejecuta siempre una vez.  
<u>d) Sólo se ejecuta si hubo error.</u>  

#### Indica cuál de las siguientes definiciones no se corresponden con el concepto de proceso

a) Un progrma en ejecución.  
b) Una instancia de un programa en ejecución.  
c) Entidad que se puede asignar o ejecutar en un procesador.  
<u>d) Unidad menos de expedición a la que el procesador puede asignar tiempo.</u>  

#### Los hilos creados en la práctica con la llamada al sistema pthread_create() son

a) Hilos a nivel de usuario (ULT).  
<u>b) Hilos nativos (KLT).</u>  
c) Hilos ligeros.  
d) Ninguno de los anteriores.  

#### Indica cual de las siguientes afirmaciones es falsa

<u>a) La exclusión mutua es un problema básico y fundamental de sicronización entre procesos sin memoria compartida.</u>  
b) La exclusión mutua asegura el accdeso ordenado a los recursos para impedir errores e incosnsistencias.  
c) La intercalación de instrucciones de una sección crítica provoca condiciones de carrara que pueden generar resultados erróneos dependiendo de la secuencia de ejecución.  
d) Los 3 requisitos para la exclusión mutua son: asegurar la exclusión mutua, progreso y espera limitada.  

#### Indica qué afirmacióom relacionada con monitores es falsa

a) El mutex es liberado cuando el proceso se bloquea en una variable de condición para que pueda entrar otro proceso.  
b) El proceso que se despierta en la variable de condicón compite en la entrada con los demás procesos en la cola del mutex.  
<u>c) Las variables de condición se pueden utilizar para almacenar y leer valores cualesquiera.</u>  
d) Las variables de condición tienen asociada una cola de los procesos bloqueados en ellas.  

#### ¿Cuál de las siguientes opciones no puede ser una raón para que un proceso abandone el estado "bloqueado"?

a) Recepción de mensaje.  
b) Finalización de un hijo.  
<u>c) Finalización del cuanto de procesador.</u>  
d) Finalización de E/S.  
