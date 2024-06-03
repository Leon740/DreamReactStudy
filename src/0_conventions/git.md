git init
git clone url

git log
log commits

git reflog
log all of the commits: resets, rebases, checkouts

.gitignore
git rm --cached

git commit -m 'message'

Edit commit msg
git commit --amend

Edit commit files
git add .
git commit --amend

git stash
git stash list
git stash pop
git stash apply stash@{0}

git revert commit_hash
reset the files having an extra commit of revert

git reset commit_hash --hard
delete all commits after commit_hash, reset all files

git reset commit_hash --soft
delete all commits after commit_hash, reset all files, but make current changes staged files

git reset commit_hash --mixed
delete all commits after commit_hash, reset all files, but make current changes unstaged files

git checkout commit_hash or branch_name
checkout HEAD, debug or do anything with files on this commit or branch

git branch
show current branch

git branch -v
show all branches

git branch branch_name
create branch

git branch branch_name commit_hash
create branch based on commit

git branch -d branch_name
delete branch

git checkout -b branch_name
create a branch, make it current branch

git checkout master
git merge feature/1
merge branch feature/1 into master

git checkout feature/1
git rebase master
set all master commits as a base for feature/1

git cherry-pick commit_hash
copy commit from another branch to current branch

git remote repo_name repo_url
add repo url

git clone repo_url
clone remote url to local

git pull
pull changes

git push
push changes

git fetch
fetch but don't apply changes