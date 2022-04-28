---
attachments: [Clipboard_2022-04-27-23-27-41.png, Clipboard_2022-04-27-23-31-38.png, Clipboard_2022-04-27-23-35-23.png, Clipboard_2022-04-27-23-36-36.png, Clipboard_2022-04-27-23-42-14.png, Clipboard_2022-04-27-23-46-13.png, Clipboard_2022-04-27-23-47-06.png, Clipboard_2022-04-27-23-48-46.png, Clipboard_2022-04-27-23-55-20.png, Clipboard_2022-04-27-23-56-57.png, Clipboard_2022-04-27-23-57-34.png, Clipboard_2022-04-28-00-03-29.png, Clipboard_2022-04-28-00-05-39.png, Clipboard_2022-04-28-00-09-17.png]
title: Untitled
created: '2022-04-28T04:22:45.270Z'
modified: '2022-04-28T05:09:43.646Z'
---

---
title: "Git & GitHub"
date: 2022-04-28T12:00:21-04:00
description: 'Tutorial basico para el uso de estas dos herramientas'
---
Gabriel Villagrán
a267572"alumnos.uaslp.mx

# Debes tener instalado git en tu computadora, lo puedes encontrar en el siguiente enlace: https://git-scm.com/downloads

## Creación de repositorios en github

Para poder crear un repositorio de github es necesario crear una cuenta en https://github.com/ una vez que cuentes con tu cuenta podrás hacer forks, hacer repositorios y utilizar todas las herramientas que github tiene para ti.

**Para realizar la creación de un repositorio hay que hacer lo siguiente:**
1. Selecciona **"Repositories"** y da clic en **new**
![](@attachment/Clipboard_2022-04-27-23-27-41.png)
2. Al momento de crear el repositorio te pedirá información como título y descripción, aunque la descripción es opcional, es necesario hacerlo para que las personas sepan una pequeña información de lo que se incluye dentro de el 
![](@attachment/Clipboard_2022-04-27-23-31-38.png)
3. Selecciona si tu repositorio sera publico o privado
4. Para este ejemplo no sera necesario crear un archivo readme.md ya que lo crearemos desde nuestro editor de texto
5. Presiona en el boton verde que dice **Create Repository**

**Utiliza VS Code para poder crear los archivos necesarios y hacer tu primer commit y push a github:**
1. Abre el directorio que deseas versionar **(subir a github)** en tu editor de textos, en mi caso es el directorio js con un archivo **func.js**
![](@attachment/Clipboard_2022-04-27-23-35-23.png)
2. Crea un archivo con el nombre readme.md (Este archivo debe estar en la carpeta raíz, ya que será el que se mostrara al inicio del repositorio)

**Nota: Los archivos markdown son los que utilizaremos para brindar información a los usuarios sobre lo que se encontrara en nuestro repositorio y así puedan saber de manera rápida lo que encontraran dentro de él o bien, como hacer uso de lo que descargaran o como lo descargarán)**

Dentro del archivo **readme.md** escribiremos lo siguiente:
![](@attachment/Clipboard_2022-04-27-23-42-14.png)

3. Da clic en terminal y selecciona una terminal **git bash**
![](@attachment/Clipboard_2022-04-27-23-36-36.png)

4. Escribe **git init* esto nos permitira nicializar el directorio como repositorio de git
![](@attachment/Clipboard_2022-04-27-23-46-13.png)

5. En el repositorio creado encontrarás diversos comandos, copia y pega en tu terminal el primer comando
![](@attachment/Clipboard_2022-04-27-23-47-06.png)

6. Escribe **git add .** Esto permitirá agregar todos tus archivos al repositorio
![](@attachment/Clipboard_2022-04-27-23-48-46.png)

7. Es momento de realizar tu primer commit con **git commit -m "descripcion"**, los commit servirán como checkpoints en los cuales podrás describir todo lo que realizaste, personalmente te recomiendo hacer un commit por cada paso importante que realices en tu proyecto
![](@attachment/Clipboard_2022-04-27-23-55-20.png)

8. **git remote -v**
![](@attachment/Clipboard_2022-04-27-23-56-57.png)

9. **git push origin master** este comando permitira subir todos tus cambios a la rama master de tu repositorio creado
![](@attachment/Clipboard_2022-04-27-23-57-34.png)

### Una vez que hayas seguido estos pasos, tu repositorio deberá de contar con el archivo que quisiste subir:

# Cuando hagas cambios en tu codigo y quieras guardarlos solamente bastara hacer lo siguiente:
- git add .
- git commit -m "descipcion de lo hecho"
- git remote -v
- git push origin master

**Estos comandos son básicos para poder hacer lo que se necesita en un proyecto, pero es recomendable aprender github y no manejarlo como si fuera una receta de cocina, ya que si se llegase a haber algún error, habrá que analizar lo sucedido y arreglarlo con comandos de git**

# Extra: Branch o ramas

Las branch son ramificaciones que tenemos para poder hacer mucho más estructurado nuestro repositorio, nos encontraremos diferentes branches dependiendo de los proyectos, en el que hemos creado  solo contamos con la rama master
![](@attachment/Clipboard_2022-04-28-00-03-29.png)

Pero es importante mencionar que nos podremos encontrar con proyectos en los cuales haya muchas más ramas como por ejemplo:
![](@attachment/Clipboard_2022-04-28-00-05-39.png)

# Clonar repositorios
Para clonar un repositorio (descargarlo en tu computadora) es muy sencillo, solo bastara con hacer **git clone *enlace del repo a clonar***
![](@attachment/Clipboard_2022-04-28-00-09-17.png)


