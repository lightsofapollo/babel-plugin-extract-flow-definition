import runner from "babel-helper-plugin-test-runner";
import fs from 'fs';
import path from 'path';
import pkg from '../package.json';

const selfRef = path.join(__dirname, '../node_modules', pkg.name);

if (!fs.existsSync(selfRef)) {
  console.log('symlinking', {
    to: selfRef,
    from: path.join(__dirname, '..'),
  });
  const cwd = process.cwd();
  process.chdir(path.join(__dirname, '../node_modules'));
  fs.symlinkSync('../', pkg.name);
  process.chdir(cwd);
}

runner(__dirname);
