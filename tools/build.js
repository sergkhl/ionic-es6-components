/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
export default async () => {
  console.log('build');
  await require('./clean')();
  await require('./copy')();
  await require('./bundle')();
};

