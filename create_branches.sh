#!/bin/bash

# Make an initial commit if not already done
git add .
git commit -m "Initial commit"
git branch -M master
git push -u origin master

# Branches to create
branches=(
  "feature/html-css"
  "feature/gpa-logic"
  "feature/dom-events"
  "feature/bonus-features"
  "docs/readme"
)

# Create and push each branch
for branch in "${branches[@]}"
do
  git checkout -b $branch
  git push -u origin $branch
  git checkout master
done
