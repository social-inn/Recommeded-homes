import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 300,
  duration: '15s',
  rps: 300
};

export default function() {
  let res = http.get('http://localhost:3883/rooms/' + Math.ceil(Math.random() * 10000000));
  check(res, {
    'status was 200': (r) => r.status == 200,
  });
};