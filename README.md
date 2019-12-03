# permission-list

an elegant permission list check. 

## Installation
```sh
$ npm install permission-list
```

## Usage

```
import PermissionList from 'permission-list'

const Permission = new PermissionList({
  permissionCode: [1, 2, 3],
})

Permission.check() // false
Permission.check(1) // true
Permission.check(1, 2, 3) // true
Permission.check([1, 4]) // true

Permission.checkAll([]) // true
Permission.checkAll([1, 2]) // true
Permission.checkAll(1, 2, 3, 4) // false

```

## Who use it
- [vue-authplugin](https://github.com/vv13/vue-authplugin), a simple Vue auth verify plugin.


## API
### check

### checkAll

### initPermissionCode

### initPermissionCodeMap
