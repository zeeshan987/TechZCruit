const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/community/profiles'));
app.use('/api/posts', require('./routes/api/community/posts'));
app.use('/api/community/groups', require('./routes/api/community/groups'));
app.use(
  '/api/crowdfunding/campaign',
  require('./routes/api/crowdfunding/campaign')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
