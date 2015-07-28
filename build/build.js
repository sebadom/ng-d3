var fs = require('fs');

fs.readFile('src/wrapper.js', 'utf8', function (err, wrapper) {
  if (err) {
    return console.log(err);
  }

  fs.readFile('node_modules/d3/d3.js','utf8', function (err, lib) {
    if (err) {
      return console.log(err);
    }

    var output = wrapper.replace('{{lib}}', lib).replace('this.d3 = d3', 'd3Export = d3');

    fs.writeFile("dist/ng-d3.js", output, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
  })
});
