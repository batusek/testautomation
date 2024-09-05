import time
import unittest

class AnotherSlowTest(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')
        time.sleep(2)

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
        time.sleep(2)


   
if __name__ == '__main__':
    unittest.main()
    # Tasks:
    # 1. run all tests (practice1 - practice4) at once serially
    # 2. run all tests (practice1 - practice4) in parallel using unittest-parallel
    # 3. Compare run times
    #
    # Solution:
    # Go to the main dir
    # 1. "python -m unittest"
    # 2. "unittest-parallel --level class"