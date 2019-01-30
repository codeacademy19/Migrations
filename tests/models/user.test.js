const model = require('../../models');

describe('user generate', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  it('should make an entry in the database with the name given', async () => {
    await model.User.generate('ajayb');
    await model.User.generate('ajayb');
    expect(await model.User.count()).toEqual(2);
  });
});
describe('user getAllUsers', () => {
  beforeEach(() => {
    model.User.truncate();
  });
  it('should return  entries in the table', async () => {
    await model.User.generate('ajayb');
    const users = await model.User.getAllUsers();
    expect(users.length).toEqual(1);
  });
  it('should return  entry values in the table', async () => {
    await model.User.generate('ajayb');
    const users = await model.User.getAllUsers();
    expect(users[0].dataValues.name).toEqual('ajayb');
  });
  it('should return undefined as there are no entries', async () => {
    // await model.User.generate('ajayb')
    const users = await model.User.getAllUsers();
    expect(users[0]).toEqual(undefined);
  });
});
