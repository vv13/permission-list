import { isEmpty, isType } from './utils'

export type CodeRaw = string | number
export type Code = CodeRaw | CodeRaw[]
export interface IOptions {
  permissionCode?: CodeRaw[]
  permissionCodeMap?: { [index: string]: Code }
}

class PermissionList {
  public permissionCode: Map<CodeRaw, CodeRaw> = new Map()
  public permissionCodeMap: Map<any, Code> = new Map()

  constructor(options: IOptions = {}) {
    const { permissionCode, permissionCodeMap } = options
    this.initPermissionCode(permissionCode)
    this.initPermissionCodeMap(permissionCodeMap)
  }

  public initPermissionCode(permissionCode?: CodeRaw[]) {
    if (!permissionCode) return
    if (!isType(permissionCode, 'Array'))
      throw new Error('permissionCode should be an array')
    this.permissionCode = new Map(permissionCode.map((e: CodeRaw) => [e, e]))
  }

  public initPermissionCodeMap(permissionCodeMap?: { [key: string]: Code }) {
    if (!permissionCodeMap) return
    if (!isType(permissionCodeMap, 'Object'))
      throw new Error('permissionCodeMap should be an object')
    this.permissionCodeMap = new Map(Object.entries(permissionCodeMap))
  }

  public check(codes?: Code): boolean {
    if (!codes || isEmpty(codes)) return false
    if (isType(codes, 'String') || isType(codes, 'Number')) {
      return this.permissionCodeMap.has(codes)
        ? this.check(this.permissionCodeMap.get(codes))
        : this.permissionCode.has(codes as CodeRaw)
    } else if (isType(codes, 'Array')) {
      return (codes as CodeRaw[]).some((code: Code) => this.check(code))
    }
    return false
  }

  public checkAll(codes: CodeRaw[]): boolean {
    return (codes as CodeRaw[]).every((code: Code) => this.check(code))
  }
}

export default PermissionList
