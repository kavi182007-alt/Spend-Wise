const errorHandler = (err, req, res, next) => {
    // setting status code
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode).json({
        message: err.message,
        // stack trace in development mode for quick debugging
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = { errorHandler };