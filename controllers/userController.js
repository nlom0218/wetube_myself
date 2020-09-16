import routes from "../routes";

export const getEditProfile = (req, res) => {
  res.render("editProFile", { pageTitle: "Edit Porfile" });
};
export const postEditProfile = (req, res) => {
  res.redirect(routes.home);
};

export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail" });
};
