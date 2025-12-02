using Microsoft.Playwright;

namespace PlaywrightSetup;

[TestClass]
public class AuthSetup
{
    private static string AuthFile = "user.json";

    [AssemblyInitialize]
    public static async Task Setup(TestContext context)
    {
    }
}