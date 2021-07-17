# Git and GitHub

Git is a type of version control software

Help us keep track of version of projects

## Git

* Good for keeping track of changes in code

* Can keep track of adding lines, creating files, and removing files

* Good for syncing code between different people
  * Each person can make different changes and then upload to a single server
  * Then use that updated version
* Good at testing changes to code without losing the original
* Good at reverting to old versions of code

## GitHub

GitHub is a website that can store git repositories

* Folder where we can store code

On the top right corner of GitHub, we can make a git repository. This can be public or private.



### $ git clone

From there, now that the folder is on the GitHub servers, we also want it on our local machine. We can bring it to our local machine by writing the command `git clone <url>`. This will copy it from the servers and bring it to our local machine.



### $ git add

Let's say we've added some files to our repository. To add something to a git repo, we run the command `git add <filename>`. This is telling git that this is a file we want to add to our next version of our project. Once we've added it, git will tell you it is a change we can commit: 

```bash
Changes to be committed:
	modified: foo.py
```

The command:

```bash
$ touch <filename>.<extension>
```

Will create an empty file.

For example, if we did the following:

```bash
$ touch hello.html
$ code hello.html
```

An empty `hello.html` file will be created and opened in VS code. In the `hello.html` file we might have:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello!</title>
    </head>
    <body>
        Hello world!
    </body>
</html>
```

Once we've done this, we'll add it and tell git that in future commits/saves I want to include this file change.

```bash
$ git add hello.html
```

We can also just

```bash
$ git add .
```

To add everything.

In general, when we `git add` we're just adding our changes to a "staging area" where all the changes are being queued.

We can do something similar with deleting. For local machines, the command to delete a file is simply:

```bash
$ rm hello.html
```

And to remove it from git, the command is:

```bash
$ git rm hello.html
```



### $ git commit

The next step is to actually make this change and commit this change. The command for this is simply `git commit`. 

The complete command is the following:

```bash
$ git commit -m "message"
```

`-m` meaning message and the the `"message"` will simply contain the commit message describing what you've changed in this commit. This is useful for when you're looking back at your commit history and seeing what changes you've made. For example:

```bash
$ git commit -m "Added line to file"
```

This will take your file and save a version of your code. When you try to view what's in your file with `cat hello.html` it will show you the most updated version, but git secretly stores all the previous versions.



### $ git status

Now I want to see what's happening in my git repository. We can use the `git status` command and see what's going on. The following will appear if I use `git status` without pushing the changes.

```bash
On branch master
Your branch is based on 'origin/master', but the upstream is gone.
  (use "git branch --unset-upstream" to fixup)

nothing to commit, working tree clean
```

This will happen because we haven't pushed it to the  GitHub servers yet.

### $ git push

When I added the `hello.html` file, it wasn't on GitHub servers just yet, it was only on my local machine. And so what `git push` does is it tells git, take whatever changes I've made, and push them up into the server/GitHub. Now others can see these changes.

Let's say we've changed the `hello.html` file by putting `Hello World!` in an `<h1></h1>` tag like so:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Hello!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

And now this is some change I want to commit. 

We're going to first

```bash
$ git add hello.html
```

Specifying that this is a change I want to add to my next commit.

Now if I type:

```bash
$ git status
```

I will tell me:

```bash
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
```

It's saying I'm currently on "branch master" and I'm "ahead of 'origin/master'". This means that the version on my local machine is ahead of the origin version, the ones on the GitHub servers, by 1 commit. Meaning I've made 1 change that the server on GitHub does not yet know about. To update the servers, we `git push` it.

```bash
$ git push
```

Now, the newly updated code is on the git servers.

We can also type `git commit -m "message"` for multiple updates, and then `git push`. This will push **all** the commits to the servers.

If it tells us for example:

```bash
fatal: The current branch red has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin red
```

It just means that GitHub doesn't know that the branch `red` exists, so we're going to push upstream to the origin, a branch called red. It will not affect the master branch.



### $ git pull

Now I want to take what updates other people have made and put them onto my local machine. So maybe the ones on the server are more up to date.

We simply run the code:

```bash
$ git pull
```

And once it's been pulled the following will appear:

```bash
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 691 bytes | 10.00 KiB/s, done.
From https://github.com/TimothyW553/beyond
   e7e37c6..312e6fa  master     -> origin/master
