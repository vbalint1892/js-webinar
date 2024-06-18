/**
 * Create an Element class that represents an element of
 * the application, and
 *
 * 1. It has a protractor locator (.locator),
 *    e.g. by.css("h1.title")
 * 2. It has a name (.name), e.g. "Document Title"
 * 3. It can have a parent Element,
 *    which is the context of the element (.parent)
 * 4. It can have children Elements (.children)
 * 5. It has a method to retrieve the protractor element
 *    by the locator (.get([name])) in it's context
 *     - if it gets a name as parameter, it tries to find
 *       in it's children (recursively) the Element with
 *       the given name or throws an Erorr if it cannot
 *       find the element
 *
 * Use Protractor API to retrieve element
 * @see {@link https://www.protractortest.org/#/api?view=ElementFinder}
 */
module.exports = class Element {
    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
        this.parent = null;
        this.children = {};
    }

    setParent(parent) {
        this.parent = parent;
    }

    addChildren(child) {
        if (this.children[child.name]) {
            throw new Error("Child already added!");
        }
        this.children[child.name] = child;
        child.setParent(this);
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
}