import { test } from 'uvu';
import * as assert from 'uvu/assert';
import supertest from 'supertest'

test('getHealth', async () => {
  const result = await supertest(process.env.BASE_URL)
    .get('/');

  assert.is(result.status, 200);
  assert.equal(result.body, {
    data: {
      name: 'blogs',
      version: 'v0.0.0'
    }
  });
})

test.run()
