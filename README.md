# jelly-hello-vue.github.io

This template should help get you started developing with Vue 3 in Vite.

## How To Contribute
- WSL Ubuntu 22.04 LTS
- vim
- html/css
- vue.js

## How To Deploy
### STG dev  ( choi3179-hello-vue.web.app )
```bash
# manual firebase cmd*
$ firebase deploy
=== Deploying to 'jelly2-33364'...

i  deploying hosting
i  hosting[jelly2-33364]: beginning deploy...
i  hosting[jelly2-33364]: found 5 files in docs
✔  hosting[jelly2-33364]: file upload complete
i  hosting[jelly2-33364]: finalizing version...
✔  hosting[jelly2-33364]: version finalized
i  hosting[jelly2-33364]: releasing new version...
✔  hosting[jelly2-33364]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/jelly2-33364/overview
Hosting URL: https://jelly2-33364.web.app
```

### STG prod ( jaelinny.github.io )

|STG|BRANCH|TRIGGER|URL|
|------|---|---|---
|DEV|Branch of PR|manual firebase cmd|[jelly-hello-vue.web.app](https://jelly2-33364.web.app)|
|PRD|main|Auto Github Action|[jelly-hello-vue.github.io](https://jelly-hello-vue.github.io)|

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
