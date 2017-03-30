require("isomorphic-fetch");

function fetchUsers(org) {
  const tokenAuth = process.env.GITHUB_TOKEN
    ? `?access_token=${process.env.GITHUB_TOKEN}`
    : "";
  const membersURL = `https://api.github.com/orgs/${org}/members${tokenAuth}`;
  return fetch(membersURL)
    .then(resp => resp.json())
    .then(users =>
      Promise.all(
        users.map(user => fetch(user.url + tokenAuth).then(resp => resp.json()))
      ));
}

module.exports = fetchUsers;
