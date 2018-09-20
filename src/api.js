/* global fetch */

export const api = 'http://localhost:5300'

const postJson = (url, content) => fetch(url, {
  method: 'post',
  headers: {
    // 'X-Access-Token': localStorage.token,
    'Content-Type': 'application/json'
  },
  // credentials: 'include',
  body: JSON.stringify(content)
})

export const getAllInspirations = side => { // get all inspirations
  return fetch(`${api}/${side}/inspirations`)
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
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const sendUpdateInspiration = (formData, id) => { // update an inspiration
  return fetch(`${api}/inspirations/${id}`, {
export const sendNewImage = (id, body) => { // rm ?
  console.log('le body : ', body)
  return fetch(`${api}/inspirations/${id}/image`, {
    method: 'post',
    // headers: { 'X-Access-Token': localStorage.token },
    body
  })
    .then(res => res.json())
}

export const deleteInspirationDb = params => { // delete an inspiration
  return fetch(`${api}/inspirations/${params.id}`, { method: 'delete' })
    .then(res => res.json())
}
