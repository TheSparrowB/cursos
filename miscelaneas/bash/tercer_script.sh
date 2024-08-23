#! /bin/bash

# USO DE VARIABLES Y PARÁMETROS DINÁMICOS
# ##########################################################################################
# PARA ASIGNAR VALORES PROVENIENTES DE FUNCIONES A LAS VARIABLES, ES NECESARIO ENCERRARLAS EN UN '$(funcion)'
ubicacion=$(pwd)

nombres=$1
apellido=$2

echo 'Hemos recibido '$#' parámetros.'
echo 'Los parámetros recibidos son '$*'.'
echo 'Hola, me llamo '$nombres $apellido' y me encuentro en '$ubicacion'.'

# PARA EJECUTAR ESTA SCRIPT, SE LLAMARÍA DE LA SIGUIENTE MANERA
# ./tercer_script.sh Bryan Mamani
#
# DONDE LOS ESPACIOS DELIMITAN LAS VARIABLES, ES DECIR, LUEGO DE UN ESPACIO SE ASIGNAN, EN ORDEN, LAS VARIABLES
