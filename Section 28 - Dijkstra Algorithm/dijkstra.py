class PriorityQueue:
    def __init__(self):
        self.values = []
    
    def enqueue(self, val, priority):
        self.values.append({'val': val, 'priority': priority})
        self.sort()

    def dequeue(self):
        return self.values.pop(0)  # Removes from front of array
    
    def sort(self):
        self.values.sort(key=lambda x: x['priority'])


class WeightedGraph:
    def __init__(self):
        self.adjacency_list = {}

    def add_vertex(self, vertex):
        # Each vertex starts off with an empty list of edges
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []

    def add_edge(self, vertex1, vertex2, weight):
        # Undirected graph (adds both directions)
        self.adjacency_list[vertex1].append({'node': vertex2, 'weight': weight})
        self.adjacency_list[vertex2].append({'node': vertex1, 'weight': weight})

    def dijkstra(self, start, finish):
        nodes = PriorityQueue()
        distances = {}
        previous = {}
        path = []  # To return at the end
        smallest = None
        
        # Build up initial state
        for vertex in self.adjacency_list:
            if vertex == start:
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            else:
                distances[vertex] = float('inf')
                nodes.enqueue(vertex, float('inf'))
            previous[vertex] = None
        
        # While there is something to visit
        while len(nodes.values) > 0:
            smallest = nodes.dequeue()['val']
            
            if smallest == finish:
                # We are done, build up the path to return at the end
                while previous[smallest] is not None:
                    path.append(smallest)
                    smallest = previous[smallest]
                break
            
            if smallest or distances[smallest] != float('inf'):
                for neighbor in self.adjacency_list[smallest]:
                    # Find neighboring node
                    next_node = neighbor['node']
                    # Calculate new distance to neighboring node
                    candidate = distances[smallest] + neighbor['weight']
                    
                    if candidate < distances[next_node]:
                        # Updating new smallest distance to neighbor
                        distances[next_node] = candidate
                        # Updating previous node (how we got to the neighbor)
                        previous[next_node] = smallest
                        # Enqueue in priority queue with new priority
                        nodes.enqueue(next_node, candidate)
        
        return path + [smallest]


# Example usage
graph = WeightedGraph()
graph.add_vertex("A")
graph.add_vertex("B")
graph.add_vertex("C")
graph.add_vertex("D")
graph.add_vertex("E")
graph.add_vertex("F")

graph.add_edge("A", "B", 4)
graph.add_edge("A", "C", 2)
graph.add_edge("B", "E", 3)
graph.add_edge("C", "D", 2)
graph.add_edge("C", "F", 4)
graph.add_edge("D", "E", 3)
graph.add_edge("D", "F", 1)
graph.add_edge("E", "F", 1)

result = graph.dijkstra("A", "E")
print(result)  # Expected output: ['A', 'C', 'D', 'F', 'E']