Updating e7e37c6..312e6fa
Fast-forward
 hello.html | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
```

Simply telling us the changes that have been made.



### Merge conflicts

Say multiple people are working on the same line, git will have some merging issues and will not know what to do in that case. 

For example, on my local machine I've added 2 exclamation marks to `Hello, World!` so now it's `Hello, World!!!`, but if someone else added 5, so `Hello, World!!!!!!`, we have conflict! When I commit, but don't push, and attempt to `git pull` the following error will occur:

```bash
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 658 bytes | 10.00 KiB/s, done.
From https://github.com/TimothyW553/beyond
   312e6fa..895093d  master     -> origin/master
Auto-merging hello.html
CONFLICT (content): Merge conflict in hello.html
Automatic merge failed; fix conflicts and then commit the result.
```

When I look at the errors in my code I see:

```html
<<<<<<< HEAD
    <h1>Hello, world!!!</h1>
=======
    <h1>Hello, world!!!!!!</h1>
>>>>>>> 895093d9957ed07fc5de94c79b2cb8fabde34e03
```

The first part is my local code, and the second is the other version that I'm trying to pull in. I need to manually resolve this conflict. Once I've resolved the merge conflict, I can do the following:

```bash
$ git commit -am "Fix merge conflict"
$ git push
```

We can see that the push was successful:

```bash
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 564 bytes | 18.00 KiB/s, done.
Total 6 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
To https://github.com/TimothyW553/beyond.git
   895093d..3e833e9  master -> master
```

### $ git log 

If I want to see a history of my git commits

```bash
$ git log
```

This produces:

```bash
commit 3e833e95a42555549560563028dbead3c1835552 (HEAD -> master, origin/master)
Merge: 8588285 895093d
Author: Timothy Wang <timothy.art@gmail.com>
Date:   Tue Jun 22 21:09:43 2021 -0400

    Fix merge conflict

commit 895093d9957ed07fc5de94c79b2cb8fabde34e03
Author: Timothy Wang <timothywang@crescentschool.org>
Date:   Tue Jun 22 21:05:45 2021 -0400

    Add 5 exclamation points

commit 858828512a42a52ffcee3e38f27997e6f08189f5
Author: Timothy Wang <timothy.art@gmail.com>
Date:   Tue Jun 22 21:05:04 2021 -0400

    add two exclamation points

commit 312e6fa2eccf8417d4604048dc152d6334747a43
Author: Timothy Wang <timothywang@crescentschool.org>
Date:   Tue Jun 22 20:43:34 2021 -0400

    Update hello.html

    Add a comma

commit e7e37c6fe1db7d88973c52d0711f1021232987ca
Author: Timothy Wang <timothy.art@gmail.com>
Date:   Tue Jun 22 20:20:04 2021 -0400
```



### $ git reset 

If we want to go to previous versions of commits we can do:

```bash
$ git reset --hard <commit hash>
$ git reset --hard origin/master
```

The first takes me back to a specific commit or I can go to a specific branch.



### $ git branch

This command will allow me to go to a specific branch

When I do:

```bash
$ git branch
```

 it will only show me:

```bash
* master
```

This is because I only have the master branch in my repository

If I want to delete a branch I can write:

```bash
git branch -D feature
```



### $ git checkout

This command will allow me to go checkout a new branch.

When I do

```bash
$ git checkout -b feature
```

Git will create a new branch for me called `feature`

In this new branch, let's say we add some styling:

```html
<style>
    h1 {
        color: blue;
    }
</style>
```

Then let's commit these changes.

```bash
$ git commit -am "Add styling"
```

This, however, is only specific to this branch. If I change to my master branch by writing:

```bash
$ git checkout master
```

I've switched to master and all the styling is gone.

```bash
Switched to branch 'master'
Your branch is up to date with 'origin/master'.
```



### $ git merge

This will allow me to merge two branches together. I can just say:

```bash
$ git merge feature
```

This will merge in the `feature` branch into my `master` branch and the following will be returned:

```bash
Updating 3e833e9..5d04451
Fast-forward
 hello.html | 5 +++++
 1 file changed, 5 insertions(+)
```



