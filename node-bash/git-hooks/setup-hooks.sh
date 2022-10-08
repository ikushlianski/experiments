cd ..

cp ./node-bash/git-hooks/pre-commit .git/hooks/
#cp ./node-bash/git-hooks/pre-commit.mjs .git/hooks/

chmod +x .git/hooks/pre-commit
#chmod +x .git/hooks/pre-commit.mjs

echo 'Git hooks set up: pre-commit'
