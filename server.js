const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

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

app.use('/api/ecommerce/products', require('./routes/api/ecommerce/products'));
app.use('/api/ecommerce/stores', require('./routes/api/ecommerce/stores'));
app.use('/api/freelance/services', require('./routes/api/freelance/services'));
app.use('/api/chat/conversations', require('./routes/api/chat/conversations'));

io.on('connection', socket => {
  console.log('Socket IO Connected');

  socket.on('message', msg => {
    console.log(msg);
  });

  socket.emit('message', 'This is a message from server');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
