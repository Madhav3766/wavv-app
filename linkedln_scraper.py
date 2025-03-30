from linkedin_scraper import Person, actions
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import json

# Monkey-patch Person.get_experiences to handle missing element issues.
original_get_experiences = Person.get_experiences

def patched_get_experiences(self):
    try:
        original_get_experiences(self)
    except NoSuchElementException as e:
        print("Monkey patch activated: Unable to locate element in get_experiences. Setting experiences to empty.")
        self.experiences = []

Person.get_experiences = patched_get_experiences

# Helper functions
def safe_getattr(obj, attr_name, default=None):
    """
    Return obj.attr_name if it exists, else default.
    This avoids AttributeError if the field is missing.
    """
    try:
        return getattr(obj, attr_name, default)
    except Exception:
        return default

def safe_list(value):
    """
    If value is None, return an empty list; else return value.
    Useful for list attributes (like experiences, educations).
    """
    return value if value is not None else []

# LinkedIn profile URL to scrape
url_person = "https://www.linkedin.com/in/linkmanishvij/"

# 1) Setup the Selenium driver
driver = webdriver.Chrome()

# 2) Login to LinkedIn
email = "agaazsinghal@gmail.com"
password = "AGAAZsinghal1970"
actions.login(driver, email, password)

# 3) Scrape the profile
person = Person(
    url_person,
    driver=driver,
    scrape=True
)

# 4) Safely retrieve each field from the scraped profile
linkedin_url = safe_getattr(person, "linkedin_url", "")
name = safe_getattr(person, "name", "")
about = safe_getattr(person, "about", "")
experiences_raw = safe_list(safe_getattr(person, "experiences", []))
educations_raw = safe_list(safe_getattr(person, "educations", []))
interests_raw = safe_list(safe_getattr(person, "interests", []))
accomplishment = str(safe_getattr(person, "accomplishment", ""))
company = str(safe_getattr(person, "company", ""))
job_title = str(safe_getattr(person, "job_title", ""))

# Convert experiences, educations, interests to strings
experiences = [str(exp) for exp in experiences_raw]
educations = [str(edu) for edu in educations_raw]
interests = [str(i) for i in interests_raw]

# Additional fields (stored as strings)
driver_repr = str(safe_getattr(person, "driver", ""))
scrape_method = "scrape"
scrape_close_on_complete_example = "scrape(close_on_complete=True)"

# 5) Build the data dictionary
data_dict = {
    "linkedin_url": linkedin_url,
    "name": name,
    "about": about,
    "experiences": experiences,
    "educations": educations,
    "interests": interests,
    "accomplishment": accomplishment,
    "company": company,
    "job_title": job_title,
    "driver": driver_repr,
    "scrape_method": scrape_method,
    "scrape_close_on_complete_example": scrape_close_on_complete_example
}

# 6) Write the scraped data to a JSON file
with open("person_data.json", "w", encoding="utf-8") as f:
    json.dump(data_dict, f, indent=2)

# 7) Quit the driver
driver.quit()

print("Data saved to person_data.json")
