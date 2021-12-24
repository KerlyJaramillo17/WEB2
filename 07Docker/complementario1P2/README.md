 llamado Dockerfile, se escribio todo lo que se quiere subir.

despues fue agregar lo siguientes lines decodigo para realizar la creacion del container

$ docker build -t complementario . 

El container se llama complementario

se comprobo que este mi imagen docker con...

$ docker images

despues se realizo el siguiente comando para inicializar

$ docker run -it  complementario
