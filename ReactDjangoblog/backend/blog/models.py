from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from django.db.models.signals import post_save
from django.dispatch import receiver


class Post(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='posts',default='default.jpg')

    created = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.title


class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    fullname = models.CharField(max_length=30,blank=True,null=True)
    image = models.ImageField(upload_to='profile_pic',default='default.jpg')

    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username


@receiver(post_save,sender=User)
def create_profile(created,instance,*args,**kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)
    