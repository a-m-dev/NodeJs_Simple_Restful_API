# nodejs_standard_setup

Simple Standard NodeJs setup for Restful Api design

### boot up

make sure that mongo is runing on your machine on port `27017` or also you can pull docker image of mongodb and use that. for starting the project just run `npm install` first and `npm run serve` to spin up that on port `:3010`.

### description

this is just a simple repo for you to see how nodejs basically sets up for a standard Restful API. in feature brances Jest will be added for testing. for now there are just couple of middlewares to handle a bit of error handeling and more importantly cors issues and response to `OPTIONS` method. also there is a resource called `author` that has controller as much as route and model.
