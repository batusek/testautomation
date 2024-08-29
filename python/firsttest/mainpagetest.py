import time
import unittest
import multiprocessing
from playwright.sync_api import sync_playwright


class OpenWeatherMapMainPageTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        playwright = sync_playwright()
        p = playwright.start()
        
        # runs browser in a headless mode
        browser = p.chromium.launch(headless=True)
        cls.page = browser.new_page()
        
    def setUp(self):
        self.page.goto("https://openstreetmap.org/")
        self.page.wait_for_load_state("networkidle")

    def test_simple_automated_test(self):
        map = self.page.locator("#map")
        self.assertIsNotNone(map)

    def test_explore_locators(self):
        heading = self.page.get_by_role("heading", name="OpenStreetMap")
        self.assertIsNotNone(heading)
        self.page.wait_for_timeout(2000)

        search = self.page.get_by_text("History")
        self.assertEqual(search.get_attribute("id"),"history_tab")

    def test_temperature_displayed_after_save(self):
        search_bar = self.page.get_by_role("textbox", name="Search")
        search_bar.fill("Prague")
        search_button = self.page.get_by_role("button", name="Go")
        search_button.click()

        # Wait for the search results to load (we will deal with timeouts later)
        self.page.wait_for_timeout(1000)

        results = self.page.locator('#sidebar_content')
        self.assertNotEqual(results.text_content,"")


class AnotherTest(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')
        time.sleep(2)

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())
        time.sleep(2)


    
if __name__ == '__main__':
    unittest.main()
    # run in sequence with "python -m unittest"
    # run in parallel with "unittest-parallel --level class"