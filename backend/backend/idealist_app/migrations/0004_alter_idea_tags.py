# Generated by Django 3.2.7 on 2021-09-11 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('idealist_app', '0003_idea_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='tags',
            field=models.ManyToManyField(related_name='related_tags', to='idealist_app.Tag'),
        ),
    ]
