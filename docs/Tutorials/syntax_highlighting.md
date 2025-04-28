# 💻 Code Syntax Highlighting

Our documentation system supports rich syntax highlighting for a wide variety of programming languages. This makes your code examples more readable and easier to understand.

## Basic Code Blocks

To create a basic code block, wrap your code in triple backticks (```). For specific language highlighting, add the language name after the opening backticks.

```markdown
```python
def hello_world():
    print("Hello, World!")
```
```

## Supported Languages

Here are some commonly used language identifiers:

- `python` - Python
- `javascript` - JavaScript
- `typescript` - TypeScript
- `java` - Java
- `cpp` - C++
- `csharp` - C#
- `go` - Go
- `rust` - Rust
- `sql` - SQL
- `json` - JSON
- `yaml` - YAML
- `bash` - Shell scripts
- `markdown` - Markdown
- `html` - HTML
- `css` - CSS

## Inline Code

For inline code snippets, use single backticks:

```markdown
Use the `print()` function to output text.
```

## Code Block Features

### Line Numbers

Some code blocks may automatically show line numbers for better reference.

### Highlighting Specific Lines

You can highlight specific lines to draw attention to important parts of your code:

```markdown
```python {2}
def example():
    # This line will be highlighted
    return True
```
```

### Copy Button

Code blocks include a copy button for easy copying of code snippets.

## Best Practices

1. Always specify the language for syntax highlighting when possible
2. Use meaningful code examples that demonstrate real use cases
3. Keep code blocks focused and concise
4. Add comments to explain complex parts
5. Use inline code for short references to code elements

## Tips for Writing Documentation

- Break down complex code examples into smaller, digestible chunks
- Use consistent formatting throughout your documentation
- Include both basic and advanced examples
- Consider adding expected output for code examples
- Use proper indentation in your code blocks 