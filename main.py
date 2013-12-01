import flask
from flask import Flask, render_template, request, url_for
from conf import conf
import random
import uuid
import json

app = Flask(__name__)
app.config.from_object(conf)

@app.route('/')
def main():
  return render_template('home.html')

@app.route('/day', methods=['GET', 'POST', 'PUT'])
def day():

  with open('data/journal.json') as f:
    journal = json.loads(f.read())

  if request.method == 'GET':
    # Todo: Return the model from the database.

    date = request.args.get("date")
    if (date in journal):
      return flask.jsonify(journal[date])
    else:
      return flask.jsonify({
        # 'id': str(uuid.uuid4()),
        'date': 'xx-xx-xxxx',
        'text': 'Entry not found'
      })

  elif request.method == 'POST':
    data = json.loads(request.data)
    model = {
      'id': str(uuid.uuid4()),
      'date': data['date'],
      'text': data['text']
    }

    with open('data/journal.json', 'w') as f:
      journal[model["date"]] = model
      f.write(json.dumps(journal))

    return flask.jsonify(model)
  elif request.method == 'PUT':
    # Modify existing model.
    pass

@app.route('/foobar')
def foobar():
  with open('data/journal.json') as f:
    data = f.read()
  data = json.loads(data)
  data["wooah"] = "wooooohoooo"

  with open('data/journal.json', 'w') as f:
    f.write(json.dumps(data))

  return flask.jsonify(data)

if __name__ == '__main__':
  app.run(host='localhost', debug=True)
