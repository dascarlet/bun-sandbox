Bun.serve({
  port: 3100,
  fetch(req) {
      return new Response("Hello from server.ts!");
  },
});
