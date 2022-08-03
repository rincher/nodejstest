#!/bin/bash
export HOME="/home/ec2-user/"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

rm -rf /home/ec2-user/nodejs
mkdir /home/ec2-user/nodejs
cd /home/ec2-user/nodejs