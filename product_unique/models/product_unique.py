from odoo import api, fields, models , _


class InheritProductUnique(models.Model):
    _inherit = "product.product"

    unique_code_1 = fields.Char(string='Unique Code 1')
    unique_code_2 = fields.Char(string='Unique Code 2')

    _sql_constraints = [
        ('unique_code_1_unique', 'unique(unique_code_1)', 'Cant be duplicate value For Unique Code 1!'),
        ('unique_code_2_unique', 'unique(unique_code_2)', 'Cant be duplicate value For Unique Code 2!')]


class InheritProductUniqueTempalte(models.Model):
    _inherit = "product.template"

    unique_code_1 = fields.Char(string='Unique Code 1')
    unique_code_2 = fields.Char(string='Unique Code 2')

    _sql_constraints = [
        ('unique_code_1_unique', 'unique(unique_code_1)', 'Cant be duplicate value For Unique Code 1!'),
        ('unique_code_2_unique', 'unique(unique_code_2)', 'Cant be duplicate value For Unique Code 2!')]
