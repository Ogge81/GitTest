# GitHub

# NOTES

You need to change your local main branch to track origin/main instead of origin/master:

git branch --set-upstream-to=origin/main main

remove the remote origin: git remote rm origin

git clone https://Ogge81:TiGtIg1232136@github.com/Ogge81/GitTest.git

## What is Git?

Tracking code changes

Tracking who made changes

Coding collaboration

## Git install

You can download Git for free from the following website: https://www.git-scm.com/

## Version

```git
git --version
```

## Configure Git

Now let Git know who you are. This is important for version control systems, as each Git commit uses this information:

Note: Use global to set the username and e-mail for every repository on your computer.

If you want to set the username/e-mail for just the current repo, you can remove global


```git
git config --global user.name "w3schools-test"
git config --global user.email "test@w3schools.com"
```

## Creating Git Folder

```git
mkdir myproject
cd myproject
```

mkdir makes a new directory.

cd changes the current working directory.

## Add file
```
echo "# GitTest" >> README.md
```

## Initialize Git

Once you have navigated to the correct folder, you can initialize Git on that folder:

```git
git init 
Initialized empty Git repository in /Users/user/myproject/.git/
```

# Git New Files

```git
ls
index.html
```

"ls" will list the files in the directory. We can see that index.html is there.

```git
git status
On branch master

No commits yet

Untracked files:
  (use "git add ..." to include in what will be committed)
    index.html

nothing added to commit but untracked files present (use "git add" to track)
index.html
```

Then we check the Git "status" and see if it is a part of our repo:

## Git Staging Environment

One of the core functions of Git is the concepts of the Staging Environment, and the Commit.

As you are working, you may be adding, editing and removing files. But whenever you hit a milestone or finish a part of the work, you should add the files to a Staging Environment.

Staged files are files that are ready to be committed to the repository you are working on. You will learn more about commit shortly.

```git
git add index.html
```

The file should be Staged. Let's check the status:

```git
git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached ..." to unstage)
    new file: index.html
```

Now the file has been added to the Staging Environment.

## Git Add More than One File

A README.md file that describes the repository (recommended for all repositories)

Now add all files in the current directory to the Staging Environment:

```git
git add --all
```

Using --all instead of individual filenames will stage all changes (new, modified, and deleted) files.

Note: The shorthand command for git add --all is git add -A

```git
git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached ..." to unstage)
        new file:   GitHub.md
        new file:   style.css
        new file:   index.html
```

## Git Commit

Since we have finished our work, we are ready move from stage to commit for our repo.

Adding commits keep track of our progress and changes as we work. Git considers each commit change point or "save point". It is a point in the project you can go back to if you find a bug, or want to make a change.

When we commit, we should always include a message.

The commit command performs a commit, and the -m "message" adds a message.

```git
git commit -m "First release of Hello World!"
[master (root-commit) 221ec6e] First release of Hello World!
 3 files changed, 26 insertions(+)
 create mode 100644 GitHub.md
 create mode 100644 style.css
 create mode 100644 index.html
```

## Git Commit without Stage (Not recomended)

The -a option will automatically stage every changed, already tracked file.

But this time, we will use the --short option to see the changes in a more compact way:

```git
git status --short
 M index.html
```

So let's commit it directly:

```git
git commit -a -m "Updated index.html with a new line"
[master 09f4acd] Updated index.html with a new line
 1 file changed, 1 insertion(+)
```

Warning: Skipping the Staging Environment is not generally recommended.

Skipping the stage step can sometimes make you include unwanted changes.

## Git Commit Log

To view the history of commits for a repository, you can use the log command:

```git
git log
commit 09f4acd3f8836b7f6fc44ad9e012f82faf861803 (HEAD -> master)
Author: w3schools-test 
Date:   Fri Mar 26 09:35:54 2021 +0100

    Updated index.html with a new line

commit 221ec6e10aeedbfd02b85264087cd9adc18e4b26
Author: w3schools-test 
Date:   Fri Mar 26 09:13:07 2021 +0100

    First release of Hello World!
```

## Git Help

```git
git command -help -  See all the available options for the specific command
git help --all -  See all possible commands
```

Warning: --all will display a very long list of commands

Note: If you find yourself stuck in the list view, SHIFT + G to jump the end of the list, then q to exit the view.

## Git Branch

In Git, a branch is a new/separate version of the main repository.

Branches allow you to work on different parts of a project without impacting the main branch.

When the work is complete, a branch can be merged with the main project.

You can even switch between branches and work on different projects without them interfering with each other.

Branching in Git is very lightweight and fast!

## New Git Branch

So we create a new branch:

```git
git branch new-branch
```

Let's confirm that we have created a new branch:

```
git branch
  new-branch
* master
```

We can see the new branch with the name "hello-world-images", but the * beside master specifies that we are currently on that branch.

checkout is the command used to check out a branch. Moving us from the current branch, to the one specified at the end of the command:

```
git checkout new-branch
Switched to branch 'new-branch'
```

We have made changes to a file and added a new file in the working directory (same directory as the main branch).

Now check the status of the current branch:

```
git status
On branch new-branch
Changes not staged for commit:
  (use "git add ..." to update what will be committed)
  (use "git restore ..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add ..." to include in what will be committed)
        img_hello_world.jpg

no changes added to commit (use "git add" and/or "git commit -a")
```

So let's go through what happens here:

There are changes to our index.html, but the file is not staged for commit
img_hello_world.jpg is not tracked

So we need to add both files to the Staging Environment for this branch:

```
git add --all
```

Using --all instead of individual filenames will Stage all changed (new, modified, and deleted) files.

Check the status of the branch:

```
git status
On branch new-branch
Changes to be committed:
  (use "git restore --staged ..." to unstage)
    new file: img_hello_world.jpg
    modified: index.html
```

We are happy with our changes. So we will commit them to the branch:

```
git commit -m "Added image to Hello World"
[new-branch 0312c55] Added image to Hello World
2 files changed, 1 insertion(+)
create mode 100644 img_hello_world.jpg
```

Now we have a new branch, that is different from the master branch.

Note: Using the -b option on checkout will create a new branch, and move to it, if it does not exist

## Switching Between Branches

```
git checkout master
Switched to branch 'master'
```

## Emergency Branch

So we create a new branch to deal with the emergency:

```
git checkout -b emergency-fix
Switched to a new branch 'emergency-fix'
```

## Git Branch Merge

First, we need to change to the master branch:

```
git checkout master
Switched to branch 'master'
```

Now we merge the current branch (master) with emergency-fix:

```
git merge emergency-fix
Updating 09f4acd..dfa79db
Fast-forward
 index.html | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

As master and emergency-fix are essentially the same now, we can delete emergency-fix, as it is no longer needed:

```
git branch -d emergency-fix
Deleted branch emergency-fix (was dfa79db).
```

https://www.w3schools.com/git/git_branch_merge.asp?remote=github