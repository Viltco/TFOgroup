odoo.define('product_unique.customer_fields', function(require){
"use strict";

    var models = require('point_of_sale.models');
    models.load_fields('product.product', ['gnc_code', 'unique_code']);


//    _product_search_string: function(product){
//        var str = product.display_name;
//        if (product.barcode) {
//            str += '|' + product.barcode;
//        }
//        if (product.default_code) {
//            str += '|' + product.default_code;
//        }
//        if (product.description) {
//            str += '|' + product.description;
//        }
//        if (product.description_sale) {
//            str += '|' + product.description_sale;
//        }
//        if (product.custom_field) {
//            str += '|' + product.custom_field;
//        }
//        str  = product.id + ':' + str.replace(/:/g,'') + '\n';
//        return str;
//    },

});
