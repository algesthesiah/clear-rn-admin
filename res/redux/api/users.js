import 'whatwg-fetch'

const getURL = url => 'http://139.224.135.86:8080/' + url

export const login = user => {
  return fetch(getURL('auth/login'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(json => {
      return json
    })
    .catch(ex => console.log('parsing failed', ex))
}
