# Boot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
------------------------------------------------
Deploying to Github Pages
If you don't have an account at Github, go ahead and create one.

Then, create a new repository for your project.

Next, in the console, run the following command:

$ npm i -g angular-cli-ghpages
This will install a CLI tool globally.

You will also need Git, you can download it here.

Because we're going to push our Angular 5 project to a subfolder via Github pages, we need to rebuild it with the --base-href flag:

$ ng build --prod --base-href="https://YOURUSERNAME.github.io/REPO-NAME/"
Next, run these commands to setup our project folder push to the new repo:

$ git add .

$ git commit -m "first commit"

$ git remote add origin git@github.com:yourinfo/yourgit.git

$ git push -u origin master



Then, finally, we can use the Github-pages CLI to push our project to github-pages:

$ angular-cli-ghpages
If all goes well, it will respond with Successfully Published! 

You can now visit the YOURUSERNAME.github.io/REPO-NAME/ address and the app should load.
