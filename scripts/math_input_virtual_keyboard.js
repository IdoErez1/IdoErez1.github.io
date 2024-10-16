const mathInput = document.getElementById('math-input');
const environmentRadios = document.querySelectorAll('input[name="environment"]');

const algebraVirtualKeyboard = {
    rows: [
        ["+", "-", "\\times", "\\frac{#@}{#@}", "=", ".", "(", ")", "\\sqrt{#0}", "#@^{#?}"],
        ["\\int_{#?}^{#?} #@ \\mathrm{d}x", "\\sum_{#?}^{#?}", "\\prod_{#?}^{#?}", "\\lim_{#? \\to #?}"],
        ["\\sin", "\\cos", "\\tan", "\\log", "\\ln"],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    ]
};

const algebraInlineShortcuts = {
    "int": "\\int #@ \\mathrm{d}x",
    "sum": "\\sum_{#?}^{#?}",
    "prod": "\\prod_{#?}^{#?}",
    "lim": "\\lim_{#? \\to #?}",
    "sin": "\\sin",
    "cos": "\\cos",
    "tan": "\\tan",
    "log": "\\log",
    "ln": "\\ln"
};

const algebraMenuItems = [
    {
        label: 'Copy',
        onMenuSelect: () => console.log('Copy')
    },
    {
        label: 'Paste',
        onMenuSelect: () => console.log('Paste')
    },
    { type: 'divider' },
    {
        label: 'Algebra',
        submenu: [
            {
                label: 'Integral',
                onMenuSelect: () => console.log('Integral Selected')
            },
            {
                label: 'Sum',
                onMenuSelect: () => console.log('Sum Selected')
            }
        ]
    },
];

const matricesVirtualKeyboard = {
    rows: [
        ["+", "-", "\\times", "\\frac{#@}{#@}", "=", ".", "(", ")", "\\sqrt{#0}", "#@^{#?}"],
        ["\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}"],
        ["\\sin", "\\cos", "\\tan", "\\log", "\\ln"],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    ]
};

const matricesInlineShortcuts = {
    "matrix": "\\begin{pmatrix} #@ & #@ \\\\ #@ & #@ \\end{pmatrix}",
    "sin": "\\sin",
    "cos": "\\cos",
    "tan": "\\tan",
    "log": "\\log",
    "ln": "\\ln"
};

const matricesMenuItems = [
    {
        label: 'Copy',
        onMenuSelect: () => console.log('Copy')
    },
    {
        label: 'Paste',
        onMenuSelect: () => console.log('Paste')
    },
    { type: 'divider' },
    {
        label: 'Matrices',
        submenu: [
            {
                label: 'Insert Matrix',
                onMenuSelect: () => console.log('Matrix Selected')
            }
        ]
    },
];

const differentialEquationsVirtualKeyboard = {
    rows: [
        ["+", "-", "\\times", "\\frac{#@}{#@}", "=", ".", "(", ")", "\\sqrt{#0}", "#@^{#?}"],
        ["\\frac{d}{dx} #@ ", "\\frac{\\partial}{\\partial x} #@ ", "\\int_{#?}^{#?} #@ \\mathrm{d}x"],
        ["\\sin", "\\cos", "\\tan", "\\log", "\\ln"],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    ]
};

const differentialEquationsInlineShortcuts = {
    "d/dx": "\\frac{d}{dx} #@ ",
    "partial": "\\frac{\\partial}{\\partial x} #@ ",
    "int": "\\int_{#?}^{#?} #@ \\mathrm{d}x",
    "sin": "\\sin",
    "cos": "\\cos",
    "tan": "\\tan",
    "log": "\\log",
    "ln": "\\ln"
};

const differentialEquationsMenuItems = [
    {
        label: 'Copy',
        onMenuSelect: () => console.log('Copy')
    },
    {
        label: 'Paste',
        onMenuSelect: () => console.log('Paste')
    },
    { type: 'divider' },
    {
        label: 'Differential Equations',
        submenu: [
            {
                label: 'Partial Derivative',
                onMenuSelect: () => console.log('Partial Derivative Selected')
            },
            {
                label: 'Integral',
                onMenuSelect: () => console.log('Integral Selected')
            }
        ]
    },
];

const quantumPhysicsVirtualKeyboard = {
    rows: [
        ["+", "-", "\\times", "\\frac{#@}{#@}", "=", ".", "(", ")", "\\sqrt{#0}", "#@^{#?}"],
        ["\\hat{H} #@ = E #@", "<\\psi|", "|\\psi>", "\\hbar", "\\langle", "\\rangle"],
        ["\\sin", "\\cos", "\\tan", "\\log", "\\ln"],
        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    ]
};

const quantumPhysicsInlineShortcuts = {
    "H": "\\hat{H} #@ = E #@",
    "<|>": "<\\psi| #@ |\\psi>",
    "psi": "|\\psi>",
    "hbar": "\\hbar",
    "langle": "\\langle #@ \\rangle",
    "sin": "\\sin",
    "cos": "\\cos",
    "tan": "\\tan",
    "log": "\\log",
    "ln": "\\ln"
};

const quantumPhysicsMenuItems = [
    {
        label: 'Copy',
        onMenuSelect: () => console.log('Copy')
    },
    {
        label: 'Paste',
        onMenuSelect: () => console.log('Paste')
    },
    { type: 'divider' },
    {
        label: 'Quantum Physics',
        submenu: [
            {
                label: 'Hamiltonian',
                onMenuSelect: () => console.log('Hamiltonian Selected')
            },
            {
                label: 'Wavefunction',
                onMenuSelect: () => console.log('Wavefunction Selected')
            }
        ]
    },
];

// Switch environments based on radio button selection
environmentRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            switch (event.target.value) {
                case 'algebra':
                    mathVirtualKeyboard.layouts = algebraVirtualKeyboard;
                    mathInput.inlineShortcuts = algebraInlineShortcuts;
                    mathInput.menuItems = algebraMenuItems;
                    break;
                case 'matrices':
                    mathVirtualKeyboard.layouts = matricesVirtualKeyboard;
                    mathInput.inlineShortcuts = matricesInlineShortcuts;
                    mathInput.menuItems = matricesMenuItems;
                    break;
                case 'differential-equations':
                    mathVirtualKeyboard.layouts = differentialEquationsVirtualKeyboard;
                    mathInput.inlineShortcuts = differentialEquationsInlineShortcuts;
                    mathInput.menuItems = differentialEquationsMenuItems;
                    break;
                case 'quantum-physics':
                    mathVirtualKeyboard.layouts = quantumPhysicsVirtualKeyboard;
                    mathInput.inlineShortcuts = quantumPhysicsInlineShortcuts;
                    mathInput.menuItems = quantumPhysicsMenuItems;
                    break;
                default:
                    break;
            }
        }
    });
});

// Set initial environment based on the default checked radio button
const initialCheckedRadio = Array.from(environmentRadios).find(radio => radio.checked);
if (initialCheckedRadio) {
    initialCheckedRadio.dispatchEvent(new Event('change'));
}

// Additional event listener to make the virtual keyboard visible when the input is focused
mathInput.addEventListener('focus', () => {
    mathVirtualKeyboard.visible = true;
});