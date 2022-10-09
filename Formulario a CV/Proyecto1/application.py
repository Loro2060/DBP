from flask import Flask, render_template, request

app = Flask(__name__)

#@app.route("/")
#def hello_world():
    #return "<p>Hello, World!</p>"
    
@app.route("/")
def index():
    return render_template("Menu.html")
    
@app.route("/hello", methods = ["POST"])
def hello():
    Exp = request.form.get("Exp")
    FOR = request.form.get("For")
    IDIOMA = request.form.get("Lang")
    APTITUDES = request.form.get("Apt")
    HABILIDADES = request.form.get("Sk")
    return render_template("ElCV.html", Exp = Exp, FOR = FOR, IDIOMA = IDIOMA, APTITUDES = APTITUDES, HABILIDADES = HABILIDADES)