import unittest
from playwright.sync_api import sync_playwright


class OpenWeatherMapMainPageTest(unittest.TestCase):

    def test_simple_automated_test(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openweathermap.org/")
            page.wait_for_load_state("networkidle")
            
            self.assertEqual(page.title(),"Current weather and forecast")

    def test_temperature_displayed_after_save(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            page.goto("https://openweathermap.org/")
            page.wait_for_load_state("networkidle")
            
            search_bar = page.get_by_placeholder("Search city")
            search_bar.fill("Prague")

            # Click the search button
            search_button = page.locator("button[type='submit']")
            search_button.click()

            # Wait for the search results to load (adjust timeout as needed)
            page.wait_for_timeout(2000)

            # Verify the current temperature is displayed
            current_temp = page.locator('ul.search-dropdown-menu li span:nth-of-type(2)')
            self.assertNotEqual(current_temp,"")


if __name__ == '__main__':
    unittest.main()
