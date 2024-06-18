/**
 * Create Layout class, which represents a page of
 * the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("body")
 * 2. It has a URL (.url), e.g. "/home" or "https://epam.com"
 * 3. It has a name (.name), e.g. "Document Page"
 * 4. It cannot have a parent element
 * 5. It can have children Elements (.children)
 * 6. It has a method to retrieve the root protractor element
 *    by the locator (.get([name])) or a child element
 *    by name in any depth
 * 7. It has a method to load the page, i.e. Navigates to
 *    the URL of it (.load())
 */

const Element = require('../pop/Element');

module.exports = class Layout {
    constructor(name, url, locator) {
        this.name = name;
        this.url = url;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        throw new Error("Parent cannot be set for layout element!");
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error("Child already added!");
        }
        this.children[child.name] = child;
    }

    get(name) {
        if (!name) {
            return element(this.locator)
        }
        for (const childName of Object.keys(this.children)) {
            if (childName === name) {
                return this.children[childName] instanceof Element ? element(this.children[childName].locator)
                    : element.all(this.children[childName].locator);
            }
            try {
                if (this.children[childName].get(name)) {
                    return this.children[childName].get(name);
                }
            } catch (e) {
                if (e.message !== "Child element not found!") {
                    throw e;
                }
            }
        }
        throw new Error("Child element not found!");
    }

    load() {
        return browser.get(this.url);
    }
}