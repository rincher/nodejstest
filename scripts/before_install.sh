#!/bin/bash

# Install node.js
sudo yum update
curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh -o install_nvm.sh
bash install_nvm.sh
export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install --lts
# Install NPM


# Install nodemon
sudo npm install nodemon -g

# Install forever module 
# https://www.npmjs.com/package/forever
sudo npm install forever -g