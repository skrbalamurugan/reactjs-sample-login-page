import axios from 'axios'

export const register = newUser => {
    return axios 
    .post('/api/register', newUser, {
        headers: {'Content-type':'application/json'}
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

export const login = user => {
    return axios 
    .post('/api/login', {
        email: user.email,
        password: user.password,
        
        headers: {'Content-type':'application/json'}
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}