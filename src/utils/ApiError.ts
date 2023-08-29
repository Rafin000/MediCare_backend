// function createApiError(statusCode, message, isOperational = true, stack = "") {
//   const error = new Error(message);
//   (error as any).statusCode = statusCode;
//   (error as any).isOperational = isOperational;

//   if (stack) {
//     error.stack = stack;
//   } else {
//     Error.captureStackTrace(error, createApiError);
//   }

//   return error;
// }

// export default createApiError;


export default class ApiError extends Error {
  private statusCode;
  private isOperational;
  constructor(statusCode, message, isOperational = true, stack = "") {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
