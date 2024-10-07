from pyscript import window, document

        from pyscript import window, document
        print("text")
        from sympy import *
        x = symbols("x")
        print(x+2)
print("Hello World")

"""

    <!-- PyScript to handle sympy solving -->
    <py-script>
        import js
        import pyodide
        import asyncio

        # Function to solve the equation
        def solve_equation(event):
            from sympy import Eq, symbols, solve
            from sympy.parsing.sympy_parser import parse_expr, standard_transformations, implicit_multiplication_application
            from js import document

            # Get the LaTeX equation from the MathLive input field
            latex_equation = document.getElementById("math-input").getValue()

            if not latex_equation:
                document.getElementById("solution").innerHTML = "Please enter an equation."
                return

            try:
                # Define transformations to handle implicit multiplication, etc.
                transformations = (standard_transformations + (implicit_multiplication_application,))

                # Prepare the variable (symbol)
                x = symbols('x')

                # Simplify LaTeX string to a basic Python equation
                latex_equation = latex_equation.replace('=', '-(') + ')'

                # Parse the equation using sympy's parser with transformations
                parsed_expr = parse_expr(latex_equation, transformations=transformations)

                # Create the equation as `Eq(parsed_expr, 0)`
                equation = Eq(parsed_expr, 0)

                # Solve the equation
                solution = solve(equation, x)

                # Display the solution in the HTML page
                document.getElementById("solution").innerHTML = f"Solution: {solution}"

            except Exception as e:
                # Handle errors gracefully and show them on the page
                document.getElementById("solution").innerHTML = f"Error: {str(e)}"

        # Load SymPy dynamically
        async def load_sympy():
            await pyodide.loadPackage("sympy")

            # Attach the solve function to the button click after SymPy is loaded
            js.document.getElementById("solve-btn").addEventListener("click", solve_equation)

        # Coroutine to start loading SymPy
        async def main():
            await load_sympy()

        # Ensure that the coroutine runs
        asyncio.ensure_future(main())

    </py-script>
"""