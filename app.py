from flask import Flask, render_template, request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['POST'])
def search():
    location = request.form['location']
    
    # API de Nominatim para geolocalización
    url = "https://nominatim.openstreetmap.org/search"
    params = {
        'q': location,
        'format': 'json',
        'limit': 1
    }
    headers = {
        'User-Agent': 'FlaskGeolocationApp/1.0'
    }
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        data = response.json()
        
        if data:
            lat = data[0]['lat']
            lon = data[0]['lon']
            display_name = data[0]['display_name']
            
            return render_template('map.html', 
                                 lat=lat, 
                                 lon=lon, 
                                 location=display_name,
                                 search_query=location)
        else:
            return render_template('index.html', 
                                 error="No se encontraron resultados para: " + location)
    
    except requests.exceptions.RequestException as e:
        return render_template('index.html', 
                             error="Error al conectar con el servicio de geolocalización: " + str(e))

if __name__ == '__main__':
    app.run(debug=True)
