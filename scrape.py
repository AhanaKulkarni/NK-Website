import urllib.request
import re

url = 'https://nkacademy.in/events/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

urls = set(re.findall(r'<img[^>]+src="([^"]+)"', html))
for u in urls:
    if 'wp-content/uploads' in u:
        print(u)
