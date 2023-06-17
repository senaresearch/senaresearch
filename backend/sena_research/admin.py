from django.contrib import admin
from .models import Order, Category, Service, ContactUs, Order
from rest_framework.authtoken.models import TokenProxy

# FIXME: unregister auth token model
# admin.site.unregister(TokenProxy)

class CustomCategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ["name", "id",]
    
class CustomContactUs(admin.ModelAdmin):
    model = ContactUs
    list_display = ["fullname", "sent_on",]
    readonly_fields = ["fullname", "sent_on", "phone", "email", "message"]
    
class CustomService(admin.ModelAdmin):
    model = ContactUs
    list_display = ["name", "category", 'promoter']
    # readonly_fields = ["fullname", "sent_on", "phone", "email", "message"]
    
class OrderService(admin.ModelAdmin):
    model = Order
    list_display = ['fullname', 'promoter', 'service', ] 

admin.site.register(Order, OrderService)
admin.site.register(Category, CustomCategoryAdmin)
admin.site.register(Service, CustomService)
admin.site.register(ContactUs, CustomContactUs)

