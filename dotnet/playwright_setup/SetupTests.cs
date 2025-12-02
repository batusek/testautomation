using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightSetup;

[TestClass]
public class SetupTests : PageTest
{
    [TestMethod]
    public async Task MapExists()
    {
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
        await Page.GotoAsync("https://openstreetmap.org/");

        var map = Page.Locator("#map");
        await Expect(map).ToBeVisibleAsync();
    }

    [TestMethod]
    public async Task LoginButtonPresent()
    {
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
        await Page.GotoAsync("https://openstreetmap.org/");
        
        // Find the button with username class inside it
        var loginButton = Page.Locator("button:has(.username)");
        await Expect(loginButton).ToBeVisibleAsync();
        
        // Verify the username text is present
        var username = loginButton.Locator(".username");
        await Expect(username).ToHaveTextAsync("TestAutomationUser");
    }

    [TestMethod]
    public async Task SearchReturnsResults()
    {
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
        await Page.GotoAsync("https://openstreetmap.org/");
        
        // var search_bar = Page.Locator("#query");
        var searchBar = Page.GetByRole(AriaRole.Textbox, new() { Name = "Search" });
        await searchBar.FillAsync("Prague");

        var searchButton = Page.GetByRole(AriaRole.Button, new() { Name = "Go" });
        await searchButton.ClickAsync();

        var results = Page.Locator("#sidebar_content");
        await Expect(results).Not.ToBeEmptyAsync();
        var textContent = await results.TextContentAsync();
        Assert.IsNotNull(textContent);
    }
}
