from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    path('accounts/', include('user_account.api.urls', namespace='user_accounts')),
    path('sena-api/', include('sena_research.api.urls', namespace='sena_research')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
