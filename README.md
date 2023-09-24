## Install

To install this, run the following command

```bash
  git clone https://github.com/nisharga/gpt-guider.git
```

then go to the directory by

```bash
  cd gpt-guider
```

then install the dependency by

```bash
  npm install
```

finally start the project by

```bash
  npm start
```

## Code Push to Github

First create your own branch by (Your Name)

```bash
 git checkout -b YourName
```

Then commit by what you have done

```bash
 git add .
 git commit -m "[done] something"
 git push -u origin YourName
```

You have Sucessfully Push your code to your branch...

### Optional (No need if you are not comfortable with GitHub; I will add it via the GitHub website.)

Now delivery it to development branch. So that anyone can use it.
(what happend here? after entered development,
you said marge my code to development)

```bash
 git checkout development
 git merge YOUR_BRANCH_NAME development
```

Now You have to give a commit so that everyone can see it.

```bash
 git add .
 git commit -m "[done] YOUR_BRANCH_NAME code send to development"
 git push -u origin YourName
```

DONE DONE DONE, You have done everything. Now go to bed and take rest.

My PRO-Coder-Frined coding all night. And push it to development branch.
How i get the code now?

Enter your branch and give this

## After anyone pushes the code to GitHub

```bash
git pull origin development
```
