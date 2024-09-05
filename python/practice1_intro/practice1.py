import unittest
from playwright.sync_api import sync_playwright


class OpenStreetMapTest(unittest.TestCase):
    def test_simple_automated_test(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

if __name__ == '__main__':
    unittest.main()
