---
title: Examen BBDD2 2023 Gener
description: Solución examen BBDD2 2023 Gener
---

# Part 1

La Llar del Jubilat és una associació que es dedica a organitzar activitats d’oci per a persones jubilades. Aquestes activitats poden ser loteries, cursos de ball o conferències, entre moltes altres. Aquestes activitats poden tenir un cost i es poden dur a terme de manera periòdica o esporàdica. Per aquest motiu, han decidit crear una aplicació mòbil per poder consultar, inscriure’s i fer algunes altres accions. Naturalment, necessita d’una base de dades remota, que cal dissenyar, com a passa prèvia a desenvolupar l’aplicació.

Les dades que estan contingudes a la base de dades són, bàsicament:

- Les persones que integren l’associació poden ser sòcies o no sòcies. Entre les primeres, hi pot haver persones que tenen credencials d’usuari (usuari, password, període de vigència, que els permet accedir a algunes funcionalitats especials de l’aplicació).
- Les persones que són sòcies, cada any, han de fer el pagament de la quota anual, dintre d’uns terminis determinats (data inici, data final, data de baixa). És important tenir un històric dels pagaments que s’han fet de cada un dels anys. Així mateix, de cada soci s’ha de saber la data del pagament, a fi de poder descarregar una llista de quotes pendents de pagament i fer-ne la reclamació corresponent. Encara que aquestes reclamacions es fan per carta (en paper), s’ha de tenir una constància informàtica de la generació i recepció de la carta. D’aquesta manera, les quotes s’han de pagar entre les dates d’inici i final. Si no s’ha pagat, es genera la carta de reclamació i, en cas de no pagar abans de la data de baixa, llavors el soci perd la condició de soci durant l’any en curs. La condició de soci la podria recuperar a l’any següent. A aquests casos no s’ha de perdre el seu històric ni les dades pròpies dels socis. Si una persona deixe de pagar durant tres anys seguits, llavors sí, es dona de baixa de soci i s’esborren les seves dades, les pròpies i les associades amb ella.
- La Llar del Jubilat està dirigida i coordinada per una junta gestora, que està integrada per persones sòcies al corrent de les quotes. S’ha de tenir informació de la composició de la junta actual i de totes les anteriors (si una persona va formar part de la junta cal conservar-ne la seva informació malgrat ja no formi part de l’associació), els càrrecs (president, vicepresident, tresorer, secretari, vocal) i la data d’inici i final del càrrec.
- Les activitats poden ser gratuïtes o de pagament. En aquest cas, les persones sòcies tenen un preu especial i preferència d’inscripció. També poden ser activitats que es duen a terme de manera periòdica (com el “bingo” diari, el curs de ball dels dijous o els bunyols del vespre de Les Verges, per exemple) o esporàdiques (com alguna conferència o un curs de ioga, per exemple).
- Algunes activitats, per motius d’aforament, necessiten d’un procés d’inscripció i acceptació. En el cas de les activitats amb aforament, en obrir el procés d’inscripció, totes les persones interessades es poden apuntar, de manera remota o presencial. Una vegada es tanca el període d’inscripció es genera una llista d’inscripcions (ordenada per data i hora), i es comença a fer-ne les acceptacions. Per fer les acceptacions es té en compte la data i hora d’arribada i la condició de persona sòcia. En ocasions es boten aquestes acceptacions i l’assignació es fa “a mà” per preferències de la junta. Sigui com sigui, les persones no acceptades quedaran en coa per si hi ha alguna renúncia o per a futures repeticions de l’activitat. En tot cas es conservaran 5 anys per a processos estadístics.
- Les activitats han de tenir una persona encarregada de la monitorització: professor/a de ball, DJ, la persona que “canta” el bingo, etc. S’han de tenir controlades aquestes persones, que poden ser membres de l’associació o no, de fet, no cal que pertanyin a la “tercera edat”.

## Pregunta 1

##### Faci el disseny de la pase de dades, notació MER-UML, que permet mantenir les dades anteriors (4 punts)

## Pregunta 2

##### Expliqui els conceptes de vista, vista materialitzada i vista indexada, amb les diferències entre aquests dos tipus de vistes (1 punt)

**- Vista (View):**

Una vista és una consulta predefinida o una representació virtual d'una o més taules en una base de dades.
S'utilitza per simplificar consultes complexes mitjançant la creació d'una vista que contingui les dades necessàries, evitant que l'usuari hagi de conèixer la complexitat de les taules subjacents.
No emmagatzema les dades físicament; en canvi, ofereix una visualització temporal de les dades segons la seva definició.

**- Vista Materialitzada (Materialized View):**

Una vista materialitzada és una taula física que conté els resultats d'una consulta.
Les dades d'una vista materialitzada es mantenen actualitzades periòdicament mitjançant actualitzacions automàtiques o manualment segons la necessitat.
Ofereix un rendiment més ràpid en les consultes que impliquen operacions complexes, ja que les dades ja estan calculades i emmagatzemades.
Pel contrari, les vistes estàndard mostren les dades en temps real cada vegada que es consulta, el que pot afectar el rendiment.

