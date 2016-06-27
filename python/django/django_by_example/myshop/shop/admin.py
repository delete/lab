from django.contrib import admin

from parler.admin import TranslatableAdmin

from .models import Category, Product


class CategoryAdmin(TranslatableAdmin):
    list_display = ['name', 'slug']

    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name', )}

admin.site.register(Category, CategoryAdmin)


class ProductAdmin(TranslatableAdmin):
    list_display = [
        'name', 'slug', 'price', 'stock', 'avaiable', 'created', 'updated'
    ]
    list_filter = ['avaiable', 'created', 'updated']
    list_editable = ['price', 'stock', 'avaiable']

    def get_prepopulated_fields(self, request, obj=None):
        return {'slug': ('name', )}

admin.site.register(Product, ProductAdmin)
