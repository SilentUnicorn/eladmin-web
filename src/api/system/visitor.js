import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/visitor',
    method: 'post',
    data
  })
}

export function edit(data) {
  return request({
    url: 'api/visitor',
    method: 'put',
    data
  })
}

export function del(ids) {
  return request({
    url: 'api/visitor',
    method: 'delete',
    data: ids
  })
}

export default { add, edit, del }

