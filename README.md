# fetch-github-organization

Fetch users from a github organization deeply.

:warning: This interface may change!

## Installation

npm install --save fetch-github-organization

## Usage

```js
const fetchUsers = require('fetch-github-organization');
fetchUsers('nteract')
  .then(x => console.log(x))
```
