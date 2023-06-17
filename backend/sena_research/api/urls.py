from django.urls import path, include
from . import views

app_name = 'sena_research'

urlpatterns = [
    path('services-list/', views.services_list),
    path('service-create', views.service_create),
    path('service-update/<int:serviceID>', views.service_update),
    path('service-delete/<int:serviceID>', views.service_delete),
    path('categories', views.get_categories),
    path('promoter-majors', views.get_promoter_majors),
    path('contact-us', views.contact_us),
    path('promoters/search', views.promoters_search),
    path('place-order', views.place_order),

]
