let userController = {
  login: (req, res) => {
    res.render("login", { title: "Pagina de login", logged: false });
  },
  register: (req, res) => {
    res.render("register", { title: "Pagina de registracion", logged: false });
  },
  profile: (req, res) => {
    res.render("profile", { title: "Pagina de perfil", logged: true });
  },
  profileEdit: (req, res) => {
    res.render("profileEdit", {
      title: "Pagina de edicion de perfil",
      logged: false,
    });
  },
};
module.exports = userController;
