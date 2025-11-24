const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === "/" || url.pathname === "/hello") {
      return new Response("Hello World", {
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server is running at http://localhost:${server.port}`);


