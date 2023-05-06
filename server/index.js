import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import session from 'express-session';

import User from './mongodb/models/user.js';
import connectDB from './mongodb/connect.js';
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Configure the local authentication strategy
passport.use(new LocalStrategy(User.authenticate()));

// Configure the Passport.js user serialization and deserialization functions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Create a session for the authenticated user
const sessionConfig = {
  secret: 'your secret key here',
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionConfig));

// Initialize Passport.js and restore authentication state, if any, from the session.
app.use(passport.initialize());
app.use(passport.session());

// Middleware that adds the current authenticated user object as a `user` property on the `req` object
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use('/', userRoutes)
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from DALL.E!',
  });
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();