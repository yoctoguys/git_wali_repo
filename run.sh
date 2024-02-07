#!/bin/bash

# Run Node.js script for JSON processing
node main_json.js

# Export Git diff to a file and append to diff.log
git diff >> diff.log

# Add all changes to the Git staging area
git add .

# Commit changes with a message
git commit -m "Update JSON data from Excel file"

# git push -u origin main

# Export Git log to a file and append to log.log
git log >> log.log
