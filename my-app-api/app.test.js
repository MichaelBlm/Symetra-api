const request = require('supertest');
const app = require('./app'); 

// Test the /api/admin/set-n endpoint
describe('POST /admin/set-n', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app)
      .post('/admin/set-n')
      .send({ n: 5 });
    expect(response.statusCode).toBe(200);
  });
});

// Test the /api/admin/set-discount-code endpoint
describe('POST /admin/set-discount-code', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app)
      .post('/admin/set-discount-code')
      .send({ discountCode: 'TEST' });
    expect(response.statusCode).toBe(200);
  });
});

// Test the /api/admin/report endpoint
describe('GET /admin/report', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(app).get('/admin/report');
    expect(response.statusCode).toBe(200);
  });
});