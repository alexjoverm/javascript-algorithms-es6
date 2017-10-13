class Node {
  constructor(data) {
    this.value = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

function _find(item, current) {
  if (current.value === item) return current
  if (item < current.value && current.left) return _find(item, current.left)
  if (item >= current.value && current.right) return _find(item, current.right)
}

function _insert(item, current) {
  const key = item < current.value ? 'left' : 'right'

  if (!current[key]) {
    current[key] = new Node(item)
    current[key].parent = current
  } else {
    _insert(item, current[key])
  }
}

function isLeaf(node) {
  return !node.left && !node.right
}
function getSideToParent(node) {
  return node.parent && node.value < node.parent.value ? 'left' : 'right'
}
function oneSide(node) {
  return node.left && node.right === null
    ? 'left'
    : node.left === null && node.right ? 'right' : false
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(item) {
    if (!this.root) {
      this.root = new Node(item)
    } else {
      _insert(item, this.root)
    }
  }

  find(item) {
    if (!this.root) {
      return false
    }

    return _find(item, this.root)
  }

  remove(node) {
    if (isLeaf(node)) {
      const sideParent = getSideToParent(node)
      if (node === this.root) this.root = null
      else node.parent[sideParent] = null
    } else {
      const side = oneSide(node)

      if (side) {
        // 1 side
        if (node === this.root) {
          this.root = node[side]
          this.root.parent = null
        } else {
          const sideParent = getSideToParent(node)
          node.parent[sideParent] = node[side]
          node[side].parent = node.parent
        }
      } else {
        // 2 sides
        const min = findMin(node.right)
        node.value = min.value
        this.remove(min)
      }
    }
  }
}

function findMin(node) {
  if (node.left) {
    return findMin(node.left, node)
  }
  return node
}

module.exports = {
  Node,
  BinaryTree
}
