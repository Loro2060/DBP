from flask import Flask, render_template, request

app = Flask(__name__)

#@app.route("/")
#def hello_world():
    #return "<p>Hello, World!</p>"
    
@app.route("/")
def index():
    return render_template("index.html")
    
@app.route("/hello", methods = ["POST"])
def hello():
    name = request.form.get("name")
    fn = request.form.get("fn")
    job = request.form.get("job")
    contact = request.form.get("contact")
    tel = request.form.get("tel")
    pais = request.form.get("pais")
    ingles = request.form.get("ingles")
    Lenguajes = request.form.get("Lenguajes")
    aptitudes = request.form.get("aptitudes")
    habilidades = request.form.get("habilidades")
    per = request.form.get("per")
    return render_template("CV.html", name = name, fn = fn, job = job, contact = contact, tel = tel, pais = pais, ingles = ingles, Lenguajes = Lenguajes, aptitudes = aptitudes, habilidades = habilidades, per = per)