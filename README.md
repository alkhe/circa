# circa

Circa (/ˈsərkə/) is the implementation of the SRKA (Socket.IO, React, Koa, Alt) stack concept.

It utilizes React and Flux for client-side applications, with Socket.IO for high-speed bidirectional communication. Circa comes with a gulp build system  with production and development configurations, complete with babel (6to5), cssnext (4to3), minification, and sourcemapping.

## Installing

```sh
$ npm install -g circa
```

## Bootstrapping

```sh
$ circa
  Application Name myapp
  Directory (myapp)
  Copying...
  Populating...
  Installing...
  Building...
  Done.
```

## Deploying

Production
```sh
$ cd myapp && npm run pro
```

Minified + Sourcemaps
```sh
$ cd myapp && npm run map
```

Development
```sh
cd myapp && npm run dev
```
