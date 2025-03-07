import shutil


def adaptFile(filename: str):
    with open(filename, "r") as f:
        lines = f.readlines()

    with open(filename, "w") as f:
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

def insertLines(filename: str, start: int, excerpt: list[str]):
    with open(filename, "r") as f:
        lines = f.readlines()

    with open(filename, "w") as f:
        for i, line in enumerate(lines):
            if i == start:
                for l in excerpt:
                    f.write(l)

            f.write(line)


def python():
    removeLines("../python/practice1_intro/practice1.py", 10, 15)
    shutil.copy("../python/practice2_locators/practice2.py", "../python/practice3_setup/practice3.py")
    shutil.copy("../python/practice1_intro/practice1.py", "../python/practice2_locators/practice2.py")
    removeLines("../python/practice4_parallel/instructions.txt", 5, 10)

def javaScript():
    with open("../javascript/practice3_setup/setup.ts", "r") as f:
        lines = list(f.readlines())

    excerpt = lines[3:-1] + ["\n"]
    exercise3 = "../javascript/practice3_setup/practice3.test.ts"
    insertLines(exercise3,21,excerpt)
    insertLines(exercise3,10,excerpt)
    insertLines(exercise3,3,excerpt)

    exercise3easy = "../javascript/practice3_setup/practice3.easy.test.ts"
    with open(exercise3easy, "r") as f:
        lines = list(f.readlines())

    excerpt = lines[3:10] + ["\n"]
    insertLines(exercise3easy,20,excerpt)
    insertLines(exercise3easy,14,excerpt)
    removeLines(exercise3easy, 2,12)


    removeLines("../javascript/practice3_setup/playwright.config.ts", 23, 23)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 21, 21)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 17, 17)
    removeLines("../javascript/practice3_setup/setup.ts", 3, 16)

    shutil.copy("../javascript/practice1_intro/playwright.config.ts", "../javascript/practice4_parallel/playwright.config.ts")
    shutil.copy("../javascript/practice1_intro/playwright.config.ts", "../javascript/practice5_retry/playwright.config.ts")


def typeScript():
    adaptFile("../javascript/cucumber_intro/features/calculator.feature")
    adaptFile("../javascript/cucumber_intro/features/step_definitions/calculator.ts")

    adaptFile("../javascript/cucumber_with_playwright/features/maps.feature")
    adaptFile("../javascript/cucumber_with_playwright/step_definitions/maps.ts")

    adaptFile("../javascript/playwright_intro/intro.test.ts")
    adaptFile("../javascript/playwright_locators/locators.test.ts")


# python()
# javaScript()
typeScript()
