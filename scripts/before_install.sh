#!/bin/bash

# Install node.js
sudo yum update

sudo yum install curl -y

sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

. ~/.nvm/nvm.sh

sudo nvm install --lts
# Install nodemon
sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
sudo npm install forever -g