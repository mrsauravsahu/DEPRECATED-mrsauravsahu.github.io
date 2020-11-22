Custom VSCode profiles are great. You can isolate extensions, settings and basically everything inside VSCode. It's effectively a new installation without actually installing multiple versions.

### Why tho

You might be using VSCode for a bit of work stuff, some personal open-source contributions, "side projects", writing a book, etc,. And ideally you would prefer a different look and feel for each of them; you might be using different extensions. For example, when just writing something, (and I'm currently writing this within VSCode) you want a distraction free view - Zen View with a spell checker; and when you're working, you're a real Power User. All of this is possible with VSCode Custom profiles.

### How tho

Let's get started and create a custom vscode profile with complete isolation. First, we need a convenient location to store this profile. Could be anywhere, I'm choosing the home directory, which on a Mac would be...

```bash
❯ echo /Users/$USER
/Users/sauravsahu
```

So I'm going to create a new directory to store all my custom profiles.

```bash
mkdir ~/vscode-profiles
```

Next, let's create directory structures for this profiles, which I'm going to name `blog`. I'll use this profile to write blog posts 🤷‍♂️

```bash
cd  ~/vscode-profiles
mkdir -p blogs/{data,extensions}
```

This creates a `blogs` directory with two sub-directories called `data` and `extensions`. The data directory is where VSCode will store its data, cache, user settings, etc,. And the extensions directory is where VSCode can install extensions for this profile. So the profile now looks like this:

```bash
❯ cd ~/vscode-profiles
❯ tree -L 1 blogs
blogs
├── data
└── extensions
```

Now if you open VSCode passing in the user data directory and extensions directory, your custom profile is ready to use.

```bash
❯ code --user-data-dir ~/vscode-profiles/blogs/data --extensions-dir ~/vscode-profiles/blogs/extensions
```

Note: It's a good idea to use absolute paths because you'll be invoking this command every time you want to use this profile. So create an alias for this and add it to your startup script. La fin. That's all you need for custom profiles. Next let's look at how to migrate extensions and settings from another profile.

### Migrating Settings and Extensions from an older Profile

To migrate the settings from an older profile, all you need to do is copy the `settings.json` file and put it in the `data/User/settings.json` path for that particular profile. That was easy. Next let's see how to migrate extensions. One way to do this is just manually reinstall all the extensions you had before, which we devs hate. 😂 So let's automate this. Kind of. First, get the list of extensions you have installed with the command. Store in a text file. 

```bash
❯ code --list-extensions | tee extensions.txt
...
ms-azuretools.vscode-docker
ms-dotnettools.csharp
ms-python.python
ms-toolsai.jupyter
ms-vscode-remote.remote-containers
ms-vscode-remote.remote-ssh
ms-vscode-remote.remote-ssh-edit
ms-vsliveshare.vsliveshare
...
```

To install these extensions in the new profile, we can use a for loop.

```bash
❯ alias yourcode='code --user-data-dir ~/vscode-profiles/blogs/data --extensions-dir ~/vscode-profiles/blogs/extensions'

❯ for ext in `cat extensions.txt `; do
  yourcode --install-extension $ext
done
```

This will install your extensions into the new profile. Now you can use that alias to open the custom vscode profile. Yay! 😃