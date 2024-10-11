import sympy as sp
import json

# Dictionary to map MathJSON operations to SymPy functions
operation_map = {
    "Add": sp.Add,
    "Subtract": lambda a, b: sp.Add(a, -b),
    "Multiply": sp.Mul,
    "Divide": sp.Rational,  # Rational handles divisions (a/b)
    "Power": sp.Pow,
    "Derivative": sp.Derivative,  # Symbolic derivative
    "Integrate": sp.Integral,     # Symbolic integration
    "Sum": sp.summation,          # Summation
    "Limit": sp.Limit,            # Limits
    "Exp": sp.exp,                # Exponentiation
    "Log": sp.log,                # Logarithms
    "Sin": sp.sin,                # Trigonometric sine
    "Cos": sp.cos,                # Trigonometric cosine
    "Tan": sp.tan,                # Trigonometric tangent
    "Abs": sp.Abs,                # Absolute value
    "Equal": sp.Eq,               # Equality
    "Less": sp.Lt,                # Less than
    "Greater": sp.Gt,             # Greater than
    "Factorial": sp.factorial,    # Factorial
    "Sqrt": sp.sqrt,              # Square root
    "Piecewise": sp.Piecewise,    # Piecewise function
    "Product": sp.product         # Product of sequences
}

# Cache for dynamically created symbols and functions
symbol_cache = {}

# Function to convert MathJSON to a SymPy object
def mathjson_to_sympy(expr):
    if isinstance(expr, list):
        if expr[0] == "Matrix":
            return matrix_to_sympy(expr[1])
        elif expr[0] == "Function":
            # Create a SymPy function with arguments
            return function_to_sympy(expr[1:])
        elif expr[0] == "Derivative":
            # Handle derivative ["Derivative", var1, var2, ...]
            return sp.Derivative(*[mathjson_to_sympy(arg) for arg in expr[1:]])
        elif expr[0] == "Integrate":
            return handle_integral(expr)
        elif expr[0] == "Sum":
            return handle_sum(expr)
        elif expr[0] == "Limit":
            return handle_limit(expr)
        elif expr[0] == "Piecewise":
            return handle_piecewise(expr)
        elif expr[0] == "Product":
            return handle_product(expr)
        elif expr[0] in operation_map:
            # Convert arguments recursively
            args = [mathjson_to_sympy(arg) for arg in expr[1:]]
            return operation_map[expr[0]](*args)
    elif isinstance(expr, str):
        # Handle symbols or functions
        return handle_symbol_or_function(expr)
    elif isinstance(expr, int) or isinstance(expr, float):
        # Numbers are returned as SymPy numbers
        return sp.Integer(expr) if isinstance(expr, int) else sp.Float(expr)
    return None

# Helper function to handle definite integrals (with tuple bounds)
def handle_integral(expr):
    if len(expr) == 3 and isinstance(expr[2], list) and expr[2][0] == "Tuple":
        variable = mathjson_to_sympy(expr[2][1])
        lower_bound = mathjson_to_sympy(expr[2][2])
        upper_bound = mathjson_to_sympy(expr[2][3])
        expression = mathjson_to_sympy(expr[1])
        return sp.Integral(expression, (variable, lower_bound, upper_bound))
    else:
        return sp.Integral(*[mathjson_to_sympy(arg) for arg in expr[1:]])

# Helper function to handle sums
def handle_sum(expr):
    expression = mathjson_to_sympy(expr[1])
    if isinstance(expr[2], list) and expr[2][0] == "Tuple":
        index_var = mathjson_to_sympy(expr[2][1])
        lower_bound = mathjson_to_sympy(expr[2][2])
        upper_bound = mathjson_to_sympy(expr[2][3])
        return sp.summation(expression, (index_var, lower_bound, upper_bound))
    return None

# Helper function to handle products
def handle_product(expr):
    expression = mathjson_to_sympy(expr[1])
    if isinstance(expr[2], list) and expr[2][0] == "Tuple":
        index_var = mathjson_to_sympy(expr[2][1])
        lower_bound = mathjson_to_sympy(expr[2][2])
        upper_bound = mathjson_to_sympy(expr[2][3])
        return sp.product(expression, (index_var, lower_bound, upper_bound))
    return None

# Helper function to handle limits
def handle_limit(expr):
    expression = mathjson_to_sympy(expr[1])
    variable = mathjson_to_sympy(expr[2])
    value = mathjson_to_sympy(expr[3])
    return sp.Limit(expression, variable, value)

# Helper function to handle piecewise expressions
def handle_piecewise(expr):
    conditions = []
    for piece in expr[1][1:]:
        condition = (mathjson_to_sympy(piece[1]), mathjson_to_sympy(piece[0]))
        conditions.append(condition)
    return sp.Piecewise(*conditions)

def sympy_from_mathjson_string(s):
    expr = json.loads(s)
    return mathjson_to_sympy(expr)
