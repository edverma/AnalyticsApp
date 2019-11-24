# TODO: create mongodb connection and retrieve all entries for user

import sys, json
import matplotlib.pyplot as plt

jsonInfo = ''
for line in sys.stdin:
	jsonInfo += line
	break
jsonInfo = json.loads(jsonInfo)

jsonString = json.dumps(jsonInfo)

print(jsonString)
