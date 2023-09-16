

const Product=require("../model/product")


exports.admin=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }
  const products = [];
 exports.addProduct= (req, res, next) => {
    const product=new Product(req.body.title)
    product.save()
  
  res.redirect('/');
}

 exports.shop= (req, res, next) => {
Product.fetchAll(products=>{
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });

})
 
  
}