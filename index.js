const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

const connectDB = require('./config/db');
const clientRoutes = require('./routes/clients');
const rawMaterialRoutes = require('./routes/rawMaterials');
const stockRoutes = require('./routes/stock');


const app = express();
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(expressLayouts);

// View engine
app.set('view engine', 'ejs');

// Routes
app.use('/clients', clientRoutes);
app.use('/raw-materials', rawMaterialRoutes);
app.use('/', stockRoutes);
// Home
app.get('/', (req, res) => {
  res.render('index', { title: 'Inventory Dashboard' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
