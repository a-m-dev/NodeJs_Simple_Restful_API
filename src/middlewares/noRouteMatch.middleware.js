export default function noRouteMatch(req, res, next) {
  const err = new Error("Not Found Error");
  err.status = 404;
  next(err);
}
