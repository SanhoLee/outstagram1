/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const sayHello = (req, res) => {
  res.render("home");
};
export const handleSearch = (req, res) => res.send("This is search page.");
