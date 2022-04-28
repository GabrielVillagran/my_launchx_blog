---
title: "Git & GitHub Tutorial"
date: 2022-04-27T12:00:21-04:00
description: 'Tutorial basico para el uso de estas dos herramientas'
---
Gabriel Villagrán

a267572@alumnos.uaslp.mx


# Debes tener instalado git en tu computadora, lo puedes encontrar en el siguiente enlace: https://git-scm.com/downloads

## Creación de repositorios en github

Para poder crear un repositorio de github es necesario crear una cuenta en https://github.com/ una vez que cuentes con tu cuenta podrás hacer forks, hacer repositorios y utilizar todas las herramientas que github tiene para ti.

**Para realizar la creación de un repositorio hay que hacer lo siguiente:**

1. Selecciona **"Repositories"** y da clic en **new**

![image](https://user-images.githubusercontent.com/44887537/165681097-e0beaf73-d028-47d1-ab3b-30fe0bc51a5c.png)

2. Al momento de crear el repositorio te pedirá información como título y descripción, aunque la descripción es opcional, es necesario hacerlo para que las personas sepan una pequeña información de lo que se incluye dentro de el.

![image](https://user-images.githubusercontent.com/44887537/165681131-696642e6-aa3f-46fd-9330-2b5173c56fb8.png)

3. Selecciona si tu repositorio sera publico o privado

4. Para este ejemplo no sera necesario crear un archivo readme.md ya que lo crearemos desde nuestro editor de texto

5. Presiona en el boton verde que dice **Create Repository**

**Utiliza VS Code para poder crear los archivos necesarios y hacer tu primer commit y push a github:**

1. Abre el directorio que deseas versionar **(subir a github)** en tu editor de textos, en mi caso es el directorio js con un archivo **func.js**

![image](https://user-images.githubusercontent.com/44887537/165681497-3bb3a41a-fde6-4aab-aa24-957d45384c10.png)

2. Crea un archivo con el nombre readme.md (Este archivo debe estar en la carpeta raíz, ya que será el que se mostrara al inicio del repositorio)

**Nota: Los archivos markdown son los que utilizaremos para brindar información a los usuarios sobre lo que se encontrara en nuestro repositorio y así puedan saber de manera rápida lo que encontraran dentro de él o bien, como hacer uso de lo que descargaran o como lo descargarán)**

Dentro del archivo **readme.md** escribiremos lo siguiente:

![image](https://user-images.githubusercontent.com/44887537/165681537-c648b835-c3de-4ecc-bab2-b1cc1bb186f7.png)

3. Da clic en terminal y selecciona una terminal **git bash**

![image](https://user-images.githubusercontent.com/44887537/165681561-1d3e31d6-a2ca-48f0-9223-68ed39ddb12d.png)

4. Escribe **git init* esto nos permitira nicializar el directorio como repositorio de git

![image](https://user-images.githubusercontent.com/44887537/165681589-99bd00cb-8c5b-4ccc-9866-570e06d92a87.png)

5. En el repositorio creado encontrarás diversos comandos, copia y pega en tu terminal el primer comando

![image](https://user-images.githubusercontent.com/44887537/165681284-3d43ec8a-8a58-4d66-8353-2440f687ce4f.png)

6. Escribe **git add .** Esto permitirá agregar todos tus archivos al repositorio

![image](https://user-images.githubusercontent.com/44887537/165681605-982f1a22-cf8d-4d7f-8c49-15660ce86d74.png)

7. Es momento de realizar tu primer commit con **git commit -m "descripcion"**, los commit servirán como checkpoints en los cuales podrás describir todo lo que realizaste, personalmente te recomiendo hacer un commit por cada paso importante que realices en tu proyecto

![image](https://user-images.githubusercontent.com/44887537/165681628-dd7f4884-ed1e-4c63-82c9-0fe0ade04caa.png)

8. **git remote -v**

![image](https://user-images.githubusercontent.com/44887537/165681688-c97853a9-ca66-4eb7-b6aa-167e3b96a277.png)

9. **git push origin master** este comando permitira subir todos tus cambios a la rama master de tu repositorio creado

![image](https://user-images.githubusercontent.com/44887537/165681703-d9f49743-f205-4f23-bc34-0b0b09dc720d.png)

### Una vez que hayas seguido estos pasos, tu repositorio deberá de contar con el archivo que quisiste subir:

# Cuando hagas cambios en tu codigo y quieras guardarlos solamente bastara hacer lo siguiente:
- git add .
- git commit -m "descipcion de lo hecho"
- git remote -v
- git push origin master

**Estos comandos son básicos para poder hacer lo que se necesita en un proyecto, pero es recomendable aprender github y no manejarlo como si fuera una receta de cocina, ya que si se llegase a haber algún error, habrá que analizar lo sucedido y arreglarlo con comandos de git**

# Extra: Branch o ramas

Las branch son ramificaciones que tenemos para poder hacer mucho más estructurado nuestro repositorio, nos encontraremos diferentes branches dependiendo de los proyectos, en el que hemos creado  solo contamos con la rama master

![image](https://user-images.githubusercontent.com/44887537/165681719-8b22fbb0-7b5d-40b2-b8f3-f90e316cdf41.png)

Pero es importante mencionar que nos podremos encontrar con proyectos en los cuales haya muchas más ramas como por ejemplo:

![image](https://user-images.githubusercontent.com/44887537/165681729-09d54bad-ea35-4cda-990b-843a68a31815.png)

# Clonar repositorios
Para clonar un repositorio (descargarlo en tu computadora) es muy sencillo, solo bastara con hacer **git clone *enlace del repo a clonar***

![image](https://user-images.githubusercontent.com/44887537/165681753-60604df7-e23b-4761-8e8e-256c001d7e0e.png)
