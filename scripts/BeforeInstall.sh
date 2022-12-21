#!/bin/bash

# Install node.js
sudo yum update -y

sudo yum install curl -y

rm -rf $NVM_DIR ~/.npm ~/.bower

curl -sl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh -o install_nvm.sh
bash install_nvm.sh

export HOME="/home/ec2-user/"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

sudo rm -rf "$HOME/nodejs*"

nvm install 16.15.1

# Install nodemon
npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
npm install forever -g
