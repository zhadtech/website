# 💡 Admonitions

Admonitions are beautiful callout blocks that help highlight important information in your documentation. They can be used to draw attention to notes, warnings, tips, and other special content.

## Basic Usage

Admonitions are created using the following syntax:

```markdown
!!! note "Optional Title"
    This is a note admonition.
```

## Types of Admonitions

### Note
!!! note
    Use notes for general information that you want to highlight.

### Warning
!!! warning
    Warnings are used to alert users about potential problems or important considerations.

### Tip
!!! tip
    Tips provide helpful advice or best practices.

### Info
!!! info
    Use info blocks for additional details or background information.

### Success
!!! success
    Success blocks highlight positive outcomes or completed tasks.

### Danger
!!! danger
    Danger blocks warn about critical issues that need immediate attention.

### Example
!!! example
    Example blocks demonstrate how to use features or implement solutions.

## Collapsible Blocks

You can create collapsible admonitions using `???` instead of `!!!`:

```markdown
??? note "Click to expand"
    This content is hidden by default.
```

### Expanded by Default

To have a collapsible block open by default, use `???+`:

```markdown
???+ note "Expanded by default"
    This content is visible by default but can be collapsed.
```

## Nested Admonitions

You can nest admonitions within other admonitions:

!!! note "Outer note"
    This is the outer note.

    !!! tip "Nested tip"
        This is a nested tip inside the note.

## Custom Styling

You can customize the appearance of admonitions with CSS classes:

```markdown
!!! note "Custom Note" class="custom-class"
    This note has custom styling.
```

## Best Practices

1. Choose appropriate admonition types for your content
2. Use clear and concise titles
3. Keep content focused and relevant
4. Don't overuse admonitions
5. Maintain consistent styling throughout your documentation

## Common Use Cases

### Documentation Warnings
!!! warning "Version Compatibility"
    This feature is only available in version 2.0 and above.

### Important Notes
!!! note "Remember"
    Don't forget to save your changes before proceeding.

### Tips and Tricks
!!! tip "Pro Tip"
    Use keyboard shortcuts to improve productivity.

### Critical Information
!!! danger "Data Loss Risk"
    Always backup your data before performing this operation.

## Accessibility Considerations

- Use clear and descriptive titles
- Ensure color contrast meets accessibility standards
- Don't rely solely on colors to convey meaning
- Maintain logical structure and hierarchy 