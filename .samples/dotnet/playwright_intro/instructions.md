# Playwright Intro - .NET Version

This is the .NET/MSTest translation of the Playwright intro test.

## Prerequisites

- .NET 8.0 SDK or later
- PowerShell (for installing Playwright browsers)

## Setup

1. Restore dependencies:
   ```bash
   dotnet restore
   ```

2. Build the project:
   ```bash
   dotnet build
   ```

3. Install Playwright browsers:
   ```bash
   pwsh bin/Debug/net8.0/playwright.ps1 install
   ```

## Instructions

1. Find a map element on the page
2. Assert that it is visible

## Running the tests

### From VS Code
- Use the "Run dotnet playwright intro" launch configuration
- Or use the Testing view in VS Code
- Or run the "test-dotnet-intro" task

### From command line
```bash
dotnet test
```

### With detailed output
```bash
dotnet test --logger "console;verbosity=detailed"
```

## Project Structure

- `PlaywrightIntro.csproj` - Project file with dependencies
- `IntroTests.cs` - Main test file using MSTest
- `Usings.cs` - Global usings for the project
