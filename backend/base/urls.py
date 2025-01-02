from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('api/search/', views.SearchTVShows.as_view(), name='search-tv-shows'),
    path('api/episodes/<int:show_id>/', views.GetEpisodes.as_view(), name='get-episodes'),
]

