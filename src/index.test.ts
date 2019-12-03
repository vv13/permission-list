import PermissionList from './index'

let optionAuthCode
let optionAuthMap

beforeEach(() => {
  optionAuthCode = ['auth1', 'auth2', 100]
  optionAuthMap = {
    canFly: 'auth1',
  }
})

describe('initial', () => {
  it('create by standard option', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.permissionCode.get('auth1')).toBe('auth1')
    expect(instance.permissionCodeMap.get('canFly')).toBe('auth1')
  })
  it('create with no data', () => {
    const instance = new PermissionList()
    instance.initPermissionCode(optionAuthCode);
    instance.initPermissionCodeMap(optionAuthMap);
    expect(instance.permissionCode.get('auth1')).toBe('auth1')
    expect(instance.permissionCodeMap.get('canFly')).toBe('auth1')
  })
})

describe('#check', () => {
  it('should return true when check any of item', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.check('auth1')).toBeTruthy()
    expect(instance.check('auth2')).toBeTruthy()
    expect(instance.check(100)).toBeTruthy()
  })
  it('should return true when any array item to be included', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.check(['auth1', 111])).toBeTruthy()
    expect(instance.check(['auth2', 'auth1'])).toBeTruthy()
    expect(instance.check([100, 102])).toBeTruthy()
  })
  it('should return false when item is empty or invalid value', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.check()).toBeFalsy()
    expect(instance.check(111)).toBeFalsy()
    expect(instance.check([123, 'aaa'])).toBeFalsy()
  })
})


describe('#checkAll', () => {
  it ('should return true when all permission in permission-list', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.checkAll([])).toBeTruthy()
    expect(instance.checkAll(['auth1', 'auth2', 100])).toBeTruthy()
  })
  it ('should return false when any permission not in permission-list', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.checkAll(['auth1', 'auth2', 100, 101])).toBeFalsy()
  })
})

describe('#codeMap', () => {
  it('should return true when check canFly in permission-list', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.check(['canFly', '101'])).toBeTruthy()
  })
  it('should return true when checkAll canFly with check', () => {
    const instance = new PermissionList({
      permissionCodeMap: optionAuthMap,
      permissionCode: optionAuthCode,
    })
    expect(instance.checkAll(['canFly', 100])).toBeTruthy()
  })
})
