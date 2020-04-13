class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(firstVertex, secondVertex) {
    const first = this.adjacencyList[firstVertex];
    const second = this.adjacencyList[secondVertex];
    if (!first.includes(secondVertex) && this.adjacencyList[secondVertex]) {
      first.push(secondVertex);
    }
    if (!second.includes(firstVertex) && this.adjacencyList[firstVertex]) {
      second.push(firstVertex);
    }
    this.adjacencyList[firstVertex] = first;
    this.adjacencyList[secondVertex] = second;
  }

  removeEdge(firstVertex, secondVertex) {
    const first = this.adjacencyList[firstVertex];
    const second = this.adjacencyList[secondVertex];
    if (first.includes(secondVertex) && this.adjacencyList[secondVertex]) {
      const index = first.indexOf(secondVertex);
      first.splice(index, 1);
    }
    if (second.includes(firstVertex) && this.adjacencyList[firstVertex]) {
      const index = second.indexOf(firstVertex);
      second.splice(index, 1);
    }
    this.adjacencyList[firstVertex] = first;
    this.adjacencyList[secondVertex] = second;
  }

  removeVertex(vertex) {
    const context = this.adjacencyList[vertex];
    while (context.length) this.removeEdge(vertex, context.pop())
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("Toronto");
graph.addVertex("Ottawa");
graph.addVertex("Dallas");
graph.addVertex("Japan");
graph.addVertex("Lagos");
graph.addVertex("Aspen");

graph.addEdge("Ottawa", "Dallas");
graph.addEdge("Japan", "Dallas");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Tokyo", "Dallas");

// graph.removeEdge("Tokyo", "Aspen");
// graph.removeVertex("Japan")
// graph.removeVertex("Ottawa");
console.log(graph);

