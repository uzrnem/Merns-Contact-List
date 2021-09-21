from flask import Flask, request
from flask_mysqldb import MySQL
from passlib.hash import sha256_crypt

app = Flask(__name__)

app.config.from_pyfile('myconfig.cfg')

mysql = MySQL(app)

@app.route('/')
def index():
    return {'success': True, 'message': 'Welcome'}
# @app.route('/object/<string:id>')

@app.route("/user", methods=['POST'])
def register():
    data = request.get_json()
    name = data['name']
    email = data['email']
    password = sha256_crypt.encrypt(str(data['password']))
    # sha256_crypt.verify(input_password, hash_passwprd)
    cur = mysql.connection.cursor()
    cur.execute("Insert into user(name, email, password) values (%s, %s, %s)", (name, email, password))
    mysql.connection.commit()
    cur.close()
    return {'success': True, 'message' : 'Record Added', 'data' : data}

@app.route("/user/<int:id>", methods=['PUT'])
def put(id):
    data = request.get_json()
    name = data['name']
    email = data['email']
    password = sha256_crypt.encrypt(str(data['password']))
    cur = mysql.connection.cursor()
    cur.execute("update user set name = %s, email = %s, password = %s where id =%s", (name, email, password, id))
    mysql.connection.commit()
    cur.close()
    return {'success': True, 'message' : 'Record Updated', 'data' : data}

@app.route("/user/<int:id>", methods=['GET'])
def get(id):
    cur = mysql.connection.cursor()
    cur.execute("select * from user where id = %s", (id, ))
    data = cur.fetchone()
    cur.close()
    return {'success': True, 'message' : 'Record fetched', 'data' : data}

@app.route("/user/<int:id>", methods=['DELETE'])
def delete(id):
    cur = mysql.connection.cursor()
    cur.execute("delete from user where id = %s", (id, ))
    mysql.connection.commit()
    data = cur.rowcount
    cur.close()
    return {'success': True, 'message' : 'Record Deleted', 'data' : data}

# @app.route("/user", methods=['GET'])
# def get():
#     cur = mysql.connection.cursor()
#     cur.execute("select * from user")
#     data = cur.fetchall()
#     cur.close()
#     return {'success': True, 'message' : 'Record fetched', 'data' : data}

if __name__ == '__main__':
    app.run(debug=True)
