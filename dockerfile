FROM node:12

WORKDIR /client/build

ADD /client/build .

WORKDIR /orm-server

COPY /orm-server/package.json /orm-server/package-lock.json ./

RUN npm install --production

# RUN git clone https://github.com/vishnubob/wait-for-it.git

#Change to your Port

EXPOSE 8080 

COPY /orm-server .

# CMD ["./wait-for-it/wait-for-it.sh", "mysql:3306", "--", "npm", "run", "spinup"]

CMD ["npm", "run", "start-app"]

# in your package.json add a script that migrates your database and then start your server
# example -> 
# "seed": "npx sequelize db:seed:all"
# "undoseed": "npx sequelize db:seed:undo:all"
# "migrate": "npx sequelize db:migrate"
# "dev": "how you start your server"
# "spinup": "npm run migrate && npm run dev"
# "spinupseed": "npm run migrate && npm run undoseed && npm run seed && npm run dev" // for continuesly seeding data