 
#Version del node
FROM node:12

#Copia todo el directorio de trabajo
COPY . /var/www
#Especifica donde esta el directorio de trabajo
WORKDIR /var/www
#npm instalacion 
RUN npm install
#puerto
EXPOSE 3001
ENTRYPOINT ["npm", "start"]