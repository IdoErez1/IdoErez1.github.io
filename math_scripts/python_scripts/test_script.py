from pyscript import document, display
from js import console
from sympy import *
x = symbols("x")
output= document.querySelector("#display")
#output.innerHTML = x+2
input_math = document.querySelector("#input")
from sympy.parsing.latex import parse_latex
#expr = parse_latex(input_math.innerHTML, backend='ANTLR')
expr = parse_latex(input_math.innerHTML)
output.innerHTML = simplify(expr)
def process_latex(e):
    output= document.querySelector("#display")
    input_math = document.querySelector("#input")
    expr = parse_latex(input_math.innerHTML)
    output.innerHTML = solve(expr)
    console.log(e)
    console.log(output)
