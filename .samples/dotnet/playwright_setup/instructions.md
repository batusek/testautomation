This project demonstrates how to share browser state (authentication) between tests in .NET Playwright.
- Use `[AssemblyInitialize]` for one-time setup per assembly
- Save state to `user.json`
- Tests can load state via `BrowserNewContextOptions.StorageStatePath`

## Files

- **AuthSetup.cs**: Demonstrates authentication and state storage
  - Login to OpenStreetMap
  - Fill credentials
  - Save browser storage state
  
- **SetupTests.cs**: Regular tests that would use the saved state
  - MapExists
  - ExploreLocators  
  - SearchReturnsResults