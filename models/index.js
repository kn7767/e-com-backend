// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.belongsToMany(Product, {
  through: 'ProductTag'
});

// Products belongToMany Tags (through ProductTag)
Tag.belongsToMany(Product, {
  through: 'ProductTag'
});

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
