# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-03 06:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('store_id', models.IntegerField()),
                ('order_id', models.IntegerField()),
                ('date_of_business', models.DateTimeField()),
                ('menu_price', models.FloatField()),
                ('discounted_amount', models.FloatField()),
                ('price_after_discount', models.FloatField()),
                ('product_id', models.IntegerField()),
                ('migration_table_entry_id', models.IntegerField()),
            ],
            options={
                'db_table': 'orders',
            },
        ),
    ]