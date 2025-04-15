# Imagen base
FROM node:18

# Directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de la app
COPY app/package*.json ./
RUN npm install
COPY app/ .

# Exponer puerto
EXPOSE 3000

# Comando para correr la app
CMD ["npm", "start"]
