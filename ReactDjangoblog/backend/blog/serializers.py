from rest_framework import serializers, fields
from django.contrib.auth import get_user_model
from rest_framework.fields import CurrentUserDefault

from .models import Post, Profile
from rest_framework.authtoken.models import Token

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=['id','username','password','first_name','last_name','email']

        extra_kwargs={'password':{'write_only':True,'required':True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields ="__all__"
        read_only_fields=['user']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user'] = ProfileSerializer(instance.user.profile).data
        return data

    def validate(self, attrs):

        attrs['user']=self.context['request'].user
        return attrs


class ProfileSerializer(serializers.ModelSerializer):
    posted = PostSerializer(many=True,read_only=True)
    class Meta:
        model = Profile
        fields ="__all__"
        read_only_fields=['user']
        extra_fields = ['posted']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user'] = UserSerializer(instance.user).data
        return data

    def validate(self, attrs):
        attrs['user']=self.context['request'].user
        return attrs
