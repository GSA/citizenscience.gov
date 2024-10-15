const fs = require('fs');
const path = require('path');

function findPermalinks(dir) {
  // Read the directory
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err.message}`);
      return;
    }

    // Loop through all the files/directories
    files.forEach((file) => {
      const filePath = path.join(dir, file);

      // Check if it's a file or a directory
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats of file: ${err.message}`);
          return;
        }

        if (stats.isDirectory()) {
          // If it's a directory, recursively search inside it
          findPermalinks(filePath);
        } else if (stats.isFile() && (path.extname(file) === '.md' || path.extname(file) === '.html')) {
          // If it's a .md or .html file, check for the permalink line
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(`Error reading file: ${err.message}`);
              return;
            }

            // Find the line with "permalink: "
            const lines = data.split('\n');
            lines.forEach((line) => {
              const permalinkMatch = line.match(/^permalink:\s*(\/[^\s]*)/);
              if (permalinkMatch) {
                const permalink = permalinkMatch[1];
                console.log(`${permalink}`);
              }
            });
          });
        }
      });
    });
  });
}

// Call the function with the root directory of your project
findPermalinks('./');
