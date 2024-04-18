# PROYECTOS DE INTERNET

Este es un directorio para crear diferentes proyectos de aprendizaje.

Los lenguajes incluidos en este repositorio son:
* Markdown
* React

### **NOTA:**
npm install <paquete> -E  => E es un comando que coloca la versión específica en el "package.json".

npm install <paquete> -D  => D es un comando que coloca el paquete en la parte de desarrollo del "package.json".


### **IMPORTANTE:**
Para este proyecto nos estamos ayudando de un paquete llamado "standard", el cual nos sirve para formatear nuestro código de forma correcta.

Para que esto funcione es necesario agregar esto en el "settings" del vscode:

"editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
}

Asimismo, también es necesario agregar lo siguiente en el "package.json":

"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}