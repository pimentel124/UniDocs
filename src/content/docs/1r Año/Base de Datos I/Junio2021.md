---
title: Examen Junio 2021
description: Corrección del examen Base de Datos 1 Junio 2021
---

## **Bloc 2** Traducció  a relacional

### Pregunta 2 (1,5 punts)

Donat el següent model de dades, pas a pas, explicant cada decisió, obtinguin el model relacional corresponent (el resultat, evidentment, ha d’estar normalitzat).

![Modelo relacional Junio2021](/img/Junio2021.png)

#### Part 1

Persona (idPersona, nomP)  
Usuari (idUsuari, correuE)  
Operari (idOperari, dataContacte, nombreContacte)  
Brigada (idBrigada, data)  
Incidencia (idIncidencia, data, poble, estat, barriPoble)  
QTT (idQTT, quantitat)  
Material (idMaterial, codiMat, unitatMesura)  

#### Part 2

R_Incidencia_Usuari(idIncidencia, idUsuari)  
R_Incidencia_Brigada(idIncidencia, idBrigada)  
**R_Incidencia_Material(idIncidencia, codiMat, quantitat)**  
R_Brigada_OperariResponsable(idBrigada, idOperari)  
**R_Brigada_OperariAssignacio(idBrigada, idOperari)**  
R_Usuari_Persona(idUsuari, idPersona)
R_Operari_Persona(idOperari, idPersona)  

### Part 3

