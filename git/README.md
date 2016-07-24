# Git snippets


## Rollback to a previous commit

```sh
$ git reset --hard 8719a98b...

$ git push --force origin master
```

## Change branch after of edited some files
```sh
$ git stash 

$ git checkout foo 

$ git stash pop
```

## Amend changing
```sh
$ git add file1.py
$ git commit -m "First commit"
```

Then you forgot some files
```sh
$ git add file2.py
$ git commit --amend --no-edit
```
> "--no-edit" parameter fixes the file without change the commit message


## Simple deploy with GIT
Access the server using SSH and follow the commands:

### Server side

Create a directory to the app:
`cd /myapps && mkdir app.git && cd app.git`

Initiate git bare repository:
`git init --bare`

Set hooks up:
`nano hooks/post-receive`

Paste the content(must be the path to your app directory):
```
#!/bin/sh
GIT_WORK_TREE=/myapps git checkout -f
```

Give to it an execution permission:
`sudo chmod +x hooks/post-receive`

### Client side

Add remote repository (change USER and DOMAIN to yours):

`git remote add deploy USER@DOMAIN:/myapps/app.git`

Now:
```
git add .
git commit -m “To server”
git push deploy master
```
