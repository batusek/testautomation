import unittest
from playwright.sync_api import sync_playwright


class OpenStreetMapTest(unittest.TestCase):
    def test_simple_automated_test(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openstreetmap.org/")
            page.wait_for_load_state("networkidle")
            
            map = page.locator("#map")
            self.assertIsNotNone(map)
        
if __name__ == '__main__':
    unittest.main()
