from flask import request, jsonify
from flask_restful import Resource
import os
import numpy as np
from .utils import preprocess_image
from tensorflow.keras.models import load_model

# Load model
model = load_model('model.h5')

class Predict(Resource):
    def post(self):
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})

        file = request.files['file']

        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)

        img_array = preprocess_image(file_path)
        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction)
        classes = ['Angina Pectoris', 'Coronary Artery Disease', 'Left Ventricular Hypertrophy', 'Cardio Vascular Disease']
        predicted_label = classes[predicted_class]

        return jsonify({'predicted_label': predicted_label})
