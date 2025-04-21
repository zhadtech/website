# Python Environment Setup for MkDocs

This guide walks you through setting up a Python development environment with pyenv, virtualenv, and installing MkDocs with the Material theme.

## Core Folder structure
```bash
/project-root
|-- docs/      # content plugged in as git submodule
|-- mkdocs.yml # mkdocs configuration
```

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

## Git Submodule Setup for Documentation

This project uses a git submodule for managing documentation content. Here's how to set it up:

```bash
# Add the docs submodule
git submodule add git@github.com:your-organization/docs.git docs

# Initialize and update the submodule
git submodule init
git submodule update --recursive
```

### Setting up SSH Keys for Submodule Access

To enable GitHub Actions to access the docs submodule:

1. Generate a new SSH key pair:
```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f github-actions-key
```

2. Add the private key to your main repo secrets:
   - Go to your main repo on GitHub → Settings → Secrets and variables → Actions
   - Create a new repository secret named `SSH_KEY`
   - Copy the entire contents of `github-actions-key` (private key) and paste it as the value

3. Add the public key to your docs repo:
   - Go to your docs repo → Settings → Deploy keys
   - Click "Add deploy key"
   - Give it a title like "GitHub Actions Deploy Key"
   - Paste the contents of `github-actions-key.pub` (public key)
   - Check "Allow write access" if your workflow needs to push changes
   - Click "Add key"

This setup allows your GitHub Actions workflow to authenticate and access the submodule during deployment.

