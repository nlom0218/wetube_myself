import routes from "../routes";
import { dbvideos } from "../db.js";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", dbvideos });
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};

export const postJoin = (req, res) => {
  const {
    body: { password, password2, email, nickname },
  } = req;
  if (password === password2) {
    res.redirect(routes.login);
  } else {
    res.status(404);
    res.render("join", { pageTitle: "JOIN" });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  //const searchingBy = req.query.term;
  res.render("search", { pageTitle: "SEARCH", searchingBy, dbvideos });
};
