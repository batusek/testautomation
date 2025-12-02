using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightLocators;

[TestClass]
public class LocatorTests : PageTest
{
    [TestMethod]
    public async Task ExploreLocators()
    {
        await Page.GotoAsync("https://openstreetmap.org/");
        
        // After start
        var heading = Page.GetByRole(AriaRole.Heading, new() { Name = "OpenStreetMap logo" });
        await Expect(heading).ToBeVisibleAsync();

        var search = Page.GetByRole(AriaRole.Link, new() { Name = "History" });
        await Expect(search).ToHaveAttributeAsync("href", "/history");
        // After end
    }

    [TestMethod]
    public async Task SearchReturnsResults()
    {
        await Page.GotoAsync("https://openstreetmap.org/");
        
        // After start
        // var search_bar = Page.Locator("#query");
        var searchBar = Page.GetByRole(AriaRole.Textbox, new() { Name = "Search" });
        await searchBar.FillAsync("Prague");

        var searchButton = Page.GetByRole(AriaRole.Button, new() { Name = "Go" });
        await searchButton.ClickAsync();

        var results = Page.Locator("#sidebar_content");
        await Expect(results).Not.ToBeEmptyAsync();
        var textContent = await results.TextContentAsync();
        Assert.IsNotNull(textContent);
        // After end
    }
}
