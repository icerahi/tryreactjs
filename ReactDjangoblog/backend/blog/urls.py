from rest_framework import routers
from .views import (
    PostModelViewSet,
    ProfileView,
    RegisterView,
    UserUpdate,
    ProfileUpdate,)
from django.urls import path,include
from rest_framework.authtoken.views import obtain_auth_token

route = routers.DefaultRouter()
route.register('',PostModelViewSet,basename='post')

urlpatterns=[
    path('',include(route.urls)),
    path('user/profile/',ProfileView.as_view(),name='profile'),
    path('user/login/',obtain_auth_token),
    path('user/register/',RegisterView.as_view()),
    path('user/update/',UserUpdate.as_view()),
    path('profile/update/',ProfileUpdate.as_view()),
]