from flask import Flask, request, jsonify
from flask_mysqldb import MySQL
from functools import wraps
import jwt
import datetime

app = Flask(__name__)

app.config.from_pyfile('myconfig.cfg')

mysql = MySQL(app)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.args.get('token')
        if not token:
            return {'message': 'Token is missing!' + token}, 403

        try:
            app.config['user'] = jwt.decode(token, app.config['JWT_SECRET'])
        except:
            return {'message': 'Token is invalid!' + token}, 401

        return f(*args, **kwargs)
    return decorated

@app.route('/login')
def login():
    token = jwt.encode({'user': request.args.get('name'), 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['JWT_SECRET'])
    return jsonify({'token': token.decode('UTF-8')})

@app.route('/check')
@token_required
def check():
    return app.config['user']

@app.route('/')
def index():
    return {'success': True, 'message': 'Welcome'}

if __name__ == '__main__':
    app.run(debug=True)
