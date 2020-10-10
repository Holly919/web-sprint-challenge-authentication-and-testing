const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

// server.get("/", (req, res) => {
//     res.json({ api: "I changed all my passwords to 'Incorrect'. So whenever I forget, it will tell me 'Your password is Incorrect'." });
//   });
  

module.exports = server;
