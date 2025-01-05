export const apiUrls = {
  authUrls: {
    login: '/Api/Auth/Login',
    tokenUp: '/Api/Auth/TokenUpdate',
    isSysPermissionToAdmin: '/Api/Auth/isSysPermissionToAdmin',
    isUmaMusumeGmPlayer: '/Api/Auth/isUmaMusumeGmPlayer',
    isUmaMusumePlayer: '/Api/Auth/isUmaMusumePlayer',
  },
    userUrls: {
      getList: '/Api/User/GetList',
      entry: '/Api/User/Entry',
      detail: '/Api/User/Detail',
      edit: '/Api/User/Edit',
      delete: '/Api/User/Delete',
      isLoginIdDuplicate: '/Api/User/IsLoginIdDuplicate',
    },
    threadUrls:{
      getListForSystemThread: '/Api/Thread/GetListForSystemThread',
      detail: '/Api/Thread/Detail',
      delete: '/Api/Thread/Delete',
    },
    responseUrls: {}
};
