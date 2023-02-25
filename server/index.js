require('dotenv').config();
const colors = require('colors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const connectDB = require('./config/db');
const schema = require('./schema/schema');

const port = process.env.PORT || 5050;

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, console.log(`Server running on port ${port}`));
