# Utiliser une image de Node.js
FROM node:20

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application
COPY . .

# Définir l'environnement à développement
ENV NODE_ENV=development

# Exposer le port
EXPOSE 3002

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
