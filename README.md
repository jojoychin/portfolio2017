
# Portfolio Website
	

Built using [Wintersmith](wintersmith.io)

```
git clone https://github.com/jojoychin/portfolio2017.git .
npm install
gulp serve
```

## Gulp commands
```
# Run local server on http://localhost:8080/
gulp serve

# Build static pages
gulp build

# Deploy github pages
gulp deploy-pages

# Deploy master branch
gulp deploy-master
```

*Sequence to build and deploy to github*
```
gulp build
gulp deploy-pages
gulp deploy-master
```