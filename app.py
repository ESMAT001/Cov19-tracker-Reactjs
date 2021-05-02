import json

dataJson = []
with open('dataSet.txt') as data:
    data.readline()
    for line in data:
       
        line = line.split("\t")
        dataJson.append({
            'location': line[0],
            'source': line[1],
            'vaccines': line[3]
        })
    
dataJson=json.dumps(dataJson)

with open("vaccineDataSet.json",'w') as new_file:
    new_file.write(dataJson)
