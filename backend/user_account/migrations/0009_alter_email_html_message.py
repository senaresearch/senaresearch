# Generated by Django 4.1.7 on 2023-07-28 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_account', '0008_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='html_message',
            field=models.TextField(blank=True),
        ),
    ]