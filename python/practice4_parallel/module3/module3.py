import time
import unittest

class Module3SlowTest(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')
        time.sleep(1)

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
        time.sleep(1)


   
if __name__ == '__main__':
    unittest.main()