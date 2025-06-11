module.exports.formatResponse = ({
  statusCode = 0,
  message = '',
  data = null,
  error = null,
}) => ({ statusCode, message, data, error });
