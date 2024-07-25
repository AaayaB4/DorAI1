from flask import Flask, render_template
from Classes.forms import ResumeForm
from Classes.similarity import calculate_similarity
import os

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY", "default_secret_key")


@app.route("/", methods=["GET", "POST"])
def index():
    form = ResumeForm()
    score = None
    if form.validate_on_submit():
        resume = form.resume.data
        job_description = form.job_description.data
        score = calculate_similarity(resume, job_description)
    return render_template("index.html", form=form, score=score)


if __name__ == "__main__":
    app.run(debug=True)
