#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RDAP = 'https://rdap.verisign.com/com/v1/domain';
const DELAY_MS = 250;

const namesFile = resolve(dirname(fileURLToPath(import.meta.url)), 'domains.md');

function toCom(line) {
  const name = line.trim();
  if (!name || name.startsWith('#')) return null;
  const host = name.replace(/^https?:\/\//i, '').split('/')[0].toLowerCase();
  return host.endsWith('.com') ? host : null;
}

async function lookup(domain) {
  const res = await fetch(`${RDAP}/${encodeURIComponent(domain)}`, {
    headers: { accept: 'application/rdap+json, application/json' },
  });

  if (res.status === 404) {
    return { domain, status: 'available' };
  }

  if (!res.ok) {
    return { domain, status: 'error', detail: `HTTP ${res.status}` };
  }

  const data = await res.json();
  const registrar = data.entities
    ?.find((entity) => entity.roles?.includes('registrar'))
    ?.vcardArray?.[1]?.find((entry) => entry[0] === 'fn')?.[3];
  const event = data.events?.find((item) => item.eventAction === 'registration');

  return {
    domain,
    status: 'registered',
    registrar: registrar || undefined,
    registered: event?.eventDate?.slice(0, 10),
  };
}

function pad(value, width) {
  return String(value ?? '').padEnd(width);
}

const names = (await readFile(namesFile, 'utf8'))
  .split(/\r?\n/)
  .map(toCom)
  .filter(Boolean);

if (names.length === 0) {
  console.error(`No domain names found in ${namesFile}`);
  process.exit(1);
}

const results = [];
for (const [index, domain] of names.entries()) {
  results.push(await lookup(domain));
  if (index < names.length - 1) {
    await new Promise((resolveDelay) => setTimeout(resolveDelay, DELAY_MS));
  }
}

const nameWidth = Math.max(6, ...results.map((row) => row.domain.length));
console.log(`${pad('DOMAIN', nameWidth)}  STATUS      REGISTRAR`);
for (const row of results) {
  const extra = [row.registrar, row.registered, row.detail].filter(Boolean).join('  ');
  console.log(`${pad(row.domain, nameWidth)}  ${pad(row.status.toUpperCase(), 10)}  ${extra}`);
}

const available = results.filter((row) => row.status === 'available').length;
const registered = results.filter((row) => row.status === 'registered').length;
const errors = results.filter((row) => row.status === 'error').length;
console.log(`\n${available} available, ${registered} registered${errors ? `, ${errors} errors` : ''}`);

if (errors) process.exit(2);
