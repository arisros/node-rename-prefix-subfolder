var fs = require('fs');
var path = require('path');
var glob = require('glob');
var source = 'data/';
var images = {
	jpg 	:	'/**/*.jpg', 
	jpeg	: '/**/*.jpeg', 
	gif		: '/**/*.gif', 
	svg		: '/**/*.svg', 
	png		: '/**/*.png'
	};

/**
 * rename all image file to prefix
 * @param  {string} type of image
 */
function renaming(type) {
	fs.readdir(source, (err, files) => {
		files.forEach(file => {
			var clean = file.replace(/ /g, '-');
			var prefix = clean+'-';
			console.log(prefix);
			glob(source + file + type, function (err, subFiles) {
				if(subFiles.length>0) {
					subFiles.forEach(getFile => {
						if(!path.basename(getFile).startsWith(prefix)) {
							var dirname = path.dirname(getFile);
							var oldFileName = dirname + '/' + path.basename(getFile);
							var newFileName = dirname + '/' + prefix + path.basename(getFile);
							fs.rename(oldFileName, newFileName, (err, done) => {
								if(err) throw err;
							});
						}
					});
				}
			});
		});
	});
}
// invoke images
renaming(images.png);
renaming(images.jpg);
renaming(images.jpeg);
renaming(images.svg);
renaming(images.gif);