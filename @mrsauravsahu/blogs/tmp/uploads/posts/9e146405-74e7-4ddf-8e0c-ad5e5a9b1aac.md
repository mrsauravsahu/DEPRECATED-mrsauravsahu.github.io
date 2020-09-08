Programmers feel one way or the other about the terminal. I, for one, embrace its ease of use, well, in certain cases. And of course, there are the many-many choices of shells available. I've gotten used to **zsh** and **PowerShell Core**. PowerShell runs on Windows, Linux and Mac, and has a lot of .NET APIs I'm familiar with, and it's great. If you're using zsh, you should definitely consider installing **_[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)_** So, whilst cleaning up some files from my home server to free up some space, I ran the **rm** command on a large folder by accident. You must be wondering, if one doesn't give the **\-rf** switches, what's the big deal? Well, I usually alias **rm** to **rm -rf** just to save the typing. And when I ran the command, it just finished without any errors, and I got a delayed sick feeling after realizing what I'd done. Also, one simply does not want to lose 300GB worth of data. I was cleaning up my DSLR photos folder and well, the whole thing, are you kidding me? So, the next command I ran:

> **$ alias rm**

And I get the result:

> **rm=trash**

And I'm like, "What is going on here?" Even though I've made some bad life choices, there are times where I have indeed thought things through. 😆 Turns out [trash-cli](https://github.com/andreafrancia/trash-cli) is a tool I'd installed during the initial phases when I'd setup my server. And it was to help with issues like this, where I'd randomly deleted stuff without thinking. And am I glad that I'd installed it? Oh, wow. All the files get nested safely inside a **.Trash** folder. So, all I had to do was move the folder back to it's original location. What a relief.

> **$ tree .Trash \`-- 1000 |-- files \`-- info**

And this was an installment of **_"Saurav screws up, again." 🤣_**