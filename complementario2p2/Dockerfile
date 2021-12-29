# Version del node que estas utilizando 

FROM node:12

#Copia todo el directorio de trabajo
COPY . /var/www
#Especifica donde esta el directorio de trabajo
WORKDIR /var/www
#RUN npm install -g npm@7.3.0
RUN npm install
#RUN npm install
EXPOSE 3001
ENTRYPOINT ["npm", "start"]
