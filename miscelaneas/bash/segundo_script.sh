#! /bin/bash

# DECLARAMOS UNA VARIABLE
export favorito='conchita'

#IMPRIMIMOS LA VARIABLE DECLARADA
echo $favorito

#ACÁ VAMOS A REALIZAR OPERACIONES ARITMÉTICAS OwO
echo '###Comenzamos con operaciones numéricas xd'
numA=10
numB=15

#NOTA QUE LAS VARIABLES Y SUS VALORES NO TIENEN ESPACIOS, SINO QUE ESTÁN TODO JUNTOS
# ES DECIR, NO SE PUEDE HACER ESTO
# numC = 56
echo $numA + $numB = $((numA + numB))
echo $numA - $numB = $((numA - numB))
echo $numA x $numB = $((numA * numB))
echo $numA / $numB = $((numA / numB))


# LASTIMOSAMENTE NO SE PUEDEN REALIZAR OPERACIONES CON NÚMEROS FLOTANTES EN BASH, PERO PARA ELLO PODEMOS UTILIZAR OTRAS LIBRERIAS, COMO AWK
echo 'Ahora realizaremos operaciones entre doubles'
numC=15.7
numD=30.4
awk -v numC=$numC -v numD=$numD 'BEGIN{ print numC + numD }'
echo $numC+$numD | awk -F '+' '{ print $1,"+",$2,"=",$1+$2}'
echo $numC-$numD | awk -F '-' '{ print $1,"-",$2,"=",$1-$2}'
echo $numC*$numD | awk -F '*' '{ print $1,"*",$2,"=",$1*$2}'
echo $numC/$numD | awk -F '/' '{ print $1,"/",$2,"=",$1/$2}'
