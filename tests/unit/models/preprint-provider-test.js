import { moduleForModel, test } from 'ember-qunit';

moduleForModel('preprint-provider', 'Unit | Model | preprint provider', {
  // Specify the other units that are required for this test.
  needs: ['model:preprint', 'model:taxonomy', 'model:license']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
