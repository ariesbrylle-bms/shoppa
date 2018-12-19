require('marko/node-require');
let express = require('express');
let app = express();
let bodyParser = require('body-parser'); // module and middleware
let markoExpress = require('marko/express');
let SimpleJsonStore = require('simple-json-store');
var randtoken = require('rand-token');
const multer = require('multer');
const fs = require('fs');
let store = new SimpleJsonStore('./data.json', { products: [] });
let port = 8800;

const path = require('path');
let viewsDirectory = path.join(__dirname,'/server/views');
let publicDirectory = path.join(__dirname, '/public');
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2
})

app.use(express.static(publicDirectory));
app.use(bodyParser.urlencoded({ extended: true })); // process
app.use(markoExpress());

const upload = multer({
  dest: './public/uploads'
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

app.get('/', function(req,res){
  let view = require(path.join(viewsDirectory,'index.marko'));

  let data = {
    title : 'Shoppa',
    products: store.get('products')
  };
  res.marko(view, data);
});

app.get('/addProduct', function(req,res){
  let view = require(path.join(viewsDirectory,'product.marko'));
  let data = {
    title : 'Shoppa'
  };
  res.marko(view, data);
});

app.get('/product/:id', (req, res) => {
  let view = require(path.join(viewsDirectory,'productDetails.marko'));
  let product = [];
  let prod = store.get('products');
  product.push(prod.find(prod => parseInt(prod.id) === parseInt(req.params.id)));
  
  let data = {
    title : product[0].productName,
    products: product
  };

  res.marko(view, data);
});


app.post('/addProduct', upload.single('picture' /* name attribute of <file> element in your form */), (req, res) => {
  const tempPath = req.file.path;
  var fileExt = path.extname(req.file.originalname).toLowerCase();

  var fname = randtoken.generate(7);
  const targetPath = path.join(__dirname, './public/img/'+ fname  + fileExt);

  if(fileExt === '.png' || fileExt === '.jpg' || fileExt === '.jpeg' || fileExt === '.tif' || fileExt === '.gif') { // eslint-disable-line
      fs.rename(tempPath, targetPath, err => {
          if(err) { return console.log(err); }

          const product = store.get('products');
          const newProduct = {
              id: product.length > 0 ? product[product.length - 1].id + 1 : 1,
              productName: req.body.productName,
              description: req.body.description,
              price : req.body.amount,
              priceStr : formatter.format(req.body.amount),
              img : '/img/'+ fname + fileExt,

          };

          product.push(newProduct);
          store.set('products', product);
          console.log(product);
          res.redirect('/');
      });
  } else {
      fs.unlink(tempPath, err => {
          if(err) { return console.log(err); }

          res.json({
              status: 'Error',
              message: 'Image File Only',
              path: ''
          });
      });
  }
});

app.listen(port, function(err){
  if (err) { return console.log(err);}
  console.log(`Listening to ` + port);
});