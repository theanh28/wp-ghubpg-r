# wp-ghubpg-r
Template for React project, compilied with webpack

# Currently
  Have js/jsx, css/scss/sass compiled and bundled with Webpack and their loaders  
  Have Husky for pre-commit task + Eslint for linting   
  Have Docker to build Docker images for ez setup of project
  
# Demo
  Hosted on Github Pages at https://theanh28.github.io/wp-ghubpg-r/  
  Hosted on Netlify at https://wizardly-poincare-1f2b20.netlify.app/
  
# Future
  Lerna?

# Work with Docker
  install docker (on Windows, remember to install Docker Desktop)  
  create a repo on Dockerhub  
  -> docker build . -t `<repo name>` (since image name should be identical to repo name)  
  -> docker push `<repo name>`  
  run locally:  
  -> docker pull `<repo name>` (ofc not needed if you already have the image)  
  -> docker run -d -p 5000:5000 `<repo name>` (-d = detach mode, -p 5000:5000 = connect our machine port 5000 with the docker container port 5000)  
  

# Potential problem
  7/2021, if Husky is not working: https://stackoverflow.com/questions/50048717/lint-staged-not-running-on-precommit  
