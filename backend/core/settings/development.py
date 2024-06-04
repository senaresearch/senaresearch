from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-1ts2i=a=q+3&p5$3*mj^eisijjoig8a_kg%5^&fq8p)^s@3$_x'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# ALLOWED_HOSTS += []


# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
# CORS_ALLOWED_ORIGINS = [
#     "https://senaresearch-dz.com",
#     'https://senaresearch-dz.com',
#     'https://senaresearch-dz.com',
#     'http://localhost:3000',
#     'http://localhost:3000',
#     'http://localhost',
#     # Add other allowed origins as needed
# ]

CORS_ALLOW_ALL_ORIGINS = True
# EMAIL SETTINGS
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"
EMAIL_HOST_USER = env('EMAIL_HOST_USER')

