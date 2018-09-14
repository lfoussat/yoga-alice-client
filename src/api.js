/* global fetch */

export const api = 'http://localhost:5300'

// const postJson = (url, content) => fetch(url, {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   // credentials: 'include',
//   body: JSON.stringify(content)
// })

export const getAllInspirations = () => { // get all inspirations
  return fetch(`${api}/inspirations`)
    .then(res => res.json())
}

export const getInspirationById = id => { // get an inspiration
  return fetch(`${api}/inspirations/${id}`)
    .then(res => res.json())
}

export const sendInspiration = formData => { // add a new inspiration
  return fetch(`${api}/inspirations`, {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const sendUpdateInspiration = (formData, id) => { // update an inspiration
  return fetch(`${api}/inspirations/${id}`, {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const deleteInspiration = id => { // delete an inspiration
  return fetch(`${api}/inspirations/${id}`, { method: 'delete' })
}
