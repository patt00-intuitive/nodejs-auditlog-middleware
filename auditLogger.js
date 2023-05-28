const Crypto = require('../services/crypto');

exports.auditLogger = (customEventName) => (req, res, next) => {
    // "iid" is an encrypted string to store user identity
    const { iid } = req.headers;
    const identity = Crypto.Decrypt(iid);

    // Get the IP from the request
    const { ip } = req;

    // Creating an audit log object
    var auditLog = {
        event_name: customEventName,
        user_id: identity.id,
        user_name: identity.name,
        ip: ip,
        request_method: req.method,
        request_query: req.query,
        request_body: JSON.stringify(req.body)
    };

    // Capture the response body and log it
    const originalSend = res.send;
    res.send = function (body) {
        auditLog.response_body = JSON.stringify(body);
        auditLog.status_code = res.statusCode;

        // Save the audit log object to your DB here
        console.log("auditLog", auditLog);

        originalSend.call(this, body);
    };

    next();
};
