# permission-list

an elegant permission list check. 

## How to use it
- [vue-authplugin](https://github.com/vv13/vue-authplugin), a simple Vue auth verify plugin.

## Installation
```sh
$ npm install permission-list
```

### verify(code)
The verify parameter is very flexible. It can be used in the following ways:
- Pass in String and check if the authCode contains this code.
- Pass Array to check if the authCode contains any of the code in the array
- Pass in Object, check whether all key values pass the check, key is the auth name, and value is whether this permission is needed
- Pass the key of authMap, the actual check  detection object is the mapped value


## Usage
If you use `this.$_auth.verify` to verify the success or failure, it will return true or false; using the directives `v-auth`, if the verify is successful, the `data-auth="success"` attribute will be added to the dom method. If the verification fails, data will be added. `data-auth="fail"` and set `display: none`.

### Init
For init plugin, below is the options can be configure:

| key      | desc                      | type          | default | required |
| :------- | ------------------------- | ------------- | ------- | -------- |
| name     | v-{name} and prototype $_{name} | String        | auth    | false    |
| authCode | auth table                | Array \| Map  | []      | true     |
| authMap  | mapping table           | Object \| Map | {}      | false    |

### Methods
#### updateAuthCode(authCode)
- Arguments
  - { Array | Map } authCode

Sometimes authCode would change, so can use it to update authCode. Remember to use it before the beforeCreate lifecycle or beffore

#### verify(code)
- Arguments
  - {String | Object | Array} auth
- Return
  - true or false

Find the authCode, verify that the required code are satisfied, return true if it is satisfied, otherwise return false.
