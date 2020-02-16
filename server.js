const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(fileUpload());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/community/groups', require('./routes/api/community/groups'));
app.use('/api/community/posts', require('./routes/api/community/posts'));
app.use(
  '/api/crowdfunding/campaigns',
  require('./routes/api/crowdfunding/campaigns')
);
app.use('/api/testing/projects', require('./routes/api/testing/projects'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
