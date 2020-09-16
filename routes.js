const routes = {
  // Global
  home: "/",
  join: "/join",
  login: "/login",
  logout: "/logout",
  search: "/search",
  // Users
  users: "/users",
  editProfile: "/edit-profile",
  changePassword: "/change-password",
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return "/:id";
    }
  },
  // Videos
  videos: "/videos",
  upload: "/upload",
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return `/:id`;
    }
  },
  editVideo: "/:id/edit",
  deleteVideo: "/:id/delete",
};

export default routes;
