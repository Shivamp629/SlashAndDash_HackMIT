import requests
import csv

cities = ['BOS', 'CHI', 'ATL', 'MIA', 'SFO', 'LON', 'PAR']
dates = ['2016-09', '2015-09', '2014-09', '2013-09', '2012-09', '2011-09', '2010-09']

# open a file for writing

city_data = open('Amadeus.csv', 'w')

# create the csv writer object

csvwriter = csv.writer(city_data)

count = 0
for date in dates:
    curDate = date
    for city in cities:
        response = requests.get('https://api.sandbox.amadeus.com/v1.2/travel-intelligence/top-destinations', params={'apikey':'OQoEKfe3NCi1kAyVA19hCKNKG2gmAxA2','period': date, 'origin': city, 'number_of_results': '50'})
        json_data = response.json()
        origin = json_data['origin']
        for city in json_data['results']:

              if count == 0:

                     header = city.keys()
                     bList = list(header)
                     bList.append('Origin')
                     
                     print(header)
                     
                     csvwriter.writerow(header)

                     count += 1
                    
              cityValues = list(city.values())
              cityValues.append(origin)
              cityValues.append(date)
              csvwriter.writerow(cityValues)

city_data.close()
