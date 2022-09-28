from django.shortcuts import render

# Create your views here.
def index(request):
    # Todo store view count
    # Todo do not store increment view if the qr code was not scanned
    # Todo show view count
    return render(request, "index.html")
