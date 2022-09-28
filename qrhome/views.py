from django.shortcuts import render

# Create your views here.
def index(request):
    # Todo show stats page if the qr code was not scanned
    # Otherwise show countdown and then redirect to wikipedia page
    return render(request, "index.html")
    #return redirect("https://en.wikipedia.org/wiki/Special:Random")
