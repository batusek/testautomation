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
    public async Task ExploreLocators()
    {
        // Excerpt
        await Page.GotoAsync("https://openstreetmap.org/");
        
        var heading = Page.GetByRole(AriaRole.Heading, new() { Name = "OpenStreetMap logo" });
        await Expect(heading).ToBeVisibleAsync();

        var search = Page.GetByText("History");
        await Expect(search).ToHaveAttributeAsync("href", "/history");
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
