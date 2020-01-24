
# The Node version that we'll be running for our version of React.
# You may have to search the Node directory for a version that fits
# the version of React you're using.
FROM node:10.13-alpine

# Create a work directory and copy over our dependency manifest files.
ENV NODE_ENV production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install --production --silent && mv node_modules ../
RUN npm install react-scripts@3.3.0 -g --silent
COPY . .

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

CMD npm start