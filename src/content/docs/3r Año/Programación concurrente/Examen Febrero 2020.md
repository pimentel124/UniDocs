---
title: Examen Febrero 2020
description: Ejercicios Febrero 2020 programación concurrente
---

## Ejercici 1 (1 punt)

### Descriu breument les característiques d’un sistema de temps real i que és el Ravenscar Profile

Un sistema de temps real és un sistema reactiu que ha d'operar d'acord amb estrictes requeriments de temps de resposta. Aquest tipus de sistema ha de complir amb deadlines molt rígids i garantir que les tasques es compleixin dins dels límits de temps especificats. A més, un sistema de temps real pot ser encastat, utilitzant l'ordinador com un dels components del sistema.

El **Ravenscar Profile** és una especificació de construccions de concurrència per al desenvolupament de sistemes de temps real. Aquest perfil garanteix la portabilitat del software i hardware, permetent que l'execució sigui fixada i predictible. A més, facilita la verificació de programes mitjançant anàlisi estàtica i el nombre de tasques és conegut i fixe. El planificador del sistema d'execució utilitza el pragma FIFO_Within_Priorities, el que significa que les tasques amb la mateixa prioritat s'executen en ordre FIFO (First In First Out).

## Ejercici 2 (2 punts)

### Escriu un dels algorismes vists a classe per a la solució del problema de la regió crítica sense ús d’eines de sincronia. Explica’l i digués quin és principal inconvenient que tenen aquest tipus de solucions

Un dels algorismes clàssics per a la solució del problema de la regió crítica sense ús d'eines de sincronització és l'algorisme de Dekker. Aquest algorisme utilitza variables compartides i tècniques de programació estructurada per aconseguir l'exclusió mútua entre processos.

L'algorisme de Dekker es basa en l'ús de variables booleanes per indicar quin procés té el desig d'entrar a la regió crítica i en quin ordre es troben els processos quan volen entrar. Aquest algorisme utilitza tècniques de programació estructurada per coordinar l'entrada a la regió crítica sense l'ús de mecanismes de sincronització com semàfors o mutexos.

El principal inconvenient d'aquest tipus de solucions és la seva manca de fiabilitat en entorns reals de programació concurrent. Aquestes solucions poden ser propenses a problemes com interbloquejos, inanició (starvation) i condicions de carrera, ja que no ofereixen les garanties de sincronització que proporcionen les eines de sincronització del sistema operatiu o del llenguatge de programació.

**Algortime de Dekker:**

```pseudo

boolean wantp, wantq = false, false
integer turn = 1

```

```pseudo
process P {

    // non critical section

    wantp = true
    while wantq
        if turn == 2 then
            wantp = false
            await turn == 1
            wantp = true

    critical section

    turn = 2
    wantp = false
}
```

```pseudo
process Q {

    // non critical section

    wantq = true
    while wantp
        if turn == 1 then
            wantq = false
            await turn == 2
            wantq = true

    critical section

    turn = 1
    wantq = false
  
}
```

<br>
<!-- pagebreak -->

## Ejercici 3 (3 punts)

### Problema de les barreres per N processos usant el canals com a eines de sincronia

El problema de les barreres per N processos és un tema clau en la programació concurrent, ja que implica la coordinació de múltiples processos per aconseguir un punt de sincronització comú. A continuació, es presenten algunes solucions utilitzant canals com a eines de sincronització:

1. Barreres binàries:
   Quan dos processos A i B han de coordinar-se per arribar a un punt de sincronització, es pot utilitzar un parell de canals per aconseguir aquest objectiu. Cada procés envia un missatge pel canal corresponent quan arriba al punt i espera a rebre un missatge de l'altre procés abans de continuar. Aquest enfocament asimètric pot generar un bloqueig si els dos processos intenten enviar missatges simultàniament .

2. Barreres generals:
   Quan N processos han de coordinar-se per arribar a un punt de sincronització, es pot utilitzar un parell de canals de tipus enter (per exemple, "arribada" i "sortida") juntament amb una variable que compti el nombre de processos a sincronitzar. El primer canal compta els processos que han arribat al punt, mentre que l'altre canal compta els processos que encara han de arribar. Aquest enfocament permet la coordinació eficient de múltiples processos mitjançant l'ús de canals com a eines de sincronització .

```go

type Barrier struct {
    arrival chan int
    departure chan int
    n int
}

func NewBarrier(value int) *Barrier {
    b := new(Barrier)
    b.arrival = make(chan int, 1)
    b.departure = make(chan int, 1)
    b.n = value
    b.arrival <- value
    return b
}

func (b *Barrier) Barrier() {

    var v int
    // ARRIBAR

    // Espera arrival amb missatge
    v <- b.arrival

    if v > 1 { // Queden processos per arribar
        v--
        b.arrival <- v // Un menys per arribar
    } else {
        // Tots els processos han arribat
        b.departure <- b.n
    }

    //SORTIR

    // Espera departure amb missatge
    v <- b.departure
    if v > 1 { // Queden processos per sortir
        v--
        b.departure <- v // Un menys per sortir
    } else {
        // Tots els processos han sortit
        b.arrival <- b.n
    }
}
```

<br>
<!-- pagebreak -->
