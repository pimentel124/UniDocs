---
title: Examen Junio 2022
description: Corrección del examen Base de Datos 1 Junio 2022
---

## Part 1 Teoría

## **Pregunta 1 (4 punts) Modelat Conceptual**

![Pregunta 1](/img/Junio2022_1%20-%20Pregunta%201.png)

![Respuesta Pregunta 1](/img/Modelo_conceptual.jpg)

## **Pregunta 2 (1 punt)**

#### Suposant que està en 1FN, normalitzeu la relació R (A, B, C, D, E, F) fins a FNBC, considerant que es donden le següents dependencies funcionals

<p style="text-align: center;font-size:18px">A, B &#10132; E;&emsp;B &#10132; C, D;&emsp;D &#10132; E, A;&emsp;E &#10132; F;</p>

#### Cal passar per totes les formes normals, explicant cada pas i els problemes que es resolen

## Pregunta 3 (1,5 punts) Traducció a relacional

#### Donat el següent model de dades, pas a pas explicant cada decissió, obtinguin el model relacional corresponent

![Pregunta 3](/img/Junio2022_1%20-%20Pregunta%203.png)

Despesa(#idDespesa, titol, justificacio, dataSolicitud, estat, desc, cost)  
MaterialInformatic (marca, #idDespesa)  
Publicacio (revista, idx_qualitat, #idDespesa)
Tipus (#idTipus, costMaxim)  
Personal (#DNI, nom, llinatges, telefon, categoriaProfessional)  
Equip (#idEquip, nomCurt, nomLlarg)  
Periode (dataInici, dataFi)  

Despesa_Tipus (#idDespesa, idTipus)  
Despesa_Equip (#idDespesa, idEquip)  
Despesa_Personal (#idDespesa, DNI)  
CEquip_Personal (idEquip, DNI)  
Periode_Equip_Personal (idEquip, DNI)  
<br>

Despesa_MaterialInformatic (#idDespesa, titol, justificacio, dataSolicitud, estat, desc, cost, marca, <u>idTipus</u>, <u>idEquip</u>)  
Despesa_Publicacio (#idDespesa, titol, justificacio, dataSolicitud, estat, desc, cost, revista, idx_qualitat, <u>idTipus</u>, <u>idEquip</u>)  
Despesa_Personal (<u>idDespesa</u>, <u>DNI</u>)  
Tipus (#idTipus, costMaxim)  
Personal(#DNI, nom, llinatges, telefon, categoriaProfessional)  
Equip (#idEquip, nomCurt, nomLlarg, <u>DNICap</u>)  
Periode_Personal_Equip(#idPeriode, dataInici, dataFi, <u>DNI</u>, <u>IdEquip</u>)  
<br>
S'ha generat una clase Despesa_Personal a partir de la seva relació de molts a molts.  
S'ha generat una classe associativa Periode_Personal_Equip a partir de l'assosciació més la realació de molts a molts entre la clase Personal i Equip.  
S'han fusionat les clases Despersa i Material Informatic i Despersa i Publicació a partir de l'herència M,XOR.

<div style="page-break-before: always"></div>

## Part 2 SQL

![Modelo SQL](/img/Junio2022_1%20-%20Pregunta%204.png)

La BD relacional corresponent té les següents taules:

- PIS (<u>idIpis</u>, m2, pis, porta, preuVenda, adr, poblacio, idPluri)  
- PLURIFAMILIAR (<u>idPluri</u>, nombreHabitatges, preuVenda, adr, poblacio)
- UNIFAMILIAR (<u>idUni</u>, plantes, preuVenda, adr, poblacio)
- OFERTA (<u>idOfer</u>, data, doblers, idImmoble, idCli, idVen)
- PERSONA (<u>idPer</u>, nomP, email)
- CLIENT (<u>idCli</u>, telf)
- VENEDOR (<u>idVen</u>, mobil, NIF)

## Pregunta 4 (1 punt)

#### Calcular el total de pisos que tenim en venda de cada un dels edificis plurifamliars que apareixen com a tal a qualsevol oferta del dia 01-02-2022. El resultat ha de mostrar l'identificador de l'edifici i el total de pisos que hi ha en venda ordenat ascendentment

<br>

```sql
SELECT PLURIFAMILIAR.idPluri, COUNT(PIS.idIpis) AS totalPisos
FROM PIS
JOIN PLURIFAMILIAR
    ON PIS.idPluri = PLURIFAMILIAR.idPluri
JOIN OFERTA
    ON OFERTA.idImmoble = PIS.idIpis
    AND OFERTA.data = '01-02-2022'
GROUP BY PLURIFAMILIAR.idPluri
ORDER BY totalPisos ASC;
```

## Pregunta 5 (1,5 punts)

#### De cada pis de més de 100 m2 que el venedor de nom Pere ha ofertat durant l'any 2022, mostrar el nom dels clients als que hi ha fet l'oferta. El resultar ha de mostrar el nom del client i l'identificador de cada un dels pisos, ordenat per nom de client

<br>

```sql
SELECT PERSONA.nomP, PIS.idIpis
FROM PIS
JOIN OFERTA ON PIS.idIpis = OFERTA.idImmoble 
    AND PIS.m2 > 100
    AND YEAR(OFERTA.data) = '2022'
JOIN PERSONA ON OFERTA.idCli = PERSONA.idPer
JOIN VENDEDOR ON OFERTA.idVen = VENDEDOR.idVen
    AND VENEDOR.idVen = (SELECT PERSONA.idPer from PERSONA WHERE PERSONA.nomP = 'Pere')
ORDER BY PERSONA.nomP;
```

## Pregunta 6 (0,5 punts)

#### Amb una sola sentència, mostrar quants de pisos tenim a Palma sense cap oferta

```sql
SELECT COUNT(IdPis) AS totalPisos
FROM PIS
LEFT JOIN OFERTA ON PIS.idIpis = OFERTA.idImmoble
    AND PIS.poblacio = 'Palma'
WHERE OFERTA.idOfer IS NULL;
```

## Pregunta 7 (0,5 punts)

#### Amb una sola sentència, modificar el nom, que ha de ser Pere Joan, del venedor de NIF 12345678K

```sql
UPDATE PERSONA
SET PERSONA.nomP = 'Pere Joan'
WHERE PERSONA.idPer IN (SELECT VENDEDOR.idVen FROM VENDEDOR WHERE VENDEDOR.NIF = '12345678K');
```
