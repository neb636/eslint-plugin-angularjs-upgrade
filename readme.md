
ESLint-plugin-AngularJS-upgrade
=============

Plugin to help make the upgrade from AngularJS to Angular (2) easier. 

### Installation

Install ESLint either locally or globally.

```bash
$ yarn add eslint
```

If you installed ESLint globally, you have to install React plugin globally too. Otherwise, install it locally.

```bash
$ yarn add eslint-plugin-angularjs-upgrade
```


### Configuration

Add plugins section and specify ESLint-plugin-AngularJS-upgrade as a plugin.

```json
{
  "plugins": [
    "angularjs-upgrade"
  ]
}
```


Enable all of the rules that you would like to use. Use our preset to get reasonable defaults quickly, and/or choose your own:

```json
  "rules": {
    "angularjs-upgrade/no-utility-functions": "error"
  }
```