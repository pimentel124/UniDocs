---
title: Apuntes
description: Recopilación de ejercicios y apuntes de la asignatura de Teoría de la Computación
---

El llenguatge ${L}_{1}={w\in\Sigma^{*}\mid w=w^{t}}$ és el llenguatge de les cadenes que són palíndroms sobre l'alfabet $\Sigma=\{a,b,c\}$.  

Aquí teniu una CFG que genera aquest llenguatge:  

$S \rightarrow aSb \mid bSa \mid cSc \mid \lambda$  

Aquesta CFG utilitza una regla recursiva per generar les cadenes palíndromes.  
La regla $S \rightarrow \lambda$ permet generar la cadena buida, que és un palíndrom.  
Les regles $S \rightarrow aSb$ i $S \rightarrow bSa$ permeten afegir dos caràcters a la cadena.  
Les regles $S \rightarrow cSc$ permeten afegegir dos caràcters iguals a la cadena.  

Així, la CFG generarà les cadenes de l'alfabet $\Sigma$ que formen paraules de ${L}_{1}$.

#### Exercici 1.6 Determinau el llenguatge generat per la gramàtica

$\begin{array}{l}{{S\to A b c\mid a b C}}\\ {{A\to a}}\\ {{C\to c}}\end{array}$

És aquesta gramàtica ambigua? En cas que ho sigui, cercau una gramàtica
inambigua que generi el mateix llenguatge.

Aquesta gramàtica genera el següent llenguatge:

$L={abc, abc}$

Sí, aquesta gramàtica és ambigua, ja que hi ha més d'una forma de generar una paraula en el llenguatge. Per exemple, la paraula "abc" es pot generar a través de la producció $S\to A b c$ o a través de la producció $S\to a b C$.

Per fer la gramàtica inambigua, es pot utilitzar una gramàtica factorial:

$\begin{array}{l}{{S\to A b c}}\ {{A\to a}}\ {{C\to c}}\end{array}$

Aquesta gramàtica genera el mateix llenguatge que la gramàtica original, però ara és inambigua, ja que només hi ha una forma de generar una paraula en el llenguatge.

#### Exercici 1.7 Considerau la gramàtica $G$ donada per les produccions següents

$S\,\longrightarrow\,a S\,\mid\,a S b\,\mid\,\lambda$

Demostrau que $\mathcal{L}(G)=\{w\in\{a,b\}^{*}\mid w=a^{i}b^{j}{\mathrm{~amb~}}i{\mathrm{-j~parell~no~negatiu}}\}$

Podem demostrar que $\mathcal{L}(G)=\{w\in\{a,b\}^{*}\mid w=a^{i}b^{j}{\mathrm{~amb~}}i{\mathrm{-j~parell~no~negatiu}}\}$ mitjançant una construcció inductiva.

Base de l'inducció:

Si $i = 0$, llavors $w = b^{j}$, on $j$ és un nombre no negatiu, i això està en $\mathcal{L}(G)$, ja que $S \longrightarrow \lambda$ és una producció en $G$.
Passos inductius:

Suposeu que per a tot $k < i$, on $i$ és un nombre parell no negatiu, tenim que $a^{k}b^{j} \in \mathcal{L}(G)$ per a tot $j$ amb $k - j$ parell no negatiu.  
Llavors, per a $i$, podem demostrar que $a^{i}b^{j} \in \mathcal{L}(G)$ per a tot $j$ amb $i - j$ parell no negatiu, ja que tenim la producció $S \longrightarrow a S b$ en $G$.  
Això demostra que $\mathcal{L}(G)=\{w\in\{a,b\}^{*}\mid w=a^{i}b^{j}{\mathrm{~amb~}}i{\mathrm{-j~parell~no~negatiu}}\}$.

# Taller

Per resoldre aquesta exercici de gramàtiques, cal seguir els següents passos:

1. Trobar la gramàtica per al llenguatge $L_1$

