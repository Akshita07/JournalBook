from django.db import models
from django.contrib.auth.models import User
from django.utils.html import mark_safe
from markdown import markdown

class Article(models.Model):
    title = models.TextField(max_length=250)
    content = models.TextField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    created_by = models.ForeignKey(User, related_name='articles', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    def get_message_as_markdown(self):
        return mark_safe(markdown(self.content, safe_mode='escape'))
