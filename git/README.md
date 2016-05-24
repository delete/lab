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
