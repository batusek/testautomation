using Microsoft.Playwright;

namespace PlaywrightIntro;

public static class PlaywrightConfig
{
    public static BrowserTypeLaunchOptions LaunchOptions => new()
    {
        Headless = false,
        Channel = "chrome" // Use Chrome by default
    };

    public static BrowserNewContextOptions ContextOptions => new()
    {
        ViewportSize = new ViewportSize
        {
            Width = 1280,
            Height = 720
        }
    };
}
