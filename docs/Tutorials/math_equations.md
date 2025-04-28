# ➗ Math Equations in Documentation

Our documentation system supports LaTeX math equations, allowing you to write beautiful mathematical expressions inline or as display blocks.

## Inline Math

Use `\(` and `\)` for inline math expressions. For example:

- The quadratic formula is \(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)
- The sum of squares: \(\sum_{i=1}^n i^2\)
- Euler's identity: \(e^{i\pi} + 1 = 0\)

## Display Math

Use `\[` and `\]` for display math blocks. For example:

\[
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
\]

\[
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
\begin{pmatrix}
x \\
y
\end{pmatrix} =
\begin{pmatrix}
ax + by \\
cx + dy
\end{pmatrix}
\]

## Common Mathematical Notations

### Greek Letters
- Alpha: \(\alpha\)
- Beta: \(\beta\)
- Gamma: \(\gamma\)
- Delta: \(\Delta\)
- Pi: \(\pi\)

### Operators
- Sum: \(\sum\)
- Product: \(\prod\)
- Integral: \(\int\)
- Limit: \(\lim\)
- Fraction: \(\frac{a}{b}\)

### Relations
- Less than or equal: \(\leq\)
- Greater than or equal: \(\geq\)
- Not equal: \(\neq\)
- Approximately equal: \(\approx\)
- Element of: \(\in\)

## Examples in Different Fields

### Calculus
The derivative of a function:
\[
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
\]

### Linear Algebra
A system of linear equations:
\[
\begin{cases}
3x + 2y = 8 \\
x - y = 1
\end{cases}
\]

### Statistics
The normal distribution formula:
\[
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{(x-\mu)^2}{2\sigma^2}}
\]

## Tips for Writing Math

1. Always test your equations to ensure they render correctly
2. Use appropriate spacing for readability
3. Break complex equations into smaller parts when possible
4. Add explanatory text around equations
5. Use consistent notation throughout your documentation

## Common Issues and Solutions

- If your equation isn't rendering, check for matching delimiters
- Use `\` to escape special characters
- For complex equations, consider using display math instead of inline
- Multi-line equations should use appropriate environment tags 