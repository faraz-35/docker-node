FROM node
WORKDIR /app
COPY package.json . 

ARG NODE_ENV
# RUN if [ "$NODE_ENV" = "dev" ]; \
#     then npm install; \ 
#     else npm install --only=production; \
#     fi 
RUN npm install
COPY . ./
ENV PORT 3001
EXPOSE $PORT
CMD ["node","index.js"] 