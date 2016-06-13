from django.contrib import admin

from .models import Category, Product


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name', )}

admin.site.register(Category, CategoryAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = [
        'name', 'slug', 'price', 'stock', 'avaiable', 'created', 'updated'
    ]
    list_filter = ['avaiable', 'created', 'updated']
    list_editable = ['price', 'stock', 'avaiable']
    prepopulated_fields = {'slug': ('name', )}

admin.site.register(Product, ProductAdmin)
