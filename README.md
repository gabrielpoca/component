gabrielpoca:component
============


This repository is a solution to help separate your component based web application into multiple pieces. The idea is to leverage gulp and bower. Gulp as a build tool that generates the dist files and creates an environment for development. And bower as a dependency manage.

The goal is to improve encapsulation and re usability. Having to manually define the dependencies for each component gives the opportunity to question your design decisions and implementation.

For now it only supports angular. Open an issue if you want to help me.

For styling you can use anything. I'm using [SUIT CSS](https://github.com/suitcss/suit) methodology. The concepts I apply to my components are highly inspired by it's philosophy.

## What is a component?

A component is a auto sufficient element that can live anywhere, never knowing where he is. Adjusting to every situation as he can. Accepting any other component has is parent or children, not questioning who they are.

## Install

```
npm install
```

```
bower install
```

### Tasks

Running the test server.

```
gulp default
```

Generatingthe dist

```
gulp dist
```
