from sklearn import linear_model
import csv
import numpy as np
import sys

travelersDict = {}
costDict = {}
f = open('Amadeus.csv', newline='')
reader = csv.reader(f)
counter = 0
for row in reader:
    if (counter == 0):
        counter += 1
    else:
        travelersDict.setdefault(row[5], []).append(row[0])
        costDict.setdefault(row[5], []).append(row[1])

reg = linear_model.Ridge (alpha = .5)
reg.fit (np.array(travelersDict[sys.argv[1]]).reshape(-1,1), np.array([costDict[sys.argv[1]]]).reshape(-1,1))

      
temp = np.array([24259])
temp = temp.reshape(-1,1)
print(reg.predict(temp))
sys.stdout.flush()
