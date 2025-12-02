using Microsoft.Playwright;
using Microsoft.Playwright.MSTest;

namespace PlaywrightIntro;

[TestClass]
public class IntroTests : PageTest
{
    [TestMethod]
    public async Task MapExists()
    {
        await Page.GotoAsync("https://openstreetmap.org/");

        // After start
        var map = Page.Locator("#map");
        await Expect(map).ToBeVisibleAsync();
        // After end
    }
}
