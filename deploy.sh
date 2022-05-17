#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'demo.digindominic.me' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:digin1/portfolio.git master:gh-pages
cd -