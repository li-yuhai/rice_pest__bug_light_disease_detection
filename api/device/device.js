import request from '@/utils/request'

// 查询测报灯设备列表
export function listDevice(query) {
  return request({
    url: '/devcice/device/list',
    method: 'get',
    params: query
  })
}

// 查询测报灯设备详细
export function getDevice(deviceId) {
  return request({
    url: '/devcice/device/' + deviceId,
    method: 'get'
  })
}

// 新增测报灯设备
export function addDevice(data) {
  return request({
    url: '/devcice/device',
    method: 'post',
    data: data
  })
}

// 修改测报灯设备
export function updateDevice(data) {
  return request({
    url: '/devcice/device',
    method: 'put',
    data: data
  })
}

// 删除测报灯设备
export function delDevice(deviceId) {
  return request({
    url: '/devcice/device/' + deviceId,
    method: 'delete'
  })
}
