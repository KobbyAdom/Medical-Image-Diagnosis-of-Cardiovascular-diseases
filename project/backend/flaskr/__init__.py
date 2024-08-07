import os

from flask import Flask
from flask_restful import Resource,Api
from .routes import Predict
from flask_cors import CORS,cross_origin


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    api = Api(app)
    CORS(app,resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)
    api.add_resource(Predict,'/predict')
    

    return app