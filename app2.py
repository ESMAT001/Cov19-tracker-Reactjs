text = ""
with open("dataSet.html", 'r') as data:
    text = data.read()

character_indexs = []
for index, c in enumerate(text):
    if c == '"':
        # print(c,index)
        character_indexs.append(index)
# print(text[155:264])
i = 0
linkData = []
while i <= len(character_indexs)-1:
    linkData.append(text[character_indexs[i]+1:character_indexs[i+1]])
    i += 2
import json

linkData = json.dumps(linkData)
with open ("vaccineCountryListLinks.json","w") as new_file:
    new_file.write(linkData)
