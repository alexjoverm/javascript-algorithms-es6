const Graph = require('../../src/graphs/searching')

describe('BFS', function() {
  it('Prints correctly', function() {
    const graph = new Graph()
    graph.addNode(3, [2, 1])
    graph.addNode(1)
    graph.addNode(7, [1])
    graph.addNode(1, [1])

    const res = graph.bfs().map(i => i.label)
    expect(res).toEqual([3, 7, 1])
  })
})
