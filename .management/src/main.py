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

    exercise3easy = "../javascript/practice3_setup/practice3.easy.test.ts"
    with open(exercise3easy, "r") as f:
        lines = list(f.readlines())

    excerpt = lines[3:10] + ["\n"]
    insertLines(exercise3easy,20,excerpt)
    insertLines(exercise3easy,14,excerpt)
    removeLines(exercise3easy, 2,12)


    removeLines("../javascript/practice3_setup/playwright.config.ts", 22, 22)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 20, 20)
    removeLines("../javascript/practice3_setup/playwright.config.ts", 16, 16)
    removeLines("../javascript/practice3_setup/setup.ts", 3, 16)

    shutil.copy("../javascript/practice1_intro/playwright.config.ts", "../javascript/practice4_parallel/playwright.config.ts")
    shutil.copy("../javascript/practice1_intro/playwright.config.ts", "../javascript/practice5_retry/playwright.config.ts")

# python()
javaScript()

