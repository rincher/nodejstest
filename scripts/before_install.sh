#!/bin/bash

# Install node.js
sudo yum update

sudo yum install curl -y

sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
export HOME="/home/ec2-user/"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

rm -rf $NVM_DIR ~/.npm ~/.bower

# nvm install 16.15.1

# Install nodemon
npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
npm install forever -g
