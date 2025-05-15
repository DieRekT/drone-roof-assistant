#!/bin/bash

# Navigate to project directory
cd "$(dirname "$0")"

# Initialize git, add all files, commit and push
git init
git add .
git commit -m "Initial commit of enhanced QuickVote app"
git branch -M main
git remote add origin https://github.com/DieRekT/quickvote.git
git push -u origin main
