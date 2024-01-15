const jsonServer = require("json-server");
const jwt = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const saltRounds = 10;
const secretKey = "secret";


server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(express.json());
server.use(cors());


server.post("/users", (req, res) => {
    const password = req.body.password1;
    const email = req.body.email;
    const existingUser = router.db.get('users').find({ email }).value();

    if (existingUser) {
        res.status(400).json({ er: "User with this email already exist" });
        return;
    } else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                const newUser = {
                    id: Date.now(),
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    gender: req.body.gender,
                    height: req.body.height,
                    weight: req.body.weight,
                    dateOfBirth: req.body.dateOfBirth,
                    favorites: [],
                    daily_rations: [],
                };
                router.db.get("users").push(newUser).write();

                if (err) {
                    console.log(err);
                    res.status(400).json({ er: err });
                } else {
                    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
                    res.json({ token });
                }
            })
        })
    }
});


server.post('/login', (req, res) => {
    const email = req.body.email;

    const user = router.db
        .get('users')
        .find({ email })
        .value();

    if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (err) {
                res.status(401).json({ msg: "Error to compare passwords", er: err });
            } else if (result) {
                const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ msg: "Passwords doesn't match" })
            }
        });
    } else {
        res.status(401).json({ message: 'User not found' });
    }
});

server.get('/users', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;
        const user = router.db.get('users').find({ email }).value();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: "Incorrect token" });
    }
})

server.put('/users', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;
        const user = router.db.get('users').find({ email }).value();
        const data = req.body;
        if (data.height != "") { user.height = data.height; }
        if (data.weight != "") { user.weight = data.weight; }
        user.name = data.name;
        if (data.dateOfBirth != "") { user.dateOfBirth = data.dateOfBirth; }
        if (data.password1) {
            password = data.password1;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    user.password = hash;
                });
            });
        }
        router.db.get('users').find({ email }).assign(user).write();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: "Incorrect token" });
    }
})

server.post('/users/favorites', (req, res) => {
    console.log(req.headers);

    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decode = jwt.verify(token, secretKey);
        const productName = req.body.productName;
        const email = decode.email;
        const user = router.db.get('users').find({ email }).value();
        user.favorites.push(productName);
        router.db.get('users').find({ email }).assign(user).write();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: "Incorrect token" });
    }
})

server.post('/users/daily-rations', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        const decode = jwt.verify(token, secretKey);
        const data = req.body;
        const email = decode.email;
        const user = router.db.get('users').find({ email }).value();
        user.daily_rations.push(data);
        router.db.get('users').find({ email }).assign(user).write();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: "Incorrect token" });
    }
})


server.delete('/users/favorites', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    try {
        const productName = req.query.productName;
        const decode = jwt.verify(token, secretKey);
        const email = decode.email;
        const user = router.db.get('users').find({ email }).value();
        user.favorites = user.favorites.filter(name => name !== productName);
        router.db.get('users').find({ email }).assign(user).write();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: "Incorrect token" });
    }
});

server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});
