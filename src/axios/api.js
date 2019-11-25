import request from './request'
export const getPersonInfo = data => {
    return request({
        url: '/person_pay/getpersoninfo',
        method: 'post',
        data
    })
};

export function saveDept(data) {
  return request({
    url: '/api/business/saveDept',
    method: 'post',
    data
  })
}

export function findDeptByPage(data) {
  return request({
    url: '/api/business/findDeptByPage',
    method: 'post',
    data
  })
}
export function removeDept(data) {
  return request({
    url: '/api/business/removeDept',
    method: 'post',
    data
  })
}

export function updateDept(data) {
  return request({
    url: '/api/business/updateDept',
    method: 'post',
    data
  })
}

export function savePlainUser(data) {
  return request({
    url: '/api/business/savePlainUser',
    method: 'post',
    data
  })
}

export function updatePlainUser(data) {
  return request({
    url: '/api/business/updatePlainUser',
    method: 'post',
    data
  })
}

export function findUserByPage(data) {
  return request({
    url: '/api/business/findUserByPage',
    method: 'post',
    data
  })
}

export function findAuthorityGroup() {
  console.log('aaaaaaaa');
  return request({
    url: '/api/business/findAuthorityGroup',
    method: 'post'
  })
}

export function saveRole(data) {
  console.log('aaaaaaaa');
  return request({
    url: '/api/business/saveRole',
    method: 'post',
    data
  })
}

export function updateRole(data) {
  console.log('aaaaaaaa');
  return request({
    url: '/api/business/updateRole',
    method: 'post',
    data
  })
}

export function findRoleByPage(data) {
  console.log('aaaaaaaa');
  return request({
    url: '/api/business/findRoleByPage',
    method: 'post',
    data
  })
}

export function removeRole(data) {
  console.log('aaaaaaaa');
  return request({
    url: '/api/business/removeRole',
    method: 'post',
    data
  })
}