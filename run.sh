#!/bin/bash
node main_json.js
git diff > diff.log
git add .
git commit -m "Update JSON data from Excel file"
git push -u origin main
git log > log.log