**- Vista Indexada (Indexed View):**

Una vista indexada és una vista materialitzada que té un índex associat, el que millora encara més el rendiment.
Aquest índex accelera l'accés a les dades de la vista materialitzada, similar als índexos d'una taula.
Les vistes indexades es beneficien de les avantatges de les vistes materialitzades, com la reducció de temps d'execució de consultes, però amb una millora addicional en el rendiment gràcies a l'ús d'índexos.

**- Diferències:**

La principal diferència recau en la presència d'un índex associat. Les vistes indexades són una subcategoria de les vistes materialitzades que inclouen la creació d'índexos per optimitzar el rendiment de les consultes.

Mentre que totes les vistes indexades són materialitzades, no totes les vistes materialitzades tenen índexos associats.

Les vistes indexades prioritzen el rendiment a través dels índexos, mentre que les vistes materialitzades en general emmagatzemen les dades sense una prioritat particular en el rendiment de les consultes.

## Pregunta 3

##### A una BD que compte, com a mínim, les taules que apareixen a la sentencia, executem

```sql
EXPLAIN SELECT p1.apellido1, COUNT(p1.id) FROM
persones AS p1 JOIN llistacp
ON p1.apellido1=p1.apellido2 AND p1.CP=llistacp.CP
WHERE llistacp.poblacio='Palma'
GROUP BY p1.apellido1
ORDER BY p1.apellido1
```

| id | select_type | table    | partitions | type | possible_keys  | key  | key_len | ref         | rows | Extra                                              |
| -- | ----------- | -------- | ---------- | ---- | -------------- | ---- | ------- | ----------- | ---- | -------------------------------------------------- |
| 1  | SIMPLE      | llistacp | NULL       | ALL  | PRIMARY        | NULL | NULL    | NULL        | 124  | Using where;<br>Using temporary;<br>Using filesort |
| 1  | SIMPLE      | p1       | NULL       | ref  | CP,idApellido1 | CP   | 16      | llistacp.CP | 23   | Using where                                        |

**Expliqueu què ens diu aquest resultat. Es pot millorar la consulta proposada, des del punt de vista d’eficiència?**

L'explicació del pla d'execució (EXPLAIN) proporciona informació sobre com la consulta serà processada pel sistema de gestió de bases de dades (SGBD). Aquí està la interpretació de cada fila:

**Primera fila (llistacp):**

- select_type: SIMPLE indica una consulta simple.
- table: llistacp és la primera taula a la sentència.
partitions: NULL indica que no s'utilitzen particions.
- type: ALL indica que es realitzarà una recerca completa a la taula.
- possible_keys: PRIMARY és la clau principal de la taula llistacp.
- key: NULL indica que no s'utilitza cap índex específic.
- key_len: NULL indica que no s'utilitza cap longitud d'índex específica.
- ref: NULL indica que no hi ha referències de claus.
- rows: 124 indica el nombre estimat de files que caldrà revisar.
- Extra: Using where; Using temporary; Using filesort indica que s'està utilitzant una condició de WHERE, una taula temporal i una ordenació de fitxers per processar aquesta part de la consulta.

**Segona fila (p1):**

- select_type: SIMPLE indica una consulta simple.
- table: p1 és la segona taula a la sentència.
- partitions: NULL indica que no s'utilitzen particions.
- type: ref indica una cerca utilitzant un índex.
- possible_keys: CP, idApellido1 són les claus possibles per a la taula p1.
- key: CP indica que s'està utilitzant la clau d'índex CP.
- key_len: 16 indica la longitud de la clau utilitzada.
- ref: llistacp.CP indica la clau forastera que s'utilitza.
- rows: 23 indica el nombre estimat de files que caldrà revisar.
- Extra: Using where indica que s'està utilitzant una condició de WHERE.

**Comentaris i optimització:**
La taula llistacp fa una recerca completa (ALL), la qual cosa pot ser ineficient si té moltes files. Podria ser millor utilitzar un índex apropiat per reduir el nombre de files revisades.

S'està fent una comparació entre els camps p1.apellido1 i p1.apellido2 a la clàusula JOIN. Aquesta comparació pot ser innecessària i afectar el rendiment. S'hauria de revisar si aquesta condició és realment necessària per la lògica de la consulta.

L'ús de GROUP BY p1.apellido1 i ORDER BY p1.apellido1 té sentit si es vol comptar les persones per apellido1, però s'hauria de confirmar que aquesta és la intenció de la consulta.

En resum, es podrien considerar les següents millores:

- Afegir un índex a la taula llistacp en el camp CP per millorar l'eficiència de la recerca.
- Revisar la condició de comparació a la clàusula JOIN per assegurar-se que és necessària.
- Confirmar si l'ús de GROUP BY i ORDER BY és necessari segons la intenció de la consulta.

# Part 2

