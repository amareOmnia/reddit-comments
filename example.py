import os
from flask import Flask, render_template, request, redirect, jsonify
from flask_cors import CORS, cross_origin

import data as d

DEBUG = True

app = Flask(__name__)
app.debug = DEBUG
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

client = d.Data()
data = client.ping_query()
columns = d.get_columns()

@app.route('/comments/')
@cross_origin()
def comments():
    return jsonify({
        'data': data,
        'columns': columns
    })

@app.route('/comment/', methods=('POST',))
@cross_origin()
def comment():
    data.append({
        'author': request.form['author'],
        'text': request.form['text'],
    })
    return jsonify({'data': data})

@app.route('/clear/')
@cross_origin()
def clear():
    data = []
    return jsonify({'data': data})

if __name__ == '__main__':
    app.run()
