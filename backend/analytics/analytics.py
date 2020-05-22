# TODO: create mongodb connection and retrieve all entries for user

import sys, json, re
import matplotlib.pyplot as plt

jsonInfo = ''
for line in sys.stdin:
	jsonInfo += line
	break
jsonInfo = json.loads(jsonInfo)

domainCounts = dict()
totalCount = 0
for record in jsonInfo:
    endDomainIndex = -1
    try:
        endDomainIndex = record['url'].index('.com')
    except ValueError:
        try:
            endDomainIndex = record['url'].index('.org')
        except ValueError:
            try:
                endDomainIndex = record['url'].index('.net')
            except ValueError:
                continue
        
    endDomainIndex += 4
    totalCount += 1
    domain = record['url'][0:endDomainIndex]
    if domain not in domainCounts:
        domainCounts[domain] = 1
    else:
        domainCounts[domain] += 1
        
for key in domainCounts.keys():
    domainCounts[key] /= totalCount

jsonString = json.dumps(domainCounts)

print(jsonString)
