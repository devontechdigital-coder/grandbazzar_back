export const getPaging = (req) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const searchTerm = (req.query.search || "").trim();
  return { page, limit, skip, searchTerm };
};