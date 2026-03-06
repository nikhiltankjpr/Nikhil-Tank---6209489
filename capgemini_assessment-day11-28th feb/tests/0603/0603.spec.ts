import {selectors, test} from "@playwright/test"

test("Amazon", async ({page}) => {
    await page.goto("https://www.amazon.in/?&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=14862453285083557186&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061786&hvtargid=kwd-10573980&hydadcr=14453_2316415")

    await page.locator("//input[@placeholder='Search Amazon.in']").fill("phones")
    await page.locator("//input[@id='nav-search-submit-button']").press("Enter")
    await page.waitForTimeout(5000)
    await page.locator("//span[text()='Android 13.0']").click()

    await page.waitForTimeout(5000)

    

    await page.screenshot({path:"0603.png", fullPage:true})

})