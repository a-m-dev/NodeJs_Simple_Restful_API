function ResponseGenerator() {
  return {
    success({ code, message = "It's OK", result = [] }) {
      return {
        meta: { code, message },
        data: { ...result }
      };
    },
    failure({ code, message = "Something went wrong!", error }) {
      return {
        meta: { code },
        error: { message, ...error }
      };
    }
  };
}

export default ResponseGenerator();
