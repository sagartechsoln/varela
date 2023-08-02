const mongoose = require('mongoose');

// Define the Category schema
const ServiceCategorySchema = new mongoose.Schema({
  service_category_name: { type: String, required: true },
  service_content: { type: String, required: true },
  imageService: { type: String},
});

const ServiceCategory = mongoose.model('ServiceCategory', ServiceCategorySchema);

module.exports = ServiceCategory;
