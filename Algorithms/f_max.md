
--
This file will disappear in the futur
NOTA : **Files not completed** : code is wrong and algorithm is false (why start a 0 and not a list[0] ? what if numbers are <0 ?


---------------------------------
Here the algorithms are false and need correction (help's welcome): 

At first, **the current maximum is 0.** -> :exclamation: doesn't work if there is negativ number !

It compares each item with index[0] of the array/list.
if it is greater than it,**it becomes the current maximum**.


* [PHP](https://www.w3schools.com/Php/php_intro.asp)

```
<?php
function maximum($liste) {
   $actual_max = 0;
   foreach ($liste as $elem)
       if ($elem > $actual_max)
           $actual_max = $elem;
   return $actual_max;
}
?>

```




* [OCaml](https://ocaml.org/learn/description.html) (_not sure if this works_)

```
let maximum liste =
  let rec parcours actual_max = function
  | [] -> actual_max
  | elem::reste -> parcours (max actual_max elem) reste
  in parcours 0 liste

```

French explanation of the OCaml algo :
>OCaml, les fonctions sont utilisées différemment, via la currifycation. 
C'est quelque chose de courant en lambda-calcul, sur lequel repose OCaml.
**let maximum liste** = définit une fonction, maximum, qui aura comme seul argument liste.

>Juste en-dessous, **let rec parcours max_actuel = function** est une fonction (récursive) qui prend en arguments deux paramètres, max_actuel et une liste, et l'on essaye de voir si la liste est vide [], ou si elle contient au moins un élément **elem::reste**.

>Ensuite , ligne 4 parcours s'appelle lui-même avec le code parcours (**max max_actuel elem**) reste. 
Le premier argument est le maximum actuel, le second le reste de la liste à explorer.


[_source_](https://openclassrooms.com/forum/sujet/erreur-dans-code-php-dun-cours-aide-ocaml#message-92485840)
