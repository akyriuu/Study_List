#1 //Future reference, image to frontend
FROM node:20-alpine


#2 // auto create a folder inside the container, ''WORK DIRECTORY"

WORKDIR /app

#3 // Gonna copy the dependencies from json file, priority purposes, to optimization

COPY package*.json ./

#4 //installing node modules

RUN npm install

#5 //Copy the rest

COPY . .

#6 open the port I want, in this case, 2004

EXPOSE 2004

#7 //run the application

CMD ["npm", "start"]
