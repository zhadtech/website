# Python Environment Setup for MkDocs

This guide walks you through setting up a Python development environment with pyenv, virtualenv, and installing MkDocs with the Material theme.

## Python Setup

Install pyenv to manage Python versions:

```bash
# Install pyenv using Homebrew on macOS
brew update
brew install pyenv

# Add pyenv to your shell configuration
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc

# List available Python versions
pyenv install --list

# Install desired Python version
pyenv install <python_version>

# Set python version globally or locally
pyenv global <python_version>  # globally
# OR
pyenv local <python_version>   # locally in current directory
```

## Virtual Environment Setup

Create and activate a virtual environment for your project:

```bash
# Install virtualenv globally
pip install virtualenv

# Navigate to your project root folder
cd /path/to/project

# Create a virtual environment
virtualenv .venv

# Activate the virtual environment
source .venv/bin/activate
```

## MkDocs Installation

Install MkDocs and the Material theme:

```bash
# Install MkDocs
pip install mkdocs

# Install Material theme for MkDocs
pip install mkdocs-material
```

Add the following lines to mkdocs.yml:
```yaml
theme:
  name: material
```

## Usage

After installation, you can create a new MkDocs project or serve an existing one. Refer to the [MkDocs documentation](https://www.mkdocs.org/) for more information.