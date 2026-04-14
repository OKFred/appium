import { remote } from "webdriverio";

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "Android",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
};

const wdOpts = {
  hostname: "localhost",
  port: 4723,
  logLevel: "info",
  capabilities,
};

async function runTest() {
  // @ts-ignore
  const driver = await remote(wdOpts);
  try {
    const batteryItem = await driver.$('//*[@text="电池"]');
    await batteryItem.click();
  } finally {
    await driver.pause(1000);
    // await driver.deleteSession();
  }
}

runTest().catch(console.error);
