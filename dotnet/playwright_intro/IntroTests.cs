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

    }
}
