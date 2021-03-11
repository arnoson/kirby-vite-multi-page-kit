# Kirby Vite Multi-Page Kit

This starter kit uses the [kirby-vite](https://github.com/arnoson/kirby-vite) plugin and provides a simple multi page setup. Each template can have it's own js and css files.

## Installation

Clone this repository and run:
```
composer install
```
```
npm install
```

## Development

Start vite's dev server and a simple php dev server by running:
```
npm run dev
```

## Production

Build your optimized frontend assets to `public/dist`:
```
npm run build
```

## Deployment

### Manually

Upload the repository to your web server and point your web server to the repository's `public` folder.

### Rsync

If you have ssh access you can use rsync to automate the upload/sync.

### Git

You can also deploy your repository with git. Then you have to run the [installation](#installation) steps again on your web server.
