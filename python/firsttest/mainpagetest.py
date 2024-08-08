import unittest
from playwright.sync_api import sync_playwright


class OpenWeatherMapMainPageTest(unittest.TestCase):

    def test_simple_automated_test(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()

            print("opening page")
            page.goto("https://openweathermap.org/")
            page.wait_for_load_state("networkidle")
            
            self.assertEqual(page.title(),"Current weather and forecast")
        
if __name__ == '__main__':
    unittest.main()
