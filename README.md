# nodejs_standard_setup

Simple Standard NodeJs setup for Restful Api design

### boot up

make sure that mongo is runing on your machine on port `27017` or also you can pull docker image of mongodb and use that. for starting the project just run `npm install` first and `npm run serve` to spin up that on port `:3010`.

### description

this is just a simple repo for you to see how nodejs basically sets up for a standard Restful API. in feature brances Jest will be added for testing. for now there are just couple of middlewares to handle a bit of error handeling and more importantly cors issues and response to `OPTIONS` method. also there is a resource called `author` that has controller as much as route and model.

### build

you are using ESM mosules in the entire project, which enabels you to use `import/export`, `async/await` and many more features of ES6 in this project, so , in order to transpile that to regular js you need to run `npm run build`; this command would create a `built` folder in root directory and actually you can create a docker file to spins up a node js with an nginx and runs the content of that folder and there we go, you got your backend system!
