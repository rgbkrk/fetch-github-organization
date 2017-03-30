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

Result:

```
Promise { <pending> }
[ { login: 'alainakafkes',
    id: 11997668,
    avatar_url: 'https://avatars2.githubusercontent.com/u/11997668?v=3',
    gravatar_id: '',
    url: 'https://api.github.com/users/alainakafkes',
    html_url: 'https://github.com/alainakafkes',
    followers_url: 'https://api.github.com/users/alainakafkes/followers',
    following_url: 'https://api.github.com/users/alainakafkes/following{/other_user}',
    gists_url: 'https://api.github.com/users/alainakafkes/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/alainakafkes/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/alainakafkes/subscriptions',
    organizations_url: 'https://api.github.com/users/alainakafkes/orgs',
    repos_url: 'https://api.github.com/users/alainakafkes/repos',
    events_url: 'https://api.github.com/users/alainakafkes/events{/privacy}',
    received_events_url: 'https://api.github.com/users/alainakafkes/received_events',
    type: 'User',
    site_admin: false,
    name: 'Alaina Kafkes',
    company: null,
    blog: 'http://alainakafk.es',
    location: 'Chicago, IL',
    ...
```
