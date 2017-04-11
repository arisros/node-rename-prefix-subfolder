var fs = require('fs');
var path = require('path');
var glob = require('glob');
var source = 'images/';
var numPrefix = 0;

// fs.readdir(source, (err, files) => {
// 	files.forEach(file => {
// 		var regex = /[.\s]+/g;
// 		var folder = file.replace(/_/g, '-');
// 		if(folder === 'ds_store') {} 
// 		else {
// 			var newName = folder;
// 			fs.rename(source + '/' + file , source + '/' + newName, function(err) {
// 				if(err) throw err;
// 				console.log('completeRename');
// 			});
// 		}
// 		numPrefix++;
// 	});
// });

fs.readdir(source, (err,files) => {
	files.forEach(file => {
		var rootFolder = source + file;
		fs.readdir(rootFolder, (err, eachFile) => {
			eachFile.forEach(item => {
				var newName = item.replace(/_/g, '-');
				fs.rename(rootFolder + '/' + item , rootFolder + '/' + newName, function(err) {
					if(err) throw err;
					console.log('completeRename');
				});
			});
		});
	});
});
