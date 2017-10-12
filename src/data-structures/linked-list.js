class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class LinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  push(item) {
    const node = new Node(item)
    if (this.first === null) {
      this.first = this.last = node
    } else {
      node.prev = this.last
      this.last.next = node
      this.last = node
    }
  }

  pop() {
    if (this.first === null) return null
    else {
      const last = this.last
      this.last = last.prev
      return last
    }
  }

  shift() {
    if (this.first === null) return null
    else {
      const first = this.first
      this.first = first.next
      return first
    }
  }
  reverse() {
    let current = this.first
    let next

    do {
      next = current.next
      current.next = current.prev
      current.prev = next
      current = next
    } while (next)

    let tmp = this.first
    this.first = this.last
    this.last = tmp
  }

  _log() {
    let node = this.first
    do {
      // console.log(node.prev && node.prev.data)
      console.log(node.data)
      // console.log(node.next && node.next.data)
    } while ((node = node.next))
  }
}

module.exports = {
  Node,
  LinkedList
}
