#Cherdak: Workshop
![Cherdak](logo.jpg)

##Steps to setup the app

How to prepare for workshop:

- Clone repo from github
```shell
git clone https://github.com/msemenistyi/cherdak-webperf-workshop
```

- Go to folder and run node server
```shell
cd cherdak-webperf-workshop
npm install
```

- Start server
```shell
node index.js
```

**Voilà**! The server is listening on port 9999.

- Install grunt
```shell
npm install -g grunt-cli
```

##Possible optimizations:
- Grunt configuration
	- concat html, css, js
	- minify html, css, js
	- crop, optimize images
- Enable gzipping on the server([compress method](http://expressjs.com/3x/api.html))
- Deal with inline images
- Remove redundant styles and scripts
- Follow right order of styles and scripts definition
- avoid redirects
- Enable webp serving (jpeg - 2.61 MB, - webp 1.73MB) 
[connect-image-optimus](https://github.com/msemenistyi/connect-image-optimus)
- Disable animations on scroll