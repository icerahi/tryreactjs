from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer, UserSerializer, ProfileSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import Post, Profile


# Create your views here.

class PostModelViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    queryset=Post.objects.all().order_by('-id')
    serializer_class = PostSerializer




class ProfileView(APIView):
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self,request):
        user = request.user
        #query = User.objects.get(username=user.username)
        pquery = Profile.objects.get(user=user)
       # serializer = UserSerializer(query)
        serializer = ProfileSerializer(pquery)
        return Response({"message":"Get request","userdata":serializer.data})

class RegisterView(APIView):
    def post(self,request):
        serializers = UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({'error':False,"message":"registration success full","data":serializers.data})
        return Response({'error':True,"message":"A user with that username already exists!Try with another."})


class UserUpdate(APIView):
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def post(self,request):
        user = request.user
        data = request.data
        user_obj = User.objects.get(username=user)
        user_obj.email=data['email']
        user_obj.save()
        return Response({"message":"user data is updated!"})


class ProfileUpdate(APIView):
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def post(self,request):
        try:
            user = request.user
            query = Profile.objects.get(user=user)
            serializer_data = ProfileSerializer(query,data=request.data,context={'request':request})
            serializer_data.is_valid()
            serializer_data.save()
            response_msg = {'error':False,"message":"Profile is updated!"}
        except:
            response_msg = {'error':True,"message":"Profile is not updated!"}
        return Response(response_msg)
