import os
from flask import Flask, render_template, request, redirect, jsonify
from react.render import render_component
DEBUG = True

app = Flask(__name__)
app.debug = DEBUG

data = [{
    'name': 'Cooper Linsley',
    'age': 26,
    'friend': {
        'name': 'Jason Maurer',
        'age': 23,
    }
    },{
    'name': 'Tanner Linsley',
    'age': 26,
    'friend': {
        'name': 'Jason Maurer',
        'age': 23,
    }
}]
components_path = os.path.join(os.path.dirname(__file__), 'src')

def path(js_file):
    return os.path.join(components_path, js_file)

@app.route('/')
def index():
    store = {'component': 'App.jsx'}

    rendered = render_component(
        os.path.join(os.getcwd(), 'static', 'js', path(store['component'])),
        {
            'data': data,
        },
        to_static_markup=True,
    )

    return render_template('index.html', 
            rendered=rendered,
            store=store)


@app.route('/comment/', methods=('POST',))
def comment():
    data.append({
        'author': request.form['author'],
        'text': request.form['text'],
    })
    return jsonify({'data': data})

@app.route('/clear/')
def clear():
    comments = []
    return jsonify({'data': data})

if __name__ == '__main__':
    app.run()
