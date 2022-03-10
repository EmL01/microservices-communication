const express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5001,
    jwt = require('jsonwebtoken')

const posts = [
    {
        user_id: 1,
        title: 'Post One'
    },
    {
        user_id: 2,
        title: 'Post Two'
    },
    {
        user_id: 1,
        title: 'Post Three'
    }
]

app.get('/posts', (req, res) => {
    const { authorization } = req.headers
    const { user_id } = jwt.decode(authorization.split(' ')[1], 'secret')
    res.json(posts.filter(el => el.user_id == user_id))
})

app.listen(PORT, () => console.log(`Posts server started on port ${PORT}`))