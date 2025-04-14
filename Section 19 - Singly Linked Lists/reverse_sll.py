class Node:
    def __init__(self, val, next):
        self.val = val
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, val):
        new_node = Node(val, None)
        if not self.head:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return self  # Returns whole list

    def pop(self):
        if not self.head:
            return None

        current = self.head
        new_tail = current
        while current.next:
            new_tail = current
            current = current.next

        self.tail = new_tail
        self.tail.next = None
        self.length -= 1

        if self.length == 0:
            self.head = None
            self.tail = None

        return current

    def shift(self):
        if not self.head:
            return None

        current_head = self.head
        self.head = current_head.next
        self.length -= 1

        if self.length == 0:
            self.tail = None

        return current_head

    def unshift(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1
        return self

    def get(self, index):
        if index < 0 or index >= self.length:
            return None

        counter = 0
        current = self.head
        while counter != index:
            current = current.next
            counter += 1
        return current

    def set(self, index, val):
        found_node = self.get(index)
        if found_node:
            found_node.val = val
            return True
        return False

    def insert(self, index, val):
        if index < 0 or index > self.length:
            return False
        if index == self.length:
            return bool(self.push(val))
        if index == 0:
            return bool(self.unshift(val))

        new_node = Node(val)
        prev = self.get(index - 1)
        temp = prev.next
        prev.next = new_node
        new_node.next = temp
        self.length += 1
        return True

    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.shift()
        if index == self.length - 1:
            return self.pop()

        previous_node = self.get(index - 1)
        removed = previous_node.next
        previous_node.next = removed.next
        self.length -= 1
        return removed
    
    def reverse(self):
        # Swap the head and the tail
        node = self.head
        self.head = self.tail
        self.tail = node

        next = prev = None

        # Loop through the list
        # Explainer, we are just changing the pointers/connections
        # between nodes
        # Changing pointer direction really, to point left
        for i in range(0, self.length):
            next = node.next
            node.next = prev
            prev = node
            node = next
        # 13 -> 27 -> 32 -> 71
        # 13 <- 27 <- 32 <- 71

        # Iteration 1:
        # node = 13, next = 27, node.next = prev(None)
        # prev = 13, node = 27

        # It 2:
        # node = 27, next = 32, node.next = prev(13)
        # prev = 27, node = 32

        # It 3:
        # node = 32, next = 71, node.next = prev(27)
        # prev = 32, node = 71

        # It 4:
        # node = 71, next = None, node.next = prev(32)
        # prev = 71, node = None
        return self

# Usage
list = SinglyLinkedList()
list.push(13)
list.push(27)
list.push(32)
list.push(71)

list.reverse()
print(list)