using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightSetup;

[TestClass]
public class SetupTests : PageTest
{
    [TestMethod]
    public async Task MapExists()
    {
        // Excerpt
        await Page.GotoAsync("https://openstreetmap.org/");

        var map = Page.Locator("#map");
        await Expect(map).ToBeVisibleAsync();
    }

    [TestMethod]
    public async Task LoginButtonPresent()
    {
        // Excerpt
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
        // Excerpt
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
