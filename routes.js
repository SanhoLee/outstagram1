// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL = ":id";
const EDIT_PROFILE = "/edit_profile";
const CHANGE_PASSWORD = "/change_password";
const ME = "/me";

// PICS
const PICS = "/pics";
const PICS_DETAIL = ":id";
const UPLOAD = "/upload";
const EDIT_PICS = "/edit_pics";
const DELETE_PICS = ":id/delete";

const routes = {
  // global
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,

  // User
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,

  // PICS
  pics: PICS,
  picsDetail: PICS_DETAIL,
  upload: UPLOAD,
  editPics: EDIT_PICS,
  deletePics: DELETE_PICS,
};

export default routes;
