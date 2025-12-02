# Playwright Setup - Browser State Sharing

This project demonstrates how to share browser state (authentication) between tests in .NET Playwright.

## Key Differences from TypeScript

**TypeScript Approach:**
- Uses project dependencies in playwright.config.ts
- Runs setup project first, then tests with stored state
- Projects: `setup` → `chromium` (with dependency)

**C# Approach:**
- Uses `[AssemblyInitialize]` for one-time setup per assembly
- Saves state to `.auth/user.json`
- Tests can load state via `BrowserNewContextOptions.StorageStatePath`

## Files

- **AuthSetup.cs**: Demonstrates authentication and state storage
  - Login to OpenStreetMap
  - Fill credentials
  - Save browser storage state
  - Currently disabled (commented out) as demo uses invalid credentials

- **SetupTests.cs**: Regular tests that would use the saved state
  - MapExists
  - ExploreLocators  
  - SearchReturnsResults

## How to Use

1. **Option 1: Manual Setup**
   - Run `DemonstrateAuthenticationSetup()` test with valid credentials
   - Manually create `.auth/user.json` with authentication state

2. **Option 2: Assembly Initialize**
   - Uncomment `[AssemblyInitialize]` attribute in `AuthSetup.cs`
   - Update credentials to valid ones
   - Tests will automatically run setup before first test

3. **Loading Saved State**
   - Override `ContextOptions()` in test class:
   ```csharp
   public override BrowserNewContextOptions ContextOptions()
   {
       return new BrowserNewContextOptions
       {
           StorageStatePath = ".auth/user.json"
       };
   }
   ```

## Run Tests

```powershell
dotnet test playwright_setup/PlaywrightSetup.csproj
```
