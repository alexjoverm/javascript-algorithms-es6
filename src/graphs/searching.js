class Graph {
  constructor() {
    this.graph = []
  }

  addNode(label, connections = []) {
    this.graph.push({ label, connections })
  }

  bfs(startNode = 0) {
    let results = []
    if (!this.graph.length) return results

    // TODO: Mark unvisited

    let queue = [startNode]

    while (queue.length) {
      let node = this.graph[queue.shift()]
      // TODO: mark visited
      results.push(node)
      node.connections.forEach(connection => queue.push(connection))
    }

    return results
  }
}

module.exports = Graph
