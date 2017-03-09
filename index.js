var fs = require('fs');
var path = require('path');
var source = 'data/';

fs.readdir(source, (err, files) => {
	files.forEach(file => {
		fs.readdir(source + file + '/', (err, subFiles) => {
			// file are parent folder name we trace
			subFiles.forEach(subFile => {
				// define prefix name
				// find extension of subFiles
				// to know images is
				var prefix = file+'_';
				var ext = path.extname(source + file + '/' + subFile);
				var image = (ext === '.jpg' || ext === '.jpeg'|| ext === '.png' || ext === '.svg' || ext === '.gif') ? true : false;
				var pathOld = source + file + '/' + subFile;
				var pathNew = source + file + '/' + file +'_'+ subFile;
				// check if subFile not have exist prefix
				if(!subFile.startsWith(prefix)) {
					if(image) {
						fs.rename(pathOld, pathNew, (err, done) => {
							if(err) throw err;
						});
					}
				}
			});
		});
	});
});

