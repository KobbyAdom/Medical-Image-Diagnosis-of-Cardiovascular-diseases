import numpy as np
from PIL import Image

def preprocess_image(file_path, target_size=(150, 150)):
    img = Image.open(file_path).convert('L')
    img = img.resize(target_size)
    img_array = np.expand_dims(np.array(img), axis=0)
    img_array = img_array.astype('float32') / 255.0
    return img_array
