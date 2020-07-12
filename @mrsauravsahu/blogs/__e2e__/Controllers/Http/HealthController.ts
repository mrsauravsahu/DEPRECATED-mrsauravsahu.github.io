import supertest from 'supertest';

it('getHealth', async () => {
  const result = await supertest(process.env.BASE_URL).get('/')

  expect(result.status).toBe(200);
  expect(result.body).toEqual({
    data: {
      name: 'blogs',
      version: 'v0.0.0'
    }
  });
})
