  
Prior to installing Ubuntu, I'd used only one OS, Windows. That's what everyone uses, really, for some reason. BTW, you CANNOT compare Windows, Ubuntu, Android, iOS, or Oxygen OS with each other. They're just made for different purposes. It makes my head hurt whenever I hear people comparing OSs.  
  
Okay, so, prior to using Ubuntu, I had Windows 8.1 on my PC and Laptop. I've been wanting to try out Windows 10 Technical Preview since quite a few weeks now. I had installed it in my Laptop inside of VirtualBox, but due to the lack of memory, it didn't run well.  
  
So, I thought of installing it alongside Windows 8.1 and Ubuntu on my Desktop. It's like, a, 7 year old Acer Aspire Series PC. A little specs sheet: 2GB RAM, 320 GB HDD, 1366 by 768 px resolution, Intel Core 2 Duo E7400 Processor and Intel G33/G31 Chipset Family GPU.  
  
I downloaded the ISOs from this link: [Link to ISO](http://windows.microsoft.com/en-us/windows/preview-iso-update-1503)  
  

[![](https://mrsauravsahu.files.wordpress.com/2015/04/9939c-screenshot2b5.png)](https://mrsauravsahu.files.wordpress.com/2015/04/9939c-screenshot2b5.png)

  
  
Installation is fairly easy. And I used a free partition that I had. I was playing around the Preview for a few hours. To be honest, it is really good. It is quite smooth for an early build. After that I restarted the computer to make sure I had all my data ( :P ) I booted into Windows 8.1 and it was all fine. Then I realized that Windows had replaced the GRUB menu with its own Windows Boot Manager. Only then I realized that I made a mistake (because I didn't know that it could be solved).  
  
After searching and reading around for a half hour, I came across this article in [SoftPedia](http://news.softpedia.com/news/How-to-Dual-Boot-Ubuntu-and-Windows-Properly-415377.shtml). SoftPedia always has these kind of great articles. So, they said that when you install Windows after you've installed Ubuntu, Windows replaces GRUB with the Windows boot manager. Because it doesn't want to recognize other Operating Systems (We'll come back to this later ;) )  
  
They suggested to reinstall GRUB. And to do that you have to boot into Live Ubuntu using a DVD or a Pen Drive. Then you can type in the following into the command line:  
  
**sudo add-apt-repository ppa:yannubuntu/boot-repair && sudo apt-get update**  
**sudo apt-get install -y boot-repair && (boot-repair &)**  
  
This will add a repository where the Boot Repair app is and install it. Now we just have to use the recommended Repair and it will install GRUB into /dev/sda.  
And another problem solved.  
  
After this I thought everything would work just fine. But unfortunately, it isn't. I couldn't find Windows 10 Technical Preview anywhere in the GRUB menu. This will be the next problem I'll try and fix.  
  
Also, I will start with Computer Networking Concepts from the next post.  
  
Later.