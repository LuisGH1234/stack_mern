const { promisify } = require('util');
const sass = require('sass');
const fs = require('fs');

sass.render = promisify(sass.render);
fs.writeFile = promisify(fs.writeFile);

/*sass.render({
    file: 'src/app/sass/style.scss',
    outFile: 'src/public/css/style.css',
    outputStyle: 'expanded'
}, (err, result) => {
    if (err) return;
    fs.writeFile('src/public/css/style.css', result.css, err => {
        if (err) return;
    });
});*/

async function compileSASS(node_env = 'dev') {
    try {
        const result = await sass.render({
            file: 'src/app/sass/style.scss',
            outFile: 'src/public/css/style.css',
            outputStyle: node_env !== 'production'? 'expanded' : 'compressed'
        });

        await fs.writeFile('src/public/css/style.css', result.css);
    } catch (error) {
        console.log(error);
    }
}

module.exports = compileSASS;