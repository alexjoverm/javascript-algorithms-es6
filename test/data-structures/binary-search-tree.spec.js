var mod = require('../../src/data-structures/binary-search-tree.js')
var Node = mod.Node
var BinaryTree = mod.BinaryTree

describe('Node', function() {
  'use strict'

  it('should be a constructor function', function() {
    expect(typeof Node).toBe('function')
  })
})

describe('Binary Tree', function() {
  'use strict'

  it('should be a constructor function', function() {
    expect(typeof BinaryTree).toBe('function')
  })
  it('should start with null root', function() {
    expect(new BinaryTree().root).toBe(null)
  })
  it('should insert and remove single node properly', function() {
    var bTree = new BinaryTree()
    bTree.insert(15)
    var node = bTree.find(15)
    bTree.remove(node)
    expect(bTree.root).toBe(null)
  })
  it('should remove root and replace with valid child', function() {
    var bTree = new BinaryTree()
    bTree.insert(15)
    bTree.insert(30)
    bTree.insert(45)
    var node = bTree.find(15)
    bTree.remove(node)
    expect(bTree.root.value).toBe(30)
  })
  it('should insert multiple nodes properly', function() {
    var bTree = new BinaryTree()
    bTree.insert(10)
    bTree.insert(5)
    bTree.insert(15)
    bTree.insert(4)
    bTree.insert(6)
    bTree.insert(14)
    bTree.insert(16)
    var leftRootChild = bTree.root.left
    var rightRootChild = bTree.root.right
    expect(bTree.root.value).toBe(10)
    expect(leftRootChild.value).toBe(5)
    expect(rightRootChild.value).toBe(15)
    expect(leftRootChild.left.value).toBe(4)
    expect(leftRootChild.right.value).toBe(6)
    expect(rightRootChild.left.value).toBe(14)
    expect(rightRootChild.right.value).toBe(16)
  })
  it('should remove multiple nodes properly', function() {
    var bTree = new BinaryTree()
    bTree.insert(10)
    bTree.insert(5)
    bTree.insert(15)
    bTree.insert(4)
    bTree.insert(6)
    bTree.insert(7)
    bTree.insert(14)
    bTree.insert(16)
    var leftRootChild = bTree.root.left
    var rightRootChild = bTree.root.right
    var sixteen = bTree.find(16)
    bTree.remove(sixteen)
    expect(bTree.root.value).toBe(10)
    expect(leftRootChild.value).toBe(5)
    expect(rightRootChild.value).toBe(15)
    expect(leftRootChild.left.value).toBe(4)
    expect(leftRootChild.right.value).toBe(6)
    expect(leftRootChild.right.right.value).toBe(7)
    expect(rightRootChild.left.value).toBe(14)
    expect(rightRootChild.right).toBe(null)
    var fourteen = bTree.find(14)
    bTree.remove(fourteen)
    expect(rightRootChild.left).toBe(null)
    var five = bTree.find(5)
    bTree.remove(five)
    expect(leftRootChild.value).toBe(6)
    expect(leftRootChild.left.value).toBe(4)
    expect(leftRootChild.right.value).toBe(7)
  })
})
