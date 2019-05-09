const fatJsdoc2md = require('@ff0000-ad-tech/fat-jsdoc-to-md')
fatJsdoc2md.createFromClasses(`${__dirname}/../`, `${__dirname}/README.hbs`)