Incidencia(#idIncidencia, data, poble, estat, barriPoble, &idUsuari)  
R_Incidencia_Material(#idIncidencia, #codiMat)  
QTT(quantitat, &idIncidencia, &codiMat)  
Brigada(#idBrigada, data, &idIncidencia, &idOperariResponsable)
R_Brigada_OperariAssignacio(&idBrigada, &idOperariassignacio)
Operari(#idOperari, dataContacte, nombreContacte, &idPersona)
Usuari(#idUsuari, correuE, &idPersona)
Persona(#idPersona, nomP)  

## **Bloc 3**

Considerau la base de dades que correspon a una app d’aparcament mòbil personal que permet als seus usuaris gestionar estacionaments sense haver de passar per un parquímetre, emprar monedes ni tiquets.

Aquesta base de dades s’ha generat a partir del codi DDL que es mostra a continuació:

```sql
CREATE DATABASE parquing;

CREATE TABLE cotxe(
    matricula CHAR(7) PRIMARY KEY,
    color CHAR(25) NOT NULL);

CREATE TABLE usuari(
    NIF CHAR(9)PRIMARY KEY,
    telefon CHAR(9),
    email CHAR(25));

CREATE TABLE cotxe_usuari(
    NIF CHAR(9) NOT NULL,
    matricula CHAR(7) NOT NULL,
    PRIMARY KEY(NIF, matricula),
    FOREIGN KEY(NIF) REFERENCES usuari(NIF),
    FOREIGN KEY(matricula) REFERENCES cotxe(matricula));

CREATE TABLE ciutat(
    codiCiutat INTEGER PRIMARY KEY,
    nomCiutat CHAR(25) NOT NULL);

CREATE TABLE zona(
    codiZona INTEGER PRIMARY KEY,
    nomZona CHAR(25) NOT NULL);

CREATE TABLE barri(
    codiBarri INTEGER primary key,
    nomBarri CHAR(25) NOT NULL,
    codiCiutat INTEGER NOT NULL,
    codiZona INTEGER NOT NULL,
    FOREIGN KEY(codiCiutat) REFERENCES ciutat(codiCiutat),
    FOREIGN KEY(codiZona) REFERENCES zona(codiZona));

CREATE TABLE estacionament(
    codiEst INTEGER PRIMARY KEY,
    DATA DATE NOT NULL,
    horaInici TIME NOT NULL,
    horaFi TIME NOT NULL,
    quantitatPagada INTEGER NOT NULL,
    matricula CHAR(7) NOT NULL,
    NIF CHAR(9) NOT NULL,
    codiBarri INTEGER NOT NULL,
    FOREIGN KEY(matricula) REFERENCES cotxe(matricula),
    FOREIGN KEY(NIF) REFERENCES usuari(NIF),
    FOREIGN KEY(codiBarri) REFERENCES barri(codiBarri))
```

----------------

### <ins>Pregunta 3</ins>

Escriviu la sentència SQL que mostri quants de cotxes de cada color han estacionat al barri de nom “Centre Ciutat” a Manacor durant la primera quinzena del mes de juny de 2021. Si un mateix cotxe ha estacionat més d’una vegada s’ha de comptar com a un sol cotxe.

Resposta:

```sql
SELECT color, COUNT(cotxe.matrucula) FROM cotxe
JOIN
    (SELECT DISTINCT matricula FROM estacionament
        JOIN barri
        ON estacionament.codiBarri = barri.codiBarri
        AND barri.nomBarri = 'Centre Ciutat'
        AND barri.codiCiutat = (SELECT codiCiutat FROM ciutat WHERE nomCiutat = 'Manacor')
        AND estacionament.DATA BETWEEN '2021-06-01' AND '2021-06-15')
    AS COTXES_ESTACIONATS
ON cotxe.matricula = COTXES_ESTACIONATS.matricula
GROUP BY color;
```

### <ins>Pregunta 4</ins>

Escriviu la sentència SQL que mostri l’email i el NIF dels usuaris que no tenen cap estacionament en la zona X (és el codi de la zona) de Palma. Ordenar el resultat segons l’email.

```sql
SELECT usuari.email, usuari.NIF FROM usuari
LEFT JOIN(
    SELECT NIF, codiEst FROM estacionament
        JOIN barri
        ON barri.codiBarri = estacionament.codiBarri
        AND barri.codiZona = 'X'
        AND barri.codiCiutat = (SELECT codiCiutat FROM ciutat WHERE nomCiutat = 'Palma'))
        AS USUARIS_ESTACIONATS
    ON usuari.NIF = USUARIS_ESTACIONATS.NIF
WHERE USUARIS_ESTACIONATS.NIF IS NULL
ORDER BY usuari.email;
```

### <ins>Pregunta 5</ins>

#### **5.1**

Genereu el codi per modificar el color de tots els cotxes grocs (ara han de ser fúcsia) que no tenen cap estacionament.

```sql
UPDATE cotxe
SET cotxe.color = 'fucsia'
WHERE cotxe.color = 'groc' AND cotxe.matricula 
    NOT IN (SELECT DISTINCT matricula FROM estacionament);
```

#### **5.2**

Explicau què passaria en intentar fer la següent operació d’actualització de la base de dades justificant formalment la vostra resposta. Afecta a alguna regla d’integritat?:

```sql
INSERT INTO usuari VALUES ('111111111', 'biel.fontanet@uib.es');
```

La clave primaria estaría y falta una columna a la hora de insertar.

#### **5.3**

Explicau què passaria en intentar fer la següent operació d’actualització de la base de dades justificant formalment la vostra resposta. Afecta a alguna regla d’integritat?:

```sql
DELETE FROM cotxe WHERE color = 'groc';
```
La operació d'actualització que intenta fer és una eliminació de les files de la taula "cotxe" on el color és 'groc'. A priori, si no hi ha cap regla d'integritat definida que estigui relacionada amb la columna "color" de la taula "cotxe", aquesta operació no hauria de tenir cap impacte en les regles d'integritat.

No obstant això, cal tenir en compte que pot haver-hi altres taules relacionades amb la taula "cotxe" mitjançant claus externes. Si hi ha claus externes amb restriccions de clau estrangera (foreign key constraints) definides entre "cotxe" i altres taules, l'eliminació de files de la taula "cotxe" podria afectar a aquestes regles d'integritat.

Per exemple, si hi ha una taula que té una clau estrangera que fa referència a la columna "matricula" de la taula "cotxe" i té una restricció de clau estrangera ON DELETE CASCADE, aleshores l'eliminació de les files de "cotxe" amb color 'groc' també implicarà l'eliminació automàtica de les files corresponents en la taula relacionada.

En resum, si no hi ha cap regla d'integritat definida relacionada amb la columna "color" de la taula "cotxe", l'operació d'eliminació no afectarà les regles d'integritat. No obstant això, si hi ha altres taules relacionades amb la taula "cotxe" mitjançant claus externes, cal considerar si hi ha restriccions de clau estrangera que puguin ser afectades per l'eliminació de files.
