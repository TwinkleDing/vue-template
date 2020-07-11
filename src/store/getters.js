const getters = {
  userInfo: state => state.common.userInfo,
  loginIn: state => state.common.loginIn,
  loginOut: state => state.common.loginOut,
  user: state => state.common.user,
  color: state => state.common.color,
  route: state => state.common.route,
  colorName: state => state.common.colorName,
  themeColor: state => state.themeColor.themeColor,
};
export default getters;
