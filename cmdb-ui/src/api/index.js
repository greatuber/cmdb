import config from '@/config/setting'

const api = {
  Login: config.useSSO ? '/api/sso/login' : '/v1/acl/login',
  Logout: config.useSSO ? '/api/sso/logout' : '/v1/acl/logout',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/account/sms',
  SendSmsErr: '/account/sms_err',
  // get my info
  // UserInfo: '/v1/perms/user/info'
  UserInfo: process.env.VUE_APP_IS_OUTER === 'false' ? '/v1/perms/user/info' : '/v1/acl/users/info',
}
export default api
