from react.render import render_component
import query as q

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



render_component(path='../Data.js', props=data)