Un diari esportiu disposa d’una secció, a la seva web, on es mostren els resultats dels partits de la jornada. Al mateix temps, es disposa d’una altra secció on es mostra la classificació provisional, d’acord als resultats de la jornada, siguin o no definitius. La base de dades està descrita a continuació:

```sql
CREATE TABLE equip (
    id CHAR(3) PRIMARY KEY,
    nom CHAR(30),
    jug INT DEFAULT 0,
    gua INT DEFAULT 0,
    emp INT DEFAULT 0,
    per INT DEFAULT 0
);
```

Els atributs **jug**, **gua**, **emp**, **per** contenen els acumulats de partits jugats, guanyats, empatats o perduts, a partir dels partits que s’estan jugant o que ja s’han jugat.

```sql
CREATE TABLE partit (
    idpartit INT PRIMARY KEY AUTO_INCREMENT,
    eqlocal CHAR(3),
    eqvisit CHAR(3),
    gollocal INT DEFAULT 0,
    golvisit INT DEFAULT 0,
    darrergol CHAR(3),
    estat CHAR DEFAULT "P",
    traspassat CHAR DEFAULT "S",
    FOREIGN KEY (eqlocal) REFERENCES equip(id),
    FOREIGN KEY (eqvisit) REFERENCES equip(id),
    FOREIGN KEY (darrergol) REFERENCES equip(id)
);
```

Atribut **estat**: “P” (_Planificat_, no ha començat), “J” (_Jugant_, partit ha començat), “F” (_Finalitzat_).
L’atribut **traspassat**: valors “N” o “S”, segons si els resultat provisional o definitiu del partit ja està reflectit a l’acumulat de partits jugats, guanyats, empatats o perduts.

## Pregunta 4

##### Generi un procediment de nom **classifica** que actualitzi els acumulats de partits jugats, guanyats, empatats i perduts a partir dels resultats dels partits que estan en curs i no tenen el seu resultat traspassat als atributs anteriors de la taula equip. Per fer els càlculs s’ha de tenir en compte l’equip que ha fet el darrer gol (si n’han fet algun), que està contingut a l’atribut **darrergol**. Hem de notar que, per exemple, un gol del Girona pot provocar un canvi als acumulats o no (si el Girona ja guanyava, no s’ha de canviar res) (3 punts)

```sql
CREATE PROCEDURE classifica()
BEGIN
    DECLARE idpartit_in_curs INT;
    DECLARE eqlocal_in_curs CHAR(3);
    DECLARE eqvisit_in_curs CHAR(3);
    DECLARE gollocal_in_curs INT;
    DECLARE golvisit_in_curs INT;
    DECLARE darrergol_in_curs CHAR(3);

    -- Obtenir dades dels partits en curs
    DECLARE partits_en_curs CURSOR FOR
        SELECT idpartit, eqlocal, eqvisit, gollocal, golvisit, darrergol
        FROM partit
        WHERE estat = 'J' AND traspassat = 'N';

    -- Definir manejador d'errors
    DECLARE CONTINUE HANDLER FOR NOT FOUND
        SET idpartit_in_curs = NULL;

    OPEN partits_en_curs;

    -- Processar cada partit en curs
    FETCH partits_en_curs INTO idpartit_in_curs, eqlocal_in_curs, eqvisit_in_curs, gollocal_in_curs, golvisit_in_curs, darrergol_in_curs;
    WHILE idpartit_in_curs IS NOT NULL DO
        -- Actualitzar acumulats segons el resultat del partit
        IF gollocal_in_curs > golvisit_in_curs THEN
            UPDATE equip
            SET gua = gua + 1
            WHERE id = eqlocal_in_curs;

            UPDATE equip
            SET per = per + 1
            WHERE id = eqvisit_in_curs;

        ELSEIF gollocal_in_curs < golvisit_in_curs THEN
            UPDATE equip
            SET gua = gua + 1
            WHERE id = eqvisit_in_curs;

            UPDATE equip
            SET per = per + 1
            WHERE id = eqlocal_in_curs;

        ELSE
            UPDATE equip
            SET emp = emp + 1
            WHERE id = eqlocal_in_curs;

            UPDATE equip
            SET emp = emp + 1
            WHERE id = eqvisit_in_curs;
        END IF;

        -- Actualitzar el darrer gol per a l'equip que l'ha fet
        UPDATE partit
        SET traspassat = 'S'
        WHERE idpartit = idpartit_in_curs;


        FETCH partits_en_curs INTO idpartit_in_curs, eqlocal_in_curs, eqvisit_in_curs, gollocal_in_curs, golvisit_in_curs, darrergol_in_curs;
        
    END WHILE;

    CLOSE partits_en_curs;
END
```

## Pregunta 5

##### eneri un esdeveniment que executi el procediment anterior cada 30 segons, a partir de la data i hora d’inici de l’examen 16-01-2024 09:00 (1 punt)

```sql
CREATE EVENT classifica_event
ON SCHEDULE EVERY 30 SECOND
STARTS '2024-01-16 09:00:00'
DO
    CALL classifica();
```
