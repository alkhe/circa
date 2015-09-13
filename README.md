# circa

Circa (/ˈsərkə/) is a batteries-included boilerplate for futuristic web development.

It utilizes React and Flux for client-side applications, with Socket.IO for high-speed bidirectional communication. Circa comes with a gulp and webpack build system with production and development configurations, complete with babel (6to5), minification, hot module reloading, and isomorphic rendering.

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
  Done.
```

## Deploying

Install
```sh
npm i
```

Production
```sh
npm run build
PORT=3000 npm start
```

Development
```sh
PORT=3000 npm run dev
```
