const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000,
    axios = require('axios'),
    jwt = require('jsonwebtoken')

const users = [
    {
        id: 1,
        name: 'User One'
    },
    {
        id: 2,
        name: 'User Two'
    },
    {
        id: 3,
        name: 'User Three'
    }
]

const token = jwt.sign({ user_id: 1 }, 'secret', {})

app.get('/get_posts/:token', async (req, res) => {
    const { data } = await axios.get(`http://localhost:5001/posts`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    return res.json(data)
})

app.listen(PORT, () => console.log(`Users server started on port ${PORT}`))