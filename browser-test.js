import browser from 'k6/experimental/browser';

export const options={
    scenarios:{
        browser_test:{
            executor:'constant-vus',
            vus:2,
            duration:'30s',
            Options:{
                browser:{
                    type: 'chromium'
                }

            }

        }
    }
}
export default async function() {
    const page=browser.newPage()
    await page.goto("https://www.google.com/")
    page.close()
}