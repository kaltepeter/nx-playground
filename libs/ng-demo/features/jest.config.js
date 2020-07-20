module.exports = {
  name: 'ng-demo-features',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ng-demo/features',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
