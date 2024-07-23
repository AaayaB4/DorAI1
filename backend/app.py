from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load Hugging Face models
trocr_model = pipeline("ocr", model="microsoft/trocr-large-printed")
whisper_model = pipeline("automatic-speech-recognition", model="Systran/faster-whisper-large-v3")

@app.route('/')
def home():
    return "DorAI Backend"

@app.route('/process_cv', methods=['POST'])
def process_cv():
    file = request.files['file']
    # Process the CV using the trocr_model
    text = trocr_model(file)
    return jsonify(text)

@app.route('/transcribe_audio', methods=['POST'])
def transcribe_audio():
    file = request.files['file']
    # Transcribe the audio using the whisper_model
    transcription = whisper_model(file)
    return jsonify(transcription)

if __name__ == '__main__':
    app.run(debug=True)
