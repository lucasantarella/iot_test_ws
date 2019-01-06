FROM node:8-slim
WORKDIR /usr/src/app

# Copy src
COPY . /usr/src/app/

# Install deps
RUN JOBS=MAX npm install --production --unsafe-perm

# Start
ENTRYPOINT ["npm", "start"]