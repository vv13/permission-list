# permission-list

simple permission code check list. 

## Installation
```sh
$ npm install permission-list
```

## Usage

```
import PermissionList from 'permission-list'

const Permission = new PermissionList([1, 2, 3])

Permission.check(1) // true
Permission.check(2) // true
Permission.check(4) // false

Permission.checkAll([1, 2]) // true
Permission.checkAll(1, 2, 3, 4) // false

Permission.checkAny([1, 2]) // true
Permission.checkAny([1, 2, 3, 4]) // true
```

## API
```
export declare type PermissionCode = string | number;

declare class PermissionList {
    permissionCode: Map<PermissionCode, PermissionCode>;
    constructor(permissionCodes?: PermissionCode[]);
    updatePermissionCode(permissionCodes: PermissionCode[]): void;
    check(codes: PermissionCode): boolean;
    checkAny(codes: PermissionCode[]): boolean;
    checkAll(codes: PermissionCode[]): boolean;
}
```

## Who use it
- [vue-authplugin](https://github.com/vv13/vue-authplugin), a simple Vue auth verify plugin.
