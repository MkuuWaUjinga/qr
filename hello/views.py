from django.shortcuts import render, redirect
from django.http import HttpResponse

from .models import Greeting

# Create your views here.
def index(request):
    return redirect("https://en.wikipedia.org/wiki/Special:Random")

def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
