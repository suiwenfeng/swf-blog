/* eslint-env node */

module.exports = {
  description: 'The default blueprint for swf-blog when installing in an addon.',

  normalizeEntityName() {
    // no-op
  },

  filesToRemove: ['tests/dummy/app/templates/application.hbs'],
};
