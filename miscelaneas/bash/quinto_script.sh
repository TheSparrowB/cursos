#! /bin/bash

# CONDICIONALES
#############################################################################################
edad=0
anho=0

read -p "Ingrese su pinche edad prro: " edad
read -p "Ingrese el año en que está viviendo: " anho

# AHORA UTILIZAMOS UN CONDICIONAL "IF"
if (( $edad>=18 )); then
	echo 'Usted es un pinche anciano'
else
	echo 'Usteh es un niño meado >:C'
fi

if [ $edad -gt 18 ]; then
	echo 'Poota madre'
fi


# SI BIEN, LA FORMA ANTERIOR ES UNA MANERA DE VALIDAR, TAMBIÉN EXISTEN OTRAS
# AQUÍ VALIDAMOS SI EL AÑO ES DEL 2017 Y LA EDAD ES MAYOR O IGUAL A 18
if [ $anho -eq 2017 ] && [ $edad -ge 18 ]; then
	echo 'Usted está a punto de morir'
elif [ $anho -eq 2017 ] && [ $edad -lt 18 ]; then
	echo 'Usted está a punto de ser masacrado morro'
elif [ $anho -le 2016 ] && [ $edad -ne 18 ]; then
	echo 'No tienes 18 antes del 2017, así no pasa nah'
else
	echo 'Arránquese morro'
fi


# LISTA DE OPERADORES RELACIONALES
# -eq	equal
# -ne	not equal
# -gt 	greater than
# -ge	greater or equal
# -lt	lower than
# -le	lower or equal

