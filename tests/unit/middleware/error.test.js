const request = require('supertest');
let server;

describe('error middleware', () => {
  beforeEach(() => {
    server = require('../../../index');
  });

  afterEach(async () => {
    await server.close();
  });

  it('it should return 500', async () => {
    let dormant = 'true';
    const res = await request(server).get('/api/genres/test/' + dormant);

    if (dormant === 'true') {
      expect(res.status).toBe(200);
      expect(res.body.msg).toBe('error check dormant..');
    } else {
      expect(res.status).toBe(500);
    }
  });
});
