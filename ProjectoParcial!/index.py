from flask import Flask, render_template, request

app = Flask(__name__)

#@app.route("/")
#def hello_world():
    #return "<p>Hello, World!</p>"
    
@app.route("/")
def index():
    return render_template("Menu.html")
    
@app.route("/hello", methods = ["post"])
def hello():
    # request.form.get()
    name = request.form.get("name")
    fecha = request.form.get("fecha")
    telf = request.form.get("telf")
    email = request.form.get("email")
    ocupacion = request.form.get("ocupacion")
    pais = request.form.get("Pais")
    ingles = request.form.get("ingles")
    lenguajes = request.form.get("lang")
    Dibujar = request.form.get("Dibujar")
    Meditar = request.form.get("Meditar")
    perfil = request.form.get("Perfil")

    return render_template("curriculum.html", name = name, fecha = fecha, telf = telf, email = email, ocupacion = ocupacion, pais = pais, ingles=ingles, lenguajes = lenguajes, Dibujar = Dibujar, Meditar = Meditar, texto = perfil)
