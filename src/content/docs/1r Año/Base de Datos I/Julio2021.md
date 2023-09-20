---
title: Examen Julio 2021
description: Corrección del examen Base de Datos 1 Julio 2021
---

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
    FOREIGN KEY(codiBarri) REFERENCES barri(codiBarri));
```

---------------

### <ins>Pregunta 3</ins>

Mostrar, ordenats per data i matrícula, els cotxes que han aparcat el mateix dia a Palma i a Manacor. Cal llistar la data i la matrícula.

```sql
SELECT estacionament.data, estacionament.matricula FROM estacionament
JOIN barri 
    ON estacionament.codiBarri = barri.codiBarri 
    AND barri.codiCiutat = (SELECT codiCiutat FROM ciutat WHERE nomCiutat = 'Manacor') AS APARCAMENT_MANACOR
JOIN barri
    ON estacionament.codiBarri = barri.codiBarri
    AND barri.codiCiutat = (SELECT codiCiutat FROM ciutat WHERE nomCiutat = 'Palma')
    AS APARCAMENT_PALMA
WHERE estacionament.data = APARCAMENT_MANACOR.data AND estacionament.matricula = APARCAMENT_MANACOR.matricula AND estacionament.data = APARCAMENT_PALMA.data AND estacionament.matricula = APARCAMENT_PALMA.matricula
ORDER BY estacionament.data, estacionament.matricula;
```

### <ins>Pregunta 4</ins>

Mostrar les ciutats, ordenades per nom, on mai han aparcat els usuaris del cotxe de matrícula X.

```sql
SELECT ciutat.nomCiutat FROM ciutat
WHERE ciutat.codiCiutar NOT IN (
    SELECT estacionament.codiBarri FROM estacionament
    JOIN ciutat
        ON estacionament.codiBarri = ciutat.codiBarri
    WHERE estacionament.matricula = 'X'
)
ORDER BY ciutat.nomCiutat;
```

### <ins>Pregunta 5</ins>

Canviar el color dels cotxes fúcsia que durant el mes de juny de 2021 han estacionat alguna vegada a Manacor. Ara han de ser de color vermell.

```sql
UPDATE cotxe
SET cotxe.color = 'vermell'
WHERE cotxe.color = 'fucsia' AND cotxe.matricula 
    IN (SELECT DISTINCT matricula FROM estacionament
    JOIN barri
        ON estacionament.codiBarri = barri.codiBarri
        AND barri.codiCiutat = (SELECT codiCiutat FROM ciutat WHERE nomCiutat = 'Manacor')
        AS APARCAMENT_MANACOR
    WHERE estacionament.data BETWEEN '2020-06-01' AND '2020-06-30'
        AND estacionament.data = APARCAMENT_MANACOR.data
        AND estacionament.matricula = APARCAMENT_MANACOR.matricula);
```
