## Audit Logger Middleware

This middleware provides audit logging functionality for Express.js applications. It captures and logs user activities and request details, storing them as audit logs in a database.

### Usage

1. Import the required `Crypto` service for decrypting the user identity.
2. Use the `auditLogger` function as middleware for your Express.js routes.
3. Pass a custom event name to the `auditLogger` function to identify the specific event being logged.
4. The middleware captures user identity, IP address, request query parameters, request body, response body, and status code.
5. The audit log object is then saved to the database (you should implement this part) and the response is sent back to the client.

Note: Ensure you have the necessary setup for decryption and database storage as per your application's requirements.

Feel free to modify the middleware to suit your specific needs, such as integrating with your own logging or storage mechanism.
