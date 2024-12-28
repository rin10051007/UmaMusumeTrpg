export const apiUrls = {
  authUrls: {
    login: '/Api/Auth/Login',
    tokenUp: '/Api/Auth/TokenUpdate',
    isSysPermissionToAdmin: '/Api/Auth/isSysPermissionToAdmin',
    isUmaMusumeGmPlayer: '/Api/Auth/isUmaMusumeGmPlayer',
    isUmaMusumePlayer: '/Api/Auth/isUmaMusumePlayer',
  },
  sysUrls: {
    getList: '/Api/System/User/GetList',
    entry: '/Api/System/User/Entry',
    detail: '/Api/System/User/Detail',
    edit: '/Api/System/User/Edit',
    delete: '/Api/System/User/Delete',
    isLoginIdDuplicate: '/Api/System/User/IsLoginIdDuplicate',
  }
};
