using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightConcepts;

[TestClass]
public class ConceptTests : PageTest
{
    [TestMethod]
    public async Task FirstTestToDemonstratePlaywrightConcepts()
    {
        await Page.GotoAsync("https://openstreetmap.org/");
        
        var heading = Page.GetByRole(AriaRole.Heading, new() { Name = "OpenStreetMap logo" });
        await Expect(heading).ToBeVisibleAsync();

        var search = Page.GetByRole(AriaRole.Link, new() { Name = "About" });
        await Expect(search).ToHaveAttributeAsync("href", "/about");
    }

    [TestMethod]
    public async Task SecondTestToDemonstratePlaywrightConcepts()
    {
        await Page.GotoAsync("https://openstreetmap.org/");
        
        var heading = Page.GetByRole(AriaRole.Heading, new() { Name = "OpenStreetMap logo" });
        await Expect(heading).ToBeVisibleAsync();

        var search = Page.GetByRole(AriaRole.Link, new() { Name = "Help" });
        await Expect(search).ToHaveAttributeAsync("href", "/help");
    }
}
