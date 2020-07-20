module.exports = {
  name: 'feature-shell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
