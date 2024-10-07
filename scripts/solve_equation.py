from pyscript import document
from js import console
console.log("load point 1")
from sympy import solve, latex

console.log("load point 2")
from sympy.parsing.latex import parse_latex

console.log("load point 3")
def process_latex(e):
    output = document.querySelector("#display")
    input_math = document.querySelector("#math-input")
    expr = parse_latex(input_math.innerHTML)
    output.innerHTML = latex(solve(expr))
    console.log(output)


console.log("load point 4")
#js_button = js.document.getElementById("solve-btn")
#add_event_listener(js_button, "click", process_latex)

loader = document.querySelector("#loader")
loader.style.display = "none"

console.log("load point 5")