const scrollParentToChild = (parent: HTMLElement, child: HTMLElement, offset = 0) => {
    parent.scrollTop = child.offsetTop - offset;
};

export default scrollParentToChild;
