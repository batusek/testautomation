using Microsoft.Playwright;

namespace PlaywrightSetup;

[TestClass]
public class AuthSetup
{
    private static string AuthFile = "user.json";

    [AssemblyInitialize]
    public static async Task Setup(TestContext context)
    {
        // After start
        // Excerpt start
        var playwright = await Microsoft.Playwright.Playwright.CreateAsync();
        var browser = await playwright.Chromium.LaunchAsync(new() { Headless = false });
        var page = await browser.NewPageAsync();

        await page.GotoAsync("https://openstreetmap.org/login");
        
        var username = page.GetByRole(AriaRole.Textbox, new() { Name = "username" });
        await username.FillAsync("TestAutomationUser");

        var password = page.GetByRole(AriaRole.Textbox, new() { Name = "password" });
        await password.FillAsync("xxx");
        
        var login = page.GetByRole(AriaRole.Button, new() { Name = "Log in" });
        await login.ClickAsync();

        // Save authentication state
        await page.Context.StorageStateAsync(new() { Path = AuthFile });
        
        await browser.CloseAsync();
        playwright.Dispose();
        // Excerpt end
        // After end
    }
}