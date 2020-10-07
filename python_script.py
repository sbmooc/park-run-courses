import requests
import geojson

if __name__ == '__main__':
    strava_segment = requests.get('https://www.strava.com/stream/segments/15994796')
    latLng = strava_segment.json()['latlng']
    mp = geojson.LineString([[point[1], point[0]] for point in latLng])
    with open('test.json', 'w+') as file_:
        file_.write(geojson.dumps(mp))
    print('all done, look at test.json')
