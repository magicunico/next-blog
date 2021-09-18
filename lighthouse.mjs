import puppeteer from "puppeteer";
import lighthouse from "lighthouse";

export function createBrowser(){
    return puppeteer.launch({
        args: ["--show-paint-rects"]
    });
}

export function createReportWithBrowser(browser,url,options={output: "html"}){
    const endpoint = browser.wsEndpoint();
    const endpointUrl = new URL(endpoint);

    return lighthouse(url, Object.assign({},{port: endpointUrl.port},options));
}