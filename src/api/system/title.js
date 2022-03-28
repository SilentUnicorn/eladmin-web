import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/title',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'api/title',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/title',
    method: 'delete',
    data: ids
  })
}

export function getAllTitle() {
  const params = {
    page: 0,
    size: 9999
  }
  return request({
    url: 'api/title',
    method: 'get',
    params
  })
}

export default { add, edit, del }