El llenguatge $L_1$ és el conjunt de totes les cadenes que comencen amb una o més $a$ seguides de $n$ parelles $ab$. Això significa que per a qualsevol $n\geq 1$, el llenguatge $L_1$ conté les següents paraules:

$$a(a b)^{n}$$

Per a generar aquestes paraules, podem definir una gramàtica $G_1$ amb el següent conjunt de regles:

$$S\rightarrow aA$$

$$A\rightarrow aB$$

$$B\rightarrow abB\ |\ \varepsilon$$

Aquesta gramàtica comença amb l'axioma $S$, que es pot transformar en una $a$ i una variable $A$. La variable $A$ també es pot transformar en una $a$ i la variable $B$, que a la seva vegada pot generar parelles $ab$ de manera recursiva fins que s'arriba a l'èpsilon. Així, la gramàtica $G_1$ genera exactament el llenguatge $L_1$.

2. Trobar la gramàtica per al llenguatge $L_2$

El llenguatge $L_2$ és el conjunt de totes les cadenes que comencen amb una o més $a$, seguides de zero o més $c$, seguides de zero o més $b$, on el nombre de $a$ i el nombre de $b$ són iguals. Això significa que per a qualsevol $n\geq 0$ i $m\geq 0$, el llenguatge $L_2$ conté les següents paraules:

$$a^{n}c^{m}b^{n+m}$$

Per a generar aquestes paraules, podem definir una gramàtica $G_2$ amb el següent conjunt de regles:

$$S\rightarrow aSb\ |\ T$$

$$T\rightarrow \varepsilon\ |\ cT$$

Aquesta gramàtica comença amb l'axioma $S$, que pot generar parelles $ab$ de manera recursiva fins que s'arriba a la mateixa quantitat de $a$ i $b$, o bé es transforma en la variable $T$. La variable $T$ pot generar qualsevol nombre de $c$, seguit de l'èpsilon. Així, la gramàtica $G_2$ genera exactament el llenguatge $L_2$.

3. Trobar la gramàtica per al llenguatge $L_3$

El llenguatge $L_3$ és el conjunt de totes les cadenes que comencen amb una o més $a$, seguides de zero o més $c$, seguides de zero o més $b$. Això significa que per a qualsevol $i\geq 1$, $j\geq 0$ i $k\geq 0$, el llenguatge $L_3$ conté les següents paraules:

$$a^{i}c^{j}b^{k}$$

Per a generar aquestes paraules, podem definir una gramàtica $G_3$ amb el següent conjunt de regles:

$$S\rightarrow aSb\ |\ T$$

$$T\rightarrow aT\ |\ cT\ |\ bT\ |\ \varepsilon$$

Aquesta gramàtica és similar a la gramàtica $G_2$, però en aquest cas la variable $T$ pot generar qualsevol combinació de $a$, $c$ i $b$, fins que s'arriba a

----------------------

Per a generar les paraules del llenguatge $L_2$, podem seguir aquests passos:

1. Començar amb $n$ $a$'s.
2. Afegir $m$ $c$'s.
3. Afegir $n+m$ $b$'s.

Podem usar aquesta idea per a construir una gramàtica que generi el llenguatge $L_2$. Definim l'axioma $S$ i les següents regles:

$$S\rightarrow AB$$
$$A\rightarrow aA\ |\ \varepsilon$$
$$B\rightarrow cBb\ |\ \varepsilon$$

La regla inicial $S\rightarrow AB$ permet que la gramàtica generi una cadena amb una part d'$A$ i una part de $B$. La variable $A$ genera zero o més $a$'s, i la variable $B$ genera zero o més $c$'s seguits d'un nombre igual de $b$'s. Això assegura que la quantitat d'$a$'s i $b$'s sigui la mateixa.

Per exemple, la paraula $a^2c^1b^3$ es pot generar amb les següents derivacions:

$$S\Rightarrow AB\Rightarrow aAcbB\Rightarrow aaAcbbB\Rightarrow aa\ c\ bbb$$

D'aquesta manera, la gramàtica generada és capaç de generar totes les paraules del llenguatge $L_2$.
