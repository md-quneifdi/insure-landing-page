# please .nojekyll to bypass Jekyll processing
echo >.nojekyll

# if you are deploying to custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>.github.io.git main

# if you are deploying https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:md-quneifdi/insure-landing-page.git main:gh-pages

cd -
