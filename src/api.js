/* global fetch */

export const api = 'http://localhost:5300'

const postJson = (url, content) => fetch(url, {
  method: 'post',
  headers: {
    'X-Access-Token': localStorage.token,
    'Content-Type': 'application/json'
  },
  // credentials: 'include',
  body: JSON.stringify(content)
})

// INSPIRATIONS
export const getAllInspirations = () => { // get all inspirations
  return fetch(`${api}/fo/inspirations`)
    .then(res => res.json())
}

export const getAllInspirationsForBO = () => {
  return fetch(`${api}/bo/inspirations`,
    {
      headers: { 'X-Access-Token': localStorage.token }
    })
    // .then(inspirations => inspirations.json())
    .then(res => res.json())
}

export const getInspirationById = (id, side) => { // get an inspiration
  return fetch(`${api}/${side}/inspirations/${id}`)
    .then(res => res.json())
}

export const sendInspirationDb = title => { // send a new inspiration
  return postJson(`${api}/inspirations`, { title })
    .then(res => res.json())
}

export const updateInspiration = (id, formData) => { // update an inspiration
  console.log('coucou - ', id, formData)
  return fetch(`${api}/inspirations/${id}`, {
    method: 'post',
    headers: {
      'X-Access-Token': localStorage.token
    },
    body: formData
  })
    .then(res => res.json())
}

export const deleteInspirationDb = params => { // delete an inspiration
  return fetch(`${api}/inspirations/${params.id}`, {
    method: 'delete',
    headers: {
      'X-Access-Token': localStorage.token
    }
  })
    .then(res => res.json())
}

// AUTHENTICATION
export const sendSignUp = (params) =>
  postJson(`${api}/users`, params)
    .then(res => res.json())

export const sendLogin = (params) =>
  postJson(`${api}/auth/local`, params)
    .then(res => res.json())
