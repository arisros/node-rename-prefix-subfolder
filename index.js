var fs = require('fs');
var path = require('path');
var glob = require('glob');
var source = 'data/';

fs.readdir(source, (err, files) => {
	files.forEach(file => {
		var prefix = file+'_';

		glob(source + file +'/**/*.jpg', function (err, subFiles) {
			if(subFiles.length>0) {
				subFiles.forEach(getFile => {
					var dirname = path.dirname(getFile);
					var oldFileName = dirname + '/' + path.basename(getFile);
					var newFileName = dirname + '/' + prefix + path.basename(getFile);
					fs.rename(oldFileName, newFileName, (err, done) => {
						if(err) throw err;
					});
				});
			}
		});

	});
});

