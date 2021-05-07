import PermissionList from './index'

let PermissionCodes

beforeEach(() => {
  PermissionCodes = ['auth1', 'auth2', 100]
})

describe('initial', () => {
  it('create by standard option', () => {
    const instance = new PermissionList(PermissionCodes)
    expect(instance.permissionCode.get('auth1')).toBe('auth1')
  })
  it('create with no data', () => {
    const instance = new PermissionList()
    instance.updatePermissionCode(PermissionCodes)
    expect(instance.permissionCode.get('auth1')).toBe('auth1')
  })
})

describe('#check', () => {
  it('should return true when check any of item', () => {
    const instance = new PermissionList(PermissionCodes)
    expect(instance.check('auth1')).toBeTruthy()
    expect(instance.check('auth2')).toBeTruthy()
    expect(instance.check(100)).toBeTruthy()
    expect(instance.check(101)).toBeFalsy()
  })
})
describe('#checkAny', () => {
  it('should return true when any array item to be included', () => {
    const instance = new PermissionList(PermissionCodes)
    expect(instance.checkAny(['auth1', 111])).toBeTruthy()
    expect(instance.checkAny(['auth2', 'auth1'])).toBeTruthy()
    expect(instance.checkAny([100, 102])).toBeTruthy()
    expect(instance.checkAny([102, 103])).toBeFalsy()
  })
})

describe('#checkAll', () => {
  it('should return true when all permission in permission-list', () => {
    const instance = new PermissionList(PermissionCodes)
    expect(instance.checkAll(['auth1', 'auth2', 100])).toBeTruthy()
  })
  it('should return false when any permission not in permission-list', () => {
    const instance = new PermissionList(PermissionCodes)
    expect(instance.checkAll(['auth1', 'auth2', 100, 101])).toBeFalsy()
  })
})
