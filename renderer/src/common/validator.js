export const validateStatusColor = (status) => {
  switch (status) {
    case "unassigned":
      return "yellow";
    case "active":
      return "green";
    case "completed":
      return "blue";
    default:
      return "yellow";
  }
};
