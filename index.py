import os
from flask import Flask, render_template, request, redirect
from react.render import render_component

DEBUG = True

app = Flask(__name__)
app.debug = DEBUG

data = [{
    'name': 'Tanner Linsley',
    'age': 26,
    'friend': {
        'name': 'Jason Maurer',
        'age': 23,
    }
    },{
    'name': 'Cooper Linsley',
    'age': 23,
    'friend': {
        'name': 'Jason Borne',
        'age': 22,
    }
}]

@app.route('/')
def index():
    rendered = render_component(
        os.path.join(os.getcwd(), 'src', 'App.jsx'),
        {
            'data': data,
        },
        to_static_markup=True,
    )

    return render_template('public/index.html', rendered=rendered)


# @app.route('/comment/', methods=('POST',))
# def comment():
#     comments.append({
#         'author': request.form['author'],
#         'text': request.form['text'],
#     })
#     return redirect('/')


if __name__ == '__main__':
    app.run()