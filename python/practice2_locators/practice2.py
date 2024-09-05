import unittest
from playwright.sync_api import sync_playwright


class OpenStreetMapTest(unittest.TestCase):
    def test_simple_automated_test(self):
        with sync_playwright() as p:
            # runs browser in a headless mode
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openstreetmap.org/")
            page.wait_for_load_state("networkidle")
            
            map = page.locator("#map")
            self.assertIsNotNone(map)

    def test_explore_locators(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openstreetmap.org/")
            page.wait_for_load_state("networkidle")
            
            heading = page.get_by_role("heading", name="OpenStreetMap")
            self.assertIsNotNone(heading)

            search = page.get_by_text("History")
            self.assertEqual(search.get_attribute("id"),"history_tab")

    def test_search_returns_results(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openstreetmap.org/")
            page.wait_for_load_state("networkidle")
            
            search_bar = page.get_by_role("textbox", name="Search")
            search_bar.fill("Prague")

            search_button = page.get_by_role("button", name="Go")
            search_button.click()

            # Wait for the search results to load (we will deal with timeouts later)
            page.wait_for_timeout(1000)

            results = page.locator('#sidebar_content')
            self.assertNotEqual(results.text_content,"")


if __name__ == '__main__':
    unittest.main()
