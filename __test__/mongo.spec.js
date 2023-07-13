const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('library');
  });
  afterAll(async () => {
    await connection.close();
  });

  it(
    'should insert a new library into the library collection',
    async () => {
      const users = db.collection('library');

      const mockLibrary = {
        id: 'some-user-id',
        name: 'Emily',
        email: 'emilyButton@gmail.com',
        address: 'address',
        phone: 'phone',
        hours: 'hours',
        schedule: 'schedule',
        links: 'links',
        image: 'image',
      };

      await users.insertOne(mockLibrary);

      const insertedLibrary = await users.findOne({ id: 'some-user-id' });

      expect(insertedLibrary).toEqual(mockLibrary);
    },

    it('should delete a user from the users collection', async () => {
      const users = db.collection('library');
      await users.deleteMany({ id: 'some-user-id' });
      const deletedUser = await users.findOne({ id: 'some-user-id' });
      expect(deletedUser).toEqual(null);
    })
  );
});
