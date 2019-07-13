// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = -Infinity, max = Infinity) {
    if (!node) { return true }
    if (node.val < min || node.val > max) { return false }
    const left = validate(node.left, min, node.val - 1)
    const right = validate(node.right, node.val + 1, max)
    return left && right
}

module.exports = validate;
