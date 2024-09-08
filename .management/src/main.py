import shutil


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
    removeLines("../javascript/practice1_intro/practice1.test.ts", 5, 6)
    removeLines("../javascript/practice2_locators/practice2.test.ts", 15, 24)
    removeLines("../javascript/practice2_locators/practice2.test.ts", 5, 9)

    with open("../javascript/practice3_setup/setup.ts", "r") as f:
        lines = list(f.readlines())

    excerpt = lines[3:-1] + ["\n"]
    exercise3 = "../javascript/practice3_setup/practice3.test.ts"
    insertLines(exercise3,21,excerpt)
    insertLines(exercise3,10,excerpt)
    insertLines(exercise3,3,excerpt)

    removeLines("../javascript/practice3_setup/playwright.config.ts", 22, 23)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 20, 21)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 16, 17)
    removeLines("../javascript/practice3_setup/setup.ts", 3, 16)

# python()
javaScript()

