  
Ever since I installed Ubuntu on my laptop, one thing that I was itching to do was to figure out a way to change the brightness value. I've never been a fan of bright displays that just burn your eyes out.  
After researching a lot on the web (I use Bing as my default Search Engine, as it provides me with better search results, according to me), I found a solution, kind of. Now I am able to change the brightness, but there's one teeny - weeny problem. The minimum value totally turns off the screen. Minimum value is literally 0%. Hopefully, I, with the help of my friends, will be able to fix this.  
  
Here's the link where I found out the solution: [The Link](http://askubuntu.com/questions/288265/display-brightness-problem-with-ubuntu-13-04)  
  
The actual post.  

Run the command below in terminal to know what video card is used for the backlight/brightness:

    ls /sys/class/backlight/

find graphics driver in Ubuntu

As you can see, the output for me is dell\_backlight and intel\_backlight. An indicator that the graphics card in use is Intel. Another way to find out the graphics card would be to go in System Settings->Details->Graphics. You can see the graphic card in use.

If your graphics card is Intel, you can proceed with the fix below. Fix brightness control issue with Intel card in Ubuntu and Linux Mint:

Open a terminal and create the following configuration file, if it does not exist:

    sudo touch /usr/share/X11/xorg.conf.d/20-intel.conf

Now we need to edit this file. You can use any editor be it a terminal one or graphical.

    sudo gedit /usr/share/X11/xorg.conf.d/20-intel.conf

Add the following lines to this file:

    Section "Device"        Identifier  "card0"        Driver      "intel"        Option      "Backlight"  "intel_backlight"        BusID       "PCI:0:2:0"EndSection

Save it. Log out and log in back. The brightness control should be working through function keys now.  
  
I found that this works for Ubuntu 14.04 as well. Here's a screen shot of my details page.  
  

[![](https://mrsauravsahu.files.wordpress.com/2015/03/99628-screenshot2bfrom2b2015-03-092b043a353a07.png)](https://mrsauravsahu.files.wordpress.com/2015/03/99628-screenshot2bfrom2b2015-03-092b043a353a07.png)

  
One thing that I still haven't figured how to, is to use my AMD graphics card as default rather than the Intel one.  
  
  
The next issue that I was facing was scanning from my HP DeskJet 4515 All-In-One Printer. I solved this as well. I just had to install the necessary drivers. It was a tough thing to do though. I found this page: [Ubuntu Hand Book](http://ubuntuhandbook.org/index.php/2013/09/install-hp-linux-printer-driver-in-ubuntu/)  
  
Now, I scan from and print to my network printer.  
  
Also, if you noticed, I have a custom theme installed. It's called Numix Circle Theme.  
  
  
I installed using the following commands.  
  
** sudo add-apt-repository ppa:numix/ppa  
 sudo apt-get update  
 sudo apt-get install numix-icon-theme-circle numix-gtk-theme**  
  
I'm gonna try to tell what each of the commands do. Please correct me if needed.  
So, the first commands add a repository from the numix server to my computer, so that it can download the theme. The second one checks for system updates and install it if available. The third one, installed the two packages "**numix-icon-theme-circle", "numix-gtk-theme"** from the software centre.  
  
I guess things are getting really interesting with this new project. I now understand why developers like Linux based OSs.  
  
Later and take care.