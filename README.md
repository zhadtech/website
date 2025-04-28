# Ghibli-Themed MkDocs Library

![GitHub last commit](https://img.shields.io/github/last-commit/zhadtech/website)
![Version](https://img.shields.io/github/v/release/zhadtech/website)
![Open Issues](https://img.shields.io/github/issues/zhadtech/website)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![FOSSA Status](https://img.shields.io/badge/FOSSA-compliant-brightgreen)
![GitHub license](https://img.shields.io/github/license/zhadtech/website)

A beautiful, customizable MkDocs theme with Ghibli-inspired light and dark modes. This repository provides a ready-to-use documentation theme (materials) that anyone can adopt for their own projects.


## ✨ Features

- 🎨 Custom Ghibli-inspired light and dark mode themes
- 🌓 Light/dark mode toggle with animated icons
- 🔍 Enhanced search bar with better visibility and UX
- 📱 Responsive design for all device sizes
- 🧩 Modular CSS architecture with isolated components
- 📝 Code highlighting and annotation support
- 🔄 Easy integration with your own content via git submodules

## 🖼️ Project Structure

```
/library
│
├── custom_theme/           # Custom theme overrides
│   ├── main.html           # Main template overrides
│   └── css/                # Custom CSS components
│       ├── main.css        # Entry point for CSS
│       ├── global.css      # Global theme styles
│       ├── search.css      # Enhanced search component
│       ├── header.css      # Header component styles
│       ├── navigation.css  # Navigation component styles
│       ├── content.css     # Main content styling
│       └── code.css        # Code block styling
│
├── mkdocs.yml              # MkDocs configuration
├── requirements.txt        # Python dependencies
└── docs/                   # Documentation content (can be replaced with your own)
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- pip

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/zhadtech/library.git my-docs
   cd my-docs
   ```

2. Set up a Python virtual environment:
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Replace the docs folder with your own content:
   ```bash
   # Remove the existing docs folder
   rm -rf docs
   
   # Option 1: Add your docs as a git submodule
   git submodule add https://github.com/your-username/your-docs.git docs
   
   # Option 2: Create your own docs folder
   mkdir docs
   # Add your markdown files to the docs folder
   ```

5. Start the development server:
   ```bash
   mkdocs serve
   ```

6. Access your documentation at `http://127.0.0.1:8000/`

## 🔧 Configuration

The theme is configured in the `mkdocs.yml` file:

- Two color schemes: `ghibli-light` and `ghibli-dark`
- Font customization: Nunito for text, Roboto Mono for code
- Enhanced code block features

You can customize the theme further by modifying the CSS files in the `custom_theme/css` directory.


## 🚀 Deployment with GitHub Actions

This repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages:

1. 🔑 **Repository Settings**:
   - Go to your repository's Settings → Pages
   - Set the source to "GitHub Actions"
   - Enable "Enforce HTTPS"

2. 📝 **Workflow Configuration**:
   - The workflow file is at `.github/workflows/deploy.yml`
   - For private repositories, follow our [SSH Keys Setup Guide](docs/How%20To/Set%20up%20SSH%20keys%20for%20accessing%20submodule.md)
   - Customize the workflow file according to your needs:
     - Branch name (if not using 'main')
     - Python version
     - Repository URLs
     - Submodule configuration (if using)
   - Enable/disable plugins and features as needed

3. 🚀 **Deployment**:
   - Every push to main triggers automatic deployment
   - Manual deployment available in Actions tab
   - Site will be at `https://YOUR_USERNAME.github.io/REPO_NAME`
   - Other deployment options:
      - ☁️ Netlify
      - 🖥️ Your own server
      - 🏠 Local network

!!! warning "Security Notes"
    - Keep SSH keys and secrets secure
    - Never commit sensitive information
    - Monitor deployment logs
    - Rotate keys periodically
    - Remove unused deploy keys

4. 🔧 **Other configuration**:
   - 🎨 **Custom Styling**: Modify `custom_theme/css/` for personalized looks
   - 🔌 **Plugins**: Add extra functionality through MkDocs plugins
   - 🔄 **Git Submodules**: Manage multiple documentation repositories
   - 🔍 **Search Customization**: Configure search behavior
   - 📊 **Analytics**: Add tracking if needed

## 📝 Project Roadmap

- [x] Custom Ghibli-inspired theme
- [x] Light and dark mode toggle
- [x] Enhanced search functionality
- [x] Modular CSS architecture  
- [x] Fix logo and menu button behavior in header section
- [x] Include admonition plugin
- [x] Add diagram plugin
- [x] Include basic syntax in doc and update git workflow
- [ ] Improve Responsive design
- [ ] Add idea interactive graph
- [ ] Add blog integration
- [ ] News letter integration
- [ ] Social integration with preview cards
- [ ] SEO optimization with sitemaps
- [ ] PDF export functionality
- [ ] Automated documentation testing
- [ ] Internationalization support


## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have any suggestions or find any bugs.

## License

The theme and configuration files in this repository are licensed under the MIT License.  
Private content stored in submodules is not covered by this license and remains proprietary to Zhad.