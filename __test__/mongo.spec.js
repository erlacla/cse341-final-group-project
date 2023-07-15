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
    db = connection.db('mockConnection');
  });
  afterAll(async () => {
    await connection.close();
  });

  it(
    'should insert a new library into the library collection',
    async () => {
      const library = db.collection('library');

      const mockLibrary = {
        id: 'some-library-id',
        name: 'Emily',
        email: 'emilyButton@gmail.com',
        address: 'address',
        phone: 'phone',
        hours: 'hours',
        schedule: 'schedule',
        links: 'links',
        image: 'image',
      };

      await library.insertOne(mockLibrary);

      const insertedLibrary = await library.findOne({ id: 'some-library-id' });

      expect(insertedLibrary).toEqual(mockLibrary);
    },

    it('should delete a user from the users collection', async () => {
      const library = db.collection('library');
      await library.deleteMany({ id: 'some-library-id' });
      const deletedLibrary = await library.findOne({ id: 'some-library-id' });
      expect(deletedLibrary).toEqual(null);
    })
  );
});
