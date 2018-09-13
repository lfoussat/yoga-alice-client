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

export const getAllInspirations = () => {
  return fetch(`${api}/inspirations-yoga`)
    .then(res => res.json())
}

export const sendInspiration = formData => {
  return fetch(`${api}/add-inspiration`, {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const getInspirationById = id => {
  return fetch(`${api}/inspirations-yoga/${id}`)
    .then(res => res.json())
}

export const sendUpdateInspiration = (formData, id) => {
  return fetch(`${api}/update-inspiration/${id}`, {
    method: 'post',
    // 'credentials': 'include',
    body: formData
  })
    .then(res => res.json())
}

export const deleteInspiration = id => {
  return fetch(`${api}/inspirations-yoga/${id}`, { method: 'delete' })
}
