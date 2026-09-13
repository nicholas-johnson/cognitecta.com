import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  buildCallcenterEnquiry,
  CallcenterSubmitError,
  enquirySubject,
  submitCallcenterEnquiry,
} from './callcenter.ts';

const enquiry = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  organisation: 'Analytical Engines',
  interest: 'callcenter',
  interestLabel: 'Callcenter',
  course: 'RAG in a Day',
  context: 'We need one conversation across email and voice.',
};

test('builds a web-channel conversation for Callcenter', () => {
  assert.deepEqual(buildCallcenterEnquiry(enquiry), {
    channel: 'web',
    source: 'cognitecta.com/contact',
    customer: {
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      organisation: 'Analytical Engines',
    },
    message: {
      subject: 'Cognitecta enquiry — Analytical Engines — RAG in a Day',
      body: 'We need one conversation across email and voice.',
    },
    metadata: {
      interest: 'callcenter',
      course: 'RAG in a Day',
    },
  });
});

test('omits an empty course from metadata', () => {
  const payload = buildCallcenterEnquiry({ ...enquiry, course: '  ' });
  assert.equal(payload.message.subject, 'Cognitecta enquiry — Analytical Engines — Callcenter');
  assert.deepEqual(payload.metadata, { interest: 'callcenter' });
});

test('subject prefers the course when present', () => {
  assert.equal(enquirySubject(enquiry), 'Cognitecta enquiry — Analytical Engines — RAG in a Day');
});

test('posts the enquiry JSON to the Callcenter ingest URL', async () => {
  const calls: Array<{ url: string; init: RequestInit }> = [];
  const fakeFetch: typeof fetch = async (input, init) => {
    calls.push({ url: String(input), init: init ?? {} });
    return new Response(null, { status: 201 });
  };

  await submitCallcenterEnquiry('https://callcenter.test/api/v1/conversations', enquiry, {
    publishableKey: 'pk_test',
    fetch: fakeFetch,
  });

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, 'https://callcenter.test/api/v1/conversations');
  assert.equal(calls[0].init.method, 'POST');
  const headers = new Headers(calls[0].init.headers);
  assert.equal(headers.get('content-type'), 'application/json');
  assert.equal(headers.get('authorization'), 'Bearer pk_test');
  assert.deepEqual(JSON.parse(String(calls[0].init.body)), buildCallcenterEnquiry(enquiry));
});

test('throws when Callcenter rejects the enquiry', async () => {
  const fakeFetch: typeof fetch = async () => new Response('no', { status: 503 });

  await assert.rejects(
    () => submitCallcenterEnquiry('https://callcenter.test/api/v1/conversations', enquiry, { fetch: fakeFetch }),
    (error: unknown) => {
      assert.ok(error instanceof CallcenterSubmitError);
      assert.equal(error.status, 503);
      return true;
    },
  );
});
