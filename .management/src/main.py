import shutil

def removeSolution(filename: str, start: int, end: int):
    with open(filename, "r") as f:
        lines = f.readlines()

    with open(filename, "w") as f:
        for i, line in enumerate(lines):
            if i < start:
                f.write(line)

            if i > end:
                f.write(line)

removeSolution("../python/practice1_intro/practice1.py", 10,15)
shutil.copy("../python/practice2_locators/practice2.py", "../python/practice3_setup/practice3.py")
shutil.copy("../python/practice1_intro/practice1.py", "../python/practice2_locators/practice2.py")

