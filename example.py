import os
from flask import Flask, render_template, request, redirect, jsonify
from flask_cors import CORS, cross_origin

import data as d

# default_headers = {
#     'min_score' : '50',
#     'ignore_empties' : True,
#     'ignore_http' : True,
#     'subreddit' : 'philosophy science',
#     'total_amount' : '100'
# }

DEBUG = True
app = Flask(__name__)
app.debug = DEBUG
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
client_server = d.Data()
columns = d.get_columns()

@app.route('/query/', methods=('POST',))
@cross_origin()
def comment():
    print("POST received")
    new_headers = request.get_json()
    data = client_server.ping_query(new_headers)
    return jsonify({
        'data': data,
        'columns': columns})

@app.route('/clear/')
@cross_origin()
def clear():
    data = []
    return jsonify({'data': data})

if __name__ == '__main__':
    app.run()
