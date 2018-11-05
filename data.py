import os
from react.render import render_component

# components_path = os.path.join(os.path.dirname(__file__), 'src')

# def path(js_file):
#     return os.path.join(components_path, js_file)

def render():
  comments = [{
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


  store = {'component': 'Data.jsx'}

  rendered = render_component(
      os.path.join(os.getcwd(), 'static', 'js', 'src', 'components', store['component']),
      {
        'comments':comments
      }
  )

  print(rendered)