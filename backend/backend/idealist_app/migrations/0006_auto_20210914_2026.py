# Generated by Django 3.2.7 on 2021-09-14 20:26

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('idealist_app', '0005_employee_idea_vote'),
    ]

    operations = [
        migrations.AddField(
            model_name='idea',
            name='createdby',
            field=models.CharField(default=django.utils.timezone.now, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='idea',
            name='votes',
            field=models.IntegerField(default=0),
        ),
    ]
