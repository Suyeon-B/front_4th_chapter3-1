import { http, HttpResponse } from 'msw';

import mockEvents from './response/events.json' assert { type: 'json' };
import { Event } from '../types';

// ! HARD
// ! 각 응답에 대한 MSW 핸들러를 작성해주세요. GET 요청은 이미 작성되어 있는 events json을 활용해주세요.
export const mockApiHandlers = [
  http.get('/api/events', () => {
    const { events } = mockEvents as { events: Event[] };
    return HttpResponse.json<Event[]>(events, { status: 200 });
  }),

  http.post('/api/events', async ({ request }) => {
    const newEvent = (await request.json()) as Event;
    return HttpResponse.json(newEvent, { status: 201 });
  }),

  http.put('/api/events/:id', async () => {}),

  http.delete('/api/events/:id', ({ params }) => {}),
];
