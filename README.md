# Tindog

This repository contains a simple start-up frontend for dogs

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo :fork_and_knife: to your account.  
   Go to the forked repo and clone it :busts_in_silhouette: to your local machine:

```sh
git clone https://github.com/Grumpyyash/Startup-UI.git
```

This will make a copy of the code to your local machine.

2. Now move to the `Startup-UI` directory.

```sh
cd Startup-UI
```

3. Now check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/Startup-UI.git (fetch)
origin	https://github.com/Your_Username/Startup-UI.git  (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/Grumpyyash/Startup-UI.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/Startup-UI.git  (fetch)
origin	https://github.com/Your_Username/Startup-UI.git  (push)
upstream	https://github.com/Grumpyyash/Startup-UI.git (fetch)
upstream	https://github.com/Grumpyyash/Startup-UI.git (push)
```

### Run locally

Run the below command to start the server:

```sh
Copy full path of the `index.html` file and paste it to the browser
```

## Contributing

We really like contributions in several forms. See the contribution guidelines below - 

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix in one of the codes
- Proposing new questions and code

## Steps to follow :scroll:

### 1. Sync it :recycle:

Always keep your local copy of repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands _carefully_ to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
git fetch --all --prune

# Switch to `master` branch
git checkout master

# Reset local `master` branch to match `upstream` repository's `master` branch
git reset --hard upstream/master

# Push changes to your forked `pennamechooser` repo
git push origin master
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/Grumpyyash/Startup-UI/pulls).

### 6. Create a new branch :bangbang:

Whenever you are going to make contribution, please create a separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).

```sh
# It will create a new branch with name Branch_Name and will switch to that branch.
git checkout -b Branch_Name
```

Create a separate branch for contribution and try to use same name of branch as of folder.

To switch to desired branch

```sh
# To switch from one folder to other
git checkout Branch_Name
```

To add the changes to the branch. Use

```sh
# To add all files to branch Branch_Name
git add .
```

Type in a message relevant for the code reviewer using

```sh
# This message gets associated with all files you have changed
git commit -s -m 'relevant message'
```

Now, Push your awesome work to your remote repository using

```sh
# To push your work to your remote repository
git push -u origin Branch_Name
```

Finally, go to your repository in browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.

Sit and relax till we review your PR, you've made your contribution to our project.

:tada: :confetti_ball: :smiley: **Happy Contributing** :smiley: :confetti_ball: :tada:
