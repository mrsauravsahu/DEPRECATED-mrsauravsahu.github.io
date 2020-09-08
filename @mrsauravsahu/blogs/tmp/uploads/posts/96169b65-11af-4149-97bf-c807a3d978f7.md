In your C# UWP project, you might be wondering how to color controls with the Accent color of the device. Well, this is how you do it. (Other methods were suggested on the Web that I found but they didn't work for me. And I have used this method only for a Universal Windows Platform application and I do not know if it works for WPF. You could test that out) You can get the Accent color using the following code:

> if (
> Windows
> .Foundation
> .Metadata
> .ApiInformation
> .IsTypePresent("Windows.Phone.UI.Input.HardwareButtons")
> )
> {
>     var uiSettings = new Windows.UI.ViewManagement.UISettings();
>     Color rgba = uiSettings.GetColorValue(Windows.UI.ViewManagement.UIColorType.Accent);
>     var statusBar = Windows.UI.ViewManagement.StatusBar.GetForCurrentView();
>     statusBar.BackgroundColor = rgba;
>     statusBar.BackgroundOpacity = 1;
> }

Here, rgba is the struct Color object which can be used to color your controls with the Accent Color. The above snippet colors the Status Bar, as it is common to customize the status bar that way. The snippet doesn't require any additional using statement as all variables have their fully qualified name specified. Hope this helps. I do not have the link to where I found this solution, but, wherever it is, thanks to them!