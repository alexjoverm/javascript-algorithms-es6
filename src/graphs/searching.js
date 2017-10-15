class Graph {
  constructor() {
    this.graph = []
  }

  addNode(label, connections = []) {
    this.graph.push({ label, connections })
  }

  bfs(startNode = 0) {
    let results = []
    let queue = [startNode]
    let visited = { [startNode]: true }

    if (!this.graph.length) return results

    while (queue.length) {
      let node = this.graph[queue.shift()]

      results.push(node)
      node.connections.forEach(connection => {
        if (!visited[connection]) {
          queue.push(connection)
          visited[connection] = true
        }
      })
    }

    return results
  }
}

module.exports = Graph
