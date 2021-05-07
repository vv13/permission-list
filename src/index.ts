export type PermissionCode = string | number

class PermissionList {
  public permissionCode: Map<PermissionCode, PermissionCode> = new Map()

  constructor(permissionCodes: PermissionCode[] = []) {
    this.updatePermissionCode(permissionCodes)
  }

  public updatePermissionCode(permissionCodes: PermissionCode[]) {
    this.permissionCode = new Map(permissionCodes.map((e) => [e, e]))
  }

  public check(codes: PermissionCode): boolean {
    return this.permissionCode.has(codes)
  }

  public checkAny(codes: PermissionCode[]): boolean {
    return codes.some((code) => this.check(code))
  }

  public checkAll(codes: PermissionCode[]): boolean {
    return codes.every((code) => this.check(code))
  }
}

export default PermissionList
