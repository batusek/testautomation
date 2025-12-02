using Microsoft.Playwright;

namespace PlaywrightSetup;

/// <summary>
/// This class demonstrates authentication setup that would be run before tests.
/// In practice, you would run this manually once to generate the auth file,
/// or use valid credentials and uncomment the [AssemblyInitialize] attribute.
/// </summary>
[TestClass]
public class AuthSetup
{
    private static string AuthFile = ".auth/user.json";

    // Uncomment this attribute to run the setup automatically
    // [AssemblyInitialize]
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

        // Wait for navigation to complete (this will fail with invalid credentials)
        await page.WaitForURLAsync("**/welcome", new() { Timeout = 5000 });

        // Save authentication state
        await page.Context.StorageStateAsync(new() { Path = AuthFile });
        
        await browser.CloseAsync();
        playwright.Dispose();
        // Excerpt end
        // After end
    }

    [TestMethod]
    public async Task DemonstrateAuthenticationSetup()
    {
        // This test shows the authentication setup code structure
        // In practice, run this manually to create the auth file
        var playwright = await Microsoft.Playwright.Playwright.CreateAsync();
        var browser = await playwright.Chromium.LaunchAsync(new() { Headless = false });
        var page = await browser.NewPageAsync();

        await page.GotoAsync("https://openstreetmap.org/login");
        
        // Verify the login page loaded
        var loginButton = page.GetByRole(AriaRole.Button, new() { Name = "Log in" });
        Assert.IsNotNull(loginButton);
        
        await browser.CloseAsync();
        playwright.Dispose();
    }
}