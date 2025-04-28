# 🔄 Git Integration and SSH Setup

This guide explains how to set up SSH keys for accessing private submodules in your documentation repository.

## 📋 Prerequisites

- A GitHub account
- Git installed on your local machine
- Access to terminal/command prompt
- Admin access to your GitHub repository

## 🛠️ Step-by-Step Guide

### 1. Generate SSH Key Pair

1. Open your terminal and run:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. When prompted for a file location, press Enter to accept the default location
   ```
   > Enter file in which to save the key (~/.ssh/id_ed25519):
   ```

3. Enter a secure passphrase (recommended) or leave it empty
   ```
   > Enter passphrase (empty for no passphrase):
   > Enter same passphrase again:
   ```

### 2. Add the Public Key to GitHub

1. Copy the public key content:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. Go to your GitHub repository
3. Navigate to Settings → Deploy Keys
4. Click "Add deploy key"
5. Title: "Documentation Submodule Access"
6. Paste your public key in the "Key" field
7. Check "Allow write access" if you need to push to the submodule
8. Click "Add key"

### 3. Add the Private Key to Repository Secrets

1. Copy the private key content:
   ```bash
   cat ~/.ssh/id_ed25519
   ```

2. Go to your GitHub repository
3. Navigate to Settings → Secrets and variables → Actions
4. Click "New repository secret"
5. Name: `SSH_KEY`
6. Value: Paste your private key
7. Click "Add secret"

## ✅ Verify Setup

1. Test SSH connection:
   ```bash
   ssh -T git@github.com
   ```

2. You should see a message like:
   ```
   Hi username! You've successfully authenticated...
   ```

!!! warning "Important Notes"

	- Keep your SSH keys and secrets secure
	- Never share your private key
	- Don't commit sensitive information to the repository
	- Test the workflow locally with `act` if possible
	- Monitor deployment logs for any issues
	- Use a strong passphrase
	- Rotate keys periodically
	- Limit deploy key access to specific repositories
	- Remove unused deploy keys and secrets


## 🚨 Troubleshooting

### Common Issues

1. **Permission Denied**
	- Verify the deploy key is added correctly
	- Check if the key has proper permissions (600)
	- Ensure the key is added to the correct repository

2. **Submodule Access Failed**
	- Verify SSH configuration in workflow file
	- Check if the submodule URL uses SSH format
	- Confirm deploy key has proper access rights

3. **Key Format Issues**
	- Ensure the entire key is copied, including headers
	- Check for extra newlines or spaces
	- Verify key format matches expected format

### Solutions

```bash
# Fix key permissions
chmod 600 ~/.ssh/id_ed25519

# Verify key format
ssh-keygen -l -f ~/.ssh/id_ed25519

# Test specific repository access
ssh -T git@github.com:username/repository.git
```

## 📚 Additional Resources

- [GitHub's SSH key guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Working with SSH key passphrases](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases)
- [Troubleshooting SSH](https://docs.github.com/en/authentication/troubleshooting-ssh)
