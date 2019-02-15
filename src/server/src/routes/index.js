// @flow
import fs from 'fs';

let routesMaker = (app) => {
  let file = fs.readdirSync(__dirname);
  let thisFile = __filename.split('\\').pop();
  for (let index = 0; index < file.length; index++) {
    const element = file[index];
    if (element === thisFile) {
      continue;
    }
    let importModule = require('./' + element).default;
    //importModule(app);
  }
};

export default routesMaker;
