const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use((req, res, next) => {
  res.header("Access-Control-Expose-Headers", "X-Total-Results, Authorization");
  next();
});
// Use default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// Custom route for handling q and additional query parameters
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === "GET" && req.query.q) {
    const { q, _start, _limit, _sort, _order } = req.query;

    // Fetch all flights
    let flights = router.db.get("flights").value();

    // Filter flights by q (search in title)
    const filteredFlights = flights.filter((flight) =>
      flight.title.toLowerCase().includes(q.toLowerCase())
    );

    // Save the total number of filtered results
    const totalResults = filteredFlights.length;
    console.log(totalResults, "totalResults");

    // Sort flights if _sort and _order are provided
    if (_sort && _order) {
      flights = filteredFlights.sort((a, b) => {
        if (_order === "asc") return a[_sort] > b[_sort] ? 1 : -1;
        return a[_sort] < b[_sort] ? 1 : -1;
      });
    } else {
      flights = filteredFlights; // Default to filtered flights if no sorting
    }

    // Paginate results if _start and _limit are provided
    if (_start && _limit) {
      flights = flights.slice(Number(_start), Number(_start) + Number(_limit));
    }

    // Set the total results count in headers
    res.setHeader("X-Total-Results", totalResults);

    // Return filtered and paginated flights

    return res.jsonp(flights);
  }

  // Default handler for other routes
  next();
});

// Use the default router for other requests
server.use(router);

// Start the server
server.listen(3333, () => {
  console.log("JSON Server is running at http://localhost:3333");
});

// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();

// // Use default middlewares (logger, static, cors, no-cache)
// server.use(middlewares);

// // Custom route for handling q and additional query parameters
// server.use(jsonServer.bodyParser);

// server.use((req, res, next) => {
//   if (req.method === "GET" && req.query.q) {
//     const { q, _start, _limit, _sort, _order } = req.query;

//     // Fetch all flights
//     let flights = router.db.get("flights").value();

//     // Filter flights by q (search in title)
//     flights = flights.filter((flight) =>
//       flight.title.toLowerCase().includes(q.toLowerCase())
//     );

//     // Sort flights if _sort and _order are provided
//     if (_sort && _order) {
//       flights = flights.sort((a, b) => {
//         if (_order === "asc") return a[_sort] > b[_sort] ? 1 : -1;
//         return a[_sort] < b[_sort] ? 1 : -1;
//       });
//     }

//     // Paginate results if _start and _limit are provided
//     if (_start && _limit) {
//       flights = flights.slice(Number(_start), Number(_start) + Number(_limit));
//     }

//     // Return filtered and paginated flights
//     return res.jsonp(flights);
//   }

//   // Default handler for other routes
//   next();
// });

// // Use the default router for other requests
// server.use(router);

// // Start the server
// server.listen(3333, () => {
//   console.log("JSON Server is running at http://localhost:3333");
// });
