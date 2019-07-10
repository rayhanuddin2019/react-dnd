#!/bin/bash
npx babel --config-file=../../../babel.config.js src --ignore="src/**/__tests__/**" --out-dir lib --extensions '.ts,.tsx'
npx tsc
npx tsc -b tsconfig.cjs.json

# If a '1' is passed in as the first argument, generate a umd build
if [ $1 == "1" ]; then
  npx webpack --mode production
  npx webpack --mode development
fi