# I added some code because when I try to run images, docker desktop shows me an
# error with 'npm can not be found'. So I asked ChatGPT and got this solution. 
# It works right now. I hope it is ok for this task.

FROM node

# Update package lists
RUN apt-get update

# Install npm
RUN apt-get install -y npm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]
