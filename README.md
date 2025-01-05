# Express.js Inadequate Error Handling

This repository demonstrates a common error in Express.js applications: insufficient error handling during database interactions.  The original code lacks proper handling for database errors and cases where a requested user is not found.  This leads to unhelpful 500 server errors and inconsistent responses.

The `bug.js` file showcases the flawed code.  `bugSolution.js` provides a corrected version with improved error handling that sends appropriate HTTP status codes and more informative error messages.

## How to Reproduce

1. Clone this repository.
2.  Install dependencies (`npm install`).
3. Run `node bug.js`. 
4. Attempt to retrieve a non-existent user ID.  Observe the generic 500 error.
5. Run `node bugSolution.js` and repeat step 4; note the improved 404 response. 