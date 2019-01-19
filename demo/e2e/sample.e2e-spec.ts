import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";

describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should launch the multi select dialog", async () => {
        const btnTap = await driver.findElementByAutomationText("select");
        await btnTap.click();

        await driver.driver.sleep(2500);

        const confirmButton = await driver.findElementByText("confirm", SearchOptions.exact);
        assert.equal(await confirmButton.text(), "confirm");
    });

    it("should select c item and click confirm", async () => {
        const itemTap = await driver.findElementByText("C", SearchOptions.exact);
        await itemTap.click();

        await driver.driver.sleep(1000);

        const confirmButton = await driver.findElementByText("confirm", SearchOptions.exact);
        await confirmButton.click();

        await driver.driver.sleep(1500);

        const lblMessage = await driver.findElementByText("moi-c", SearchOptions.exact);
        assert.equal(await lblMessage.text(), "moi-c");
    });

    it("should remove a item and click confirm", async () => {
        const btnTap = await driver.findElementByAutomationText("select");
        await btnTap.click();

        await driver.driver.sleep(500);

        const itemTap = await driver.findElementByText("A", SearchOptions.exact);
        await itemTap.click();

        await driver.driver.sleep(1000);

        const confirmButton = await driver.findElementByText("confirm", SearchOptions.exact);
        await confirmButton.click();

        await driver.driver.sleep(1500);

        const listView = await driver.findElementsByText("moi", SearchOptions.contains);

        assert.equal(await listView.length, 2);
    });

    it("should cancel selection", async () => {
        const btnTap = await driver.findElementByAutomationText("select");
        await btnTap.click();

        await driver.driver.sleep(500);

        let itemTap = await driver.findElementByText("D", SearchOptions.exact);
        await itemTap.click();

        await driver.driver.sleep(1000);

        itemTap = await driver.findElementByText("A", SearchOptions.exact);
        await itemTap.click();

        await driver.driver.sleep(1000);

        const confirmButton = await driver.findElementByText("cancel", SearchOptions.exact);
        await confirmButton.click();

        await driver.driver.sleep(1500);

        const listView = await driver.findElementsByText("moi", SearchOptions.contains);

        assert.equal(await listView.length, 2);
    });
});