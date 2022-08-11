odoo.define('product_unique.sp_pos_search', function (require) {
"use strict";
    var PosDB = require('point_of_sale.DB');
    PosDB.DB = PosDB.include({
//        console.log('nnnn')
        _product_search_string: function(product){
        var str = product.display_name;
        if (product.barcode) {
            str += '|' + product.barcode;
        }
        if (product.default_code) {
            str += '|' + product.default_code;
        }
        if (product.description) {
            str += '|' + product.description;
        }
        if (product.description_sale) {
            str += '|' + product.description_sale;
        }
        if (product.unique_code) {
            str += '|' + product.unique_code;
        }
        if (product.gnc_code) {
            str += '|' + product.gnc_code;
        }
        str  = product.id + ':' + str.replace(/:/g,'') + '\n';
        return str;
        },

});
});
//odoo.define('pos_customers.customer_list', function (require) {
//    'use strict';
//    var rpc = require('web.rpc');
//    var models = require('point_of_sale.models');
//    var PosModel = models.PosModel;
//    var PosModelSuper = PosModel.prototype;
//
//    models.PosModel = PosModel.extend({
//        initialize: function (session, attributes) {
//            var self = this;
//            for (var i = 0; i < self.models.length; i++) {
//                var model = self.models[i];
//                var model_name = model.model;
//
//                if (model_name === 'res.partner') {
//                    model.domain = self.prepare_load_new_partners_domain();
//                }
//            }
//            return PosModelSuper.initialize.call(self, session, attributes);
//        },
//        console.log('kkk')
//        prepare_load_new_partners_domain: function () {
//            return [
//                ['is_pos', '=', true],
//            ];
//        },
//        load_new_partners: function () {
//            var self = this;
//            var def = new $.Deferred();
//            var fields = _.find(this.models, function (model) {
//                return model.model === 'res.partner';
//            }).fields;
//            var domain = self.prepare_load_new_partners_domain();
//
//            rpc.query({
//                model: 'res.partner',
//                method: 'search_read',
//                fields: fields,
//                domain:domain
//
//            },{
//                timeout: 3000,
//                shadow: true,
//            }).then(function (partners) {
//                    if (self.db.add_partners(partners)) {   // check if the partners we got were real updates
//                        def.resolve();
//                    } else {
//                        def.reject();
//                    }
//                }, function (err, event) {
//                    def.reject();
//                });
//            return def;
//        },
//    });
//});
