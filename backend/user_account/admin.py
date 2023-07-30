from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import PromoterCreationForm, PromoterChangeForm
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from .models import Email

Promoter = get_user_model()
class PromoterAdmin(UserAdmin):
    add_form = PromoterCreationForm
    form = PromoterChangeForm
    model = Promoter
    list_display = ["email", "username", 'id', 'is_active', 'major',] #to control which fields are displayed on the change list page of the admin
    # readonly_fields = [ 'email', 'bio', 'image', "major", "rank", "academic_division", 'degree','last_login', 'date_joined', 'phone']
    fieldsets = [
        (
            'Basic Information',
            {
                "fields": ["username", "email", 'first_name', 'last_name', 'bio', 'phone', 'image'],
            },
        ),
        (
            "Backgrounds",
            {
                "fields": ["major", "rank", "academic_division", 'degree', ],
            },
        ),
        (
            "Permissions",
            {
                "fields": ["is_active", "is_superuser",],
            },
        ),
        (
            "Other Details",
            {
                "fields": ['last_login', 'date_joined'],
            },
        ),
        
    ]
    
    # form = PromoterCreationForm
    # add_form = PromoterCreationForm
    # form = PromoterChangeForm
    # model = Promoter
    # list_display = ["email", "username", 'image']
    # list_display_links = ["username", 'email']

class CustomEmailAdmin(admin.ModelAdmin):
    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Promoter, PromoterAdmin)
admin.site.register(Email, CustomEmailAdmin)
admin.site.unregister(Group)


admin.site.site_header = 'Sena Reasearch Admin Panel'
