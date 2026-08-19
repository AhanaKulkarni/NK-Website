import re
import random

with open('src/data/results.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_score(match):
    num = round(90 + random.random() * 8.5, 1)
    return f"score: '{num}%'"

content = re.sub(r"score:\s*'Top Scorer'", replace_score, content)

def replace_photo(match):
    return match.group(0) + ", school: 'NK Academy'"

content = re.sub(r"photoId:\s*'[^']+'", replace_photo, content)

with open('src/data/results.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
