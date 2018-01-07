#!/bin/bash

echo "module.exports = {" > src/concat.js
for i in `ls src/data/*.json`;
do
  bn=$(basename $i)
  echo \"${bn%.*}\": $(cat $i), >> src/concat.js;
done
echo "};" >> src/concat.js
