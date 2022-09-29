/*函数节流*/
export function throttle(fn: Function, interval: number) {
  var enterTime = 0 //触发的时间
  var gapTime = interval || 300 //间隔时间，如果interval不传，则默认300ms
  return async function () {
    var context = this
    var backTime = new Date().getTime() //第一次函数return即触发的时间
    console.log(backTime, enterTime, gapTime)
    if (backTime - enterTime > gapTime) {
      enterTime = backTime //赋值给第一次触发的时间，这样就保存了第二次触发的时间
      await fn.call(context, arguments)
    }
  }
}

/*函数防抖*/
export function debounce(fn: Function, interval: number) {
  var timer: NodeJS.Timeout
  var gapTime = interval || 200 //间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer)
    var context = this
    var args = arguments //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args)
    }, gapTime)
  }
}
/**
 * 创建一个GUID
 */
export function Guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

/**
 * 创建一个短一点的GUID
 */
export function shortGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + '-' + s4() + s4() + s4()
}

export function firstCharToUpperCase(str: string) {
  return str.substring(0, 1).toUpperCase() + str.substring(1)
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find(list: Array<any>, f: any) {
  return list.filter(f)[0]
}

interface cacheItemForCopy {
  original: object
  copy: object
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy(obj: any, cache: Array<cacheItemForCopy> = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, (c: cacheItemForCopy) => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  const item = {
    original: obj,
    copy: copy
  }
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push(item)
  if (Array.isArray(copy)) {
    Object.keys(obj).forEach((key) => {
      copy.push(deepCopy(obj[key], cache))
    })
  } else {
    Object.keys(obj).forEach((key) => {
      Object.assign(copy, { key: deepCopy(obj[key], cache) })
      // copy[key] =
    })
  }

  return copy
}

export function copyProps(obj: any, target: any) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null || typeof obj[key] !== 'object') {
      if (key != 'parentId') {
        target[key] = obj[key]
      }
    } else {
      if (target[key] === undefined) {
        target[key] = {}
      }
      if (Array.isArray(obj[key])) {
        target[key] = []
        obj[key].forEach((val: any, _index: number) => {
          if (val === null || typeof val !== 'object') {
            target[key].push(val)
          } else {
            let temp = {}
            copyProps(val, temp)
            target[key].push(temp)
          }
        })
      } else {
        copyProps(obj[key], target[key])
      }
    }
  })
}
/**
 * 获取两个对象属性不同的部分。通常用来做增量存储。
 * @param objCurrent 当前对象
 * @param objTemplate 模版对象
 */
export function getDiffProps(objCurrent: object, objTemplate: object, newObj: object) {
  Object.keys(objCurrent).forEach((key) => {
    // 如果两个属性不相等
    if (objTemplate[key] !== objCurrent[key]) {
      // 但是两个属性的类型相等,并且都存在定义
      if (typeof objTemplate[key] === typeof objCurrent[key] && typeof objTemplate[key] !== 'undefined') {
        // 是对象类型，则需要进一步往下比较.找下一级的差异
        if (typeof objTemplate[key] === 'object') {
          getDiffProps(objCurrent[key], objTemplate[key], newObj[key])
        } else {
          newObj[key] = objCurrent[key]
        }
      } else {
        copyProps(newObj[key], objTemplate[key])
      }
    }
  })
}

/**
 * 获取两个对象属性不同的部分。允许空值。
 * @param objCurrent customcss对象
 * @param curThemeData 主题中的对象
 */
export function getDiffObj(customCss: object, curThemeData: object, diffObj: object) {
  if (customCss !== {}) {
    Object.keys(customCss).forEach((key) => {
      if (customCss[key] !== curThemeData[key]) {
        diffObj[key] = customCss[key]
      }
    })
  }
}

/*
 * @desc: UTC时间与本地时区时间互转
 * @author: 石墨鑫
 * @param { string/date } time: 转换前的时间
 * @param { boolean } utcToLocal: 本地转UTC还是UTC转本地， 默认转UTC转本地
 * */
