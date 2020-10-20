const getters = {
  userInfo: state => state.common.userInfo,
  loginIn: state => state.common.loginIn,
  user: state => state.common.user,
  color: state => state.common.color,
  route: state => state.common.route,
  language: state => state.common.language,
  themeColor: state => state.themeColor.themeColor,
};
export default getters;
