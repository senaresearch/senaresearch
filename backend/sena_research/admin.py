from django.contrib import admin
from .models import Student, Category, Service, ContactUs
from rest_framework.authtoken.models import TokenProxy

# FIXME: unregister auth token model
# admin.site.unregister(TokenProxy)

class CustomCategoryAdmin(admin.ModelAdmin):

    model = Category
    list_display = ["name", "id",]


admin.site.register(Student)
admin.site.register(Category, CustomCategoryAdmin)
admin.site.register(Service)
admin.site.register(ContactUs)

