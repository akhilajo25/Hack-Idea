# Generated by Django 3.2.7 on 2021-09-11 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idealist_app', '0002_auto_20210911_0943'),
    ]

    operations = [
        migrations.AddField(
            model_name='idea',
            name='tags',
            field=models.ManyToManyField(to='idealist_app.Tag'),
        ),
    ]
