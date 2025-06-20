import shutil
from typing import TextIO


def adaptFile(filename: str):
    src:str = f"../../.samples/{filename}"
    target:str = f"../../{filename}"
    shutil.copy(src, target)

    with open(target, "r") as f:
        lines = f.readlines()

    with open(target, "w") as f:
        writeLine = True
        for i, line in enumerate(lines):
            if "After start" in line:
                writeLine = False

            if "After end" in line:
                writeLine = True
                continue

            if "Uncomment" in line:
                components = line.split(":")
                f.write(":".join(components[1:]))
                continue

            if writeLine:
                f.write(line)


def removeLines(filename: str, start: int, end: int):
    with open(filename, "r") as f:
        lines = f.readlines()

    with open(filename, "w") as f:
        for i, line in enumerate(lines):
            if i < start:
                f.write(line)

            if i > end:
                f.write(line)


def insertExcerpt(f: TextIO, excerpt: list[str]):
    for l in excerpt:
        f.write(l)

def insertExcerpts(filename: str, excerpt: list[str]):
    with open(filename, "r") as f:
        lines = f.readlines()

    with open(filename, "w") as f:
        for line in lines:
            if "Excerpt" in line:
                insertExcerpt(f, excerpt)
                continue

            f.write(line)


def extractExcerpt(filename: str) -> list[str]:
    with open(filename, "r") as f:
        lines = list(f.readlines())

    result = []
    inExcerpt = False
    for line in lines:
        if "Excerpt start" in line:
            inExcerpt = True
            continue

        if "Excerpt end" in line:
            inExcerpt = False
            continue

        if inExcerpt:
            result.append(line)

    return result



def python():
    removeLines("../python/practice1_intro/practice1.py", 10, 15)
    shutil.copy("../python/practice2_locators/practice2.py", "../python/practice3_setup/practice3.py")
    shutil.copy("../python/practice1_intro/practice1.py", "../python/practice2_locators/practice2.py")
    removeLines("../python/practice4_parallel/instructions.txt", 5, 10)

def typeScript():
    adaptFile("javascript/gherkin/features/atm.feature")
    adaptFile("javascript/gherkin/features/history.feature")
    adaptFile("javascript/gherkin/features/mortgage.feature")

    adaptFile("javascript/cucumber_intro/features/calculator.feature")
    adaptFile("javascript/cucumber_intro/features/step_definitions/calculator.ts")
    adaptFile("javascript/cucumber_intro/features/statement.feature")
    adaptFile("javascript/cucumber_intro/features/step_definitions/statement.ts")

    adaptFile("javascript/cucumber_with_playwright/features/maps.feature")
    adaptFile("javascript/cucumber_with_playwright/step_definitions/maps.ts")

    adaptFile("javascript/playwright_intro/intro.test.ts")
    adaptFile("javascript/playwright_locators/locators.test.ts")

    excerpt = extractExcerpt("../../.samples/javascript/playwright_setup/setup.ts")
    adaptFile("javascript/playwright_setup/setup.test.ts")
    insertExcerpts("../../javascript/playwright_setup/setup.test.ts",excerpt)
    adaptFile("javascript/playwright_setup/setup.ts")
    excerpt = extractExcerpt("../../.samples/javascript/playwright_setup/setup.easy.test.ts")
    adaptFile("javascript/playwright_setup/setup.easy.test.ts")
    insertExcerpts("../../javascript/playwright_setup/setup.easy.test.ts",excerpt)

    adaptFile("javascript/playwright_parallel/playwright.config.solution.ts")
    adaptFile("javascript/playwright_retry/playwright.config.solution.ts")
    adaptFile("javascript/playwright_setup/playwright.config.solution.ts")

    adaptFile("javascript/playwright_external/geocode.ts")
    adaptFile("javascript/playwright_external/geocode.test.ts")

# python()
typeScript()
