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
    console.log(input_math)
    expr = parse_latex(input_math.value)
    console.log(expr)
    output.innerHTML = latex(solve(expr))
    #console.log(output)


console.log("load point 4")
#js_button = js.document.getElementById("solve-btn")
#add_event_listener(js_button, "click", process_latex)

loader = document.querySelector("#loader")
loader.style.display = "none"

console.log("load point 5")



RANDOM JAVASCRIPT
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  let textInput = document.getElementById("math-input")
  textInput.addEventListener(onchange, )
  // helpDiv = document.getElementsByClassName["help"][0];
  // helpDiv.onclick = () =>{
  //   helpDiv.classList.toggle("hidden")
  // }
</script>