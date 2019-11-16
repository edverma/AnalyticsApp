# TODO: create mongodb connection and retrieve all entries for user

import sys, json
import matplotlib.pyplot as plt

jsonInfo = ''
for line in sys.stdin:
	jsonInfo += line
	break
jsonInfo = json.loads(jsonInfo)

jsonString = ''
for info in jsonInfo:
    jsonString += json.dumps(info)

print(jsonString)
