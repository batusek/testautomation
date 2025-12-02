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
        
    }

    [TestMethod]
    public async Task SearchReturnsResults()
    {
        await Page.GotoAsync("https://openstreetmap.org/");
        
    }
}
