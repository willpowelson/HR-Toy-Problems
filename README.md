#HR-Toy-Problems

Toy problems for the after hours meetup

## Usage

Fork the repo

Clone your fork your local machine

After the first clone run the following from the project's root directory 

```sh
git remote add upstream https://github.com/willpowelson/HR-Toy-Problems.git
npm install
```

To get the latest changes

```sh
git pull upstream master
```

To test the latest session's problems

```sh
npm test
```

To test all past problems

```sh
npm run testall
```

To test a single problem from the root directory (it is imperative you run it from the root directory) run the following:

```sh
npm run testone PROBLEMNAME/PROBLEMNAME-spec.js
```