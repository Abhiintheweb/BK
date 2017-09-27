from django.conf.urls import url

from all_migrations.views import GreetingView


urlpatterns = [
	url(r'^dashboard/$', GreetingView.as_view(), name="dashboard"),
]