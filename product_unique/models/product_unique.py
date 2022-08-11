from odoo import api, fields, models , _
from odoo.exceptions import UserError


class ProductTemplateInh(models.Model):
    _inherit = "product.template"

    gnc_code = fields.Integer(string='GNC Code')
    unique_code = fields.Integer(string='Unique Code')

    @api.constrains('gnc_code')
    def remove_duplication_gnc(self):
        if self.gnc_code:
            record = self.env['product.template'].search([('gnc_code', '=', self.gnc_code)])
            if len(record) > 1:
                raise UserError('This GNC Code is already existed')

    @api.constrains('unique_code')
    def remove_duplication_unique_code(self):
        if self.unique_code:
            record = self.env['product.template'].search([('unique_code', '=', self.unique_code)])
            if len(record) > 1:
                raise UserError('This Unique Code is already existed')

    # _sql_constraints = [
    #     ('gnc_code_unique', 'unique(gnc_code)', 'This GNC Code is already existed'),
    #     ('unique_code_unique', 'unique(unique_code)', 'This Unique Code is already existed')]
