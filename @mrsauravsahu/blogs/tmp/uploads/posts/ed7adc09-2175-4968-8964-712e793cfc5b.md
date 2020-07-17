With the latest Windows 10 Feature update (Anniversary Update 1607), users can enable a developer feature called the Windows Subsystem for Linux (WSL). Microsoft has partnered with Canonical to make this happen. This allows users to install Ubuntu Linux, distributed by Canonical and run command line tools. This means developers can install Linux packages and compile Linux binaries on their Windows Machines. I got this update a few days back and enabled this feature as well. Even with a dual boot (Windows and Linux) system, I find myself using Windows a lot. This is mostly because I write .NET programs and have my most commonly used programs on Windows. Ubuntu gets booted every one in a while when I look at Android Programming or simply learning some Linux commands and tools.

After installing WSL, I realized that I was missing some settings that I'd set on Ubuntu. So let us look at some of these settings (more like start up code in .bashrc) that will help you in your day - to -day tasks.

### Turn on case insensitivity

When you start creating your files and folders, you might set the name with a Capital Letter. Linux is a case sensitive Operating System, unlike Windows, which is case insensitive but case preserving. So, if you create a file like... `touch HelloWorld.cpp vim he[TAB][TAB]` The second command will not give you auto complete because the file name starts with 'H' not 'h'. `echo 'set completion-ignore-case on' >> ~/.bashrc` This will append the line in quotes to the .bashrc and reopening the terminal will turn on case insensitivity.

### Get those Updates

Not necessary, but it feels nice to have all those latest packages. apt provides a better interface compared to apt-get. Like a Progress Bar showing the percentage of installation done. `#Get info about latest packages sudo apt update #Install upgradable packages sudo apt upgrade`

### See a directory structure

We often find ourselves wondering how we've arranged our folders, be it a project folder or our pictures. Install the tree package to see a directory structure's pictorial representation. `#Get info about latest packages sudo apt install tree` \[caption id="attachment\_261" align="aligncenter" width="470"\]![tree](https://mrsauravsahu.files.wordpress.com/2016/08/tree.jpg) Directory Structure of a sample folder\[/caption\]

Some tips in the next post...