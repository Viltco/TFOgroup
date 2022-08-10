from odoo import api, fields, models , _


class InheritProductUnique(models.Model):
    _inherit = "product.product"

    gnc_code = fields.Integer(string='GNC Code')
    unique_code = fields.Char(string='Unique Code')

    _sql_constraints = [
        ('gnc_code_unique', 'unique(gnc_code)', 'This GNC Code is already existed!!'),
        ('unique_code_unique', 'unique(unique_code)', 'This Unique Code is already existed!')]


class InheritProductUniqueTempalte(models.Model):
    _inherit = "product.template"

    gnc_code = fields.Integer(string='GNC Code')
    unique_code = fields.Char(string='Unique Code')

    _sql_constraints = [
        ('gnc_code_unique', 'unique(gnc_code)', 'This GNC Code is already existed!!'),
        ('unique_code_unique', 'unique(unique_code)', 'This Unique Code is already existed!')]