export function conversionTime(time = '1970-01-01 08:00:00', utcToLocal = true) {
  // @desc:时间小于 '1970-01-01 08:00:00' 这个时间点 后台数据验证会报错 @author: 潘琦果
  let dateUTC = new Date(time).getTime() <= 0 ? 0 : new Date(time).getTime()
  // 获取当前时区
  let localOffset = new Date().getTimezoneOffset() * 60 * 1000
  let localTime
  if (utcToLocal) {
    localTime = dateUTC - localOffset
  } else {
    localTime = dateUTC + localOffset
  }
  const now = new Date(localTime)
  const year = now.getFullYear()
  const month = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1)
  const date = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate()
  const hour = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours()
  const minute = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()
  const second = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds()
  const timeStr = year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  return timeStr
}
/*
 * @desc: 将UTC时间转为用于显示的字符串
 * @author: 石墨鑫
 * @param { date } time:
 * @param { string } format: // yyyy-MM-dd hh:mm:ss.S ==> 2006-07-02 08:09:04.423。 yyyy-M-d ==> 2006-7-2
 * */
export function formatTime(time: Date, fmt: string) {
  if (Object.prototype.toString.call(time) !== '[object Date]') {
    console.log('$formatTime的time参数必须为时间对象')
    return ''
  }
  var o = {
    'M+': time.getMonth() + 1, // 月份
    'd+': time.getDate(), // 日
    'h+': time.getHours(), // 小时
    'm+': time.getMinutes(), // 分
    's+': time.getSeconds(), // 秒
    'q+': Math.floor((time.getMonth() + 3) / 3), // 季度
    S: time.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * 默认的GUID
 */
export const DEFAULT_GUID = '00000000-0000-0000-0000-000000000000'

export async function des_encrypt(data: any) {
  if (typeof window === 'undefined') {
    global.window = {} as any
    const JSEncrypt = require('jsencrypt').default
    let encrypt = new JSEncrypt()
    return await _des_encrypt(encrypt, data)
  } else {
    let jsEncryptModule = await import('jsencrypt')
    let encrypt = new jsEncryptModule.JSEncrypt()
    return await _des_encrypt(encrypt, data)
  }
}

export async function _des_encrypt(encryptor, data: any) {
  let publicKey = `
  -----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCB2kB43bYg4Vmfe9BZQdh+IfcY+O1gt9MrC368w1+gcLHvqfwXLnRyil9cYXF8Yjrnqwq3rDEyjqLvBV8NFnFxPjLrLSddoBWVOnbmGDEwDmL6IwshpKzeO8lGKA4FGF3nathLLC5PJDcLA1ep5pSXleglT0aIOmjpWexEy9uT0QIDAQAB
  -----END PUBLIC KEY-----
  `
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(data)
}

export function getUserNameType(userName: string): string {
  const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
  const regMobile = /^(0|86|17951)?(13[0-9]|14[01456789]|15[012356789]|16[2567]|17[0-8]|18[0-9]|19[012356789])[0-9]{8}$/
  if (regMobile.test(userName)) {
    return 'Phone'
  } else if (regEmail.test(userName)) {
    return 'Email'
  } else {
    return 'UserName'
  }
}

export function _getExpressValue(params, data) {
  let { ctx, loopCtx, eventCtx } = params
  const runtime = ctx.useDataContext()
  if (data && data.id) {
    return runtime.getExpressionValue(data, loopCtx, eventCtx)
  } else {
    return ''
  }
}

/**
 *
 * 根据字段名和路径获取接口返回值
 * @export
 * @param {*} res
 * @param {*} fieldName
 * @param {*} path
 * @return {*}
 */
export function getResFieldValue(res, fieldName, path?: string) {
  if (fieldName === 'errcode' || fieldName === 'errmsg') {
    return res[fieldName]
  } else {
    if (!res.data) return ''
    const pathArr = fieldName.split('.')
    let val = path ?  res.data[path] : res.data
    for(const path of pathArr) {
      val = val[path]
    }
    return val
  }
}

/**
 * 判断对象是否未空对象
 * @param obj 检测对象
 * @returns boolean
 */
export function isEmptyObj(obj) {
  return JSON.stringify(obj) === '{}'
}

/**
 * 判断值是否符合类型
 * @param value 值
 * @param valueType 值类型
 * @returns boolean
 */
 export function isValidType(value , valueType) {
  switch (valueType) {
    case 'TEXT':
      return typeof value === 'string'
    case 'NUMBER':
      return typeof value === 'number'
    case 'BOOL':
      return typeof value === 'boolean'
    case 'ARRAY':
      return Array.isArray(value)
    case 'DATE':
      return value instanceof Date
    default:
      return true
  }
}
