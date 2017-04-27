require("isomorphic-fetch");

function fetchUsers(org) {
  const tokenAuth = process.env.GITHUB_TOKEN
    ? `?access_token=${process.env.GITHUB_TOKEN}`
    : "";

  if (tokenAuth) {
    console.log("using tokenAuth");
  }

  const membersURL = `https://api.github.com/orgs/${org}/members${tokenAuth}`;
  return fetch(membersURL).then(resp => resp.json()).then(users => {
    // If we don't get an array of users then it was likely a failure
    if (Array.isArray(users)) {
      return Promise.all(
        users.map(user => fetch(user.url + tokenAuth).then(resp => resp.json()))
      );
    }
    return Promise.reject(users);
  });
}

module.exports = fetchUsers;
