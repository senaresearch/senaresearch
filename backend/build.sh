#!/usr/bin/env bash

set -o errexit  # exit on error

pip install -r requirements.txt

python manage.py collectstatic --no-input

# python manage.py makemigrations user_account 
# python manage.py migrate user_account

# python manage.py makemigrations 
# python manage.py migrate 

# python manage.py makemigrations sena_research
# python manage.py migrate sena_research

# python manage.py showmigrations

python manage.py makemigrations
python manage.py migrate 
