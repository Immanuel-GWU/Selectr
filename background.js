// Using chrome contextMenus API to add the plugin to the context menu
// chrome.contextMenus.removeAll(() => {
chrome.contextMenus.create({
    "id": "Kreatr", // parentId of the plugin in the contextMenu
    "title": "Intelligent Selector", // The text that will be shown in the context menu for the plugin
    "contexts": ["all"] // Since we don't know the element type, we'll add it to 'all' contexts
})
// })

// Adding options to the parent menu which will be displayed when parent menu is hovered upon
// chrome.contextMenus.removeAll(() => {
// chrome.contextMenus.create({
//     "id": "Kreater-one",
//     "parentId": "Kreatr",
//     "title": "Copy Rel XPath",
//     "contexts": ["all"]
// })
// })

let getXPath = (info, tab) => {
    let msg = {
        type: 'getXPath'
    }
    // chrome.tabs.query({active: true, currentWindow: true}, () => {
    chrome.tabs.sendMessage(tab.id, msg, () => {
        console.log("Message sent");
    })
    // })
    console.log(tab);
    
}

chrome.contextMenus.onClicked.addListener((info, tab) =>{
    // The info object contains the information of the element that was clicked
    // The tab object contains the information of the tab that was clicked
    // alert(Object.keys(info))
    getXPath(info, tab)
})