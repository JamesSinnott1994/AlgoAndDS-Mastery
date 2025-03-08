class HashTable:
    def __init__(self, size=53):
        self.keyMap = [None] * size

    def _hash(self, key):
        total = 0
        WEIRD_PRIME = 31
        for i in range(min(len(key), 100)):
            char = key[i]
            value = ord(char) - 96
            total = (total * WEIRD_PRIME + value) % len(self.keyMap)
        return total

    def set(self, key, value):
        index = self._hash(key) # Hash the key
        if not self.keyMap[index]: # If nothing there put an empty array
            self.keyMap[index] = []
        self.keyMap[index].append([key, value]) # Add in next key and value

    def get(self, key):
        index = self._hash(key) # Hash the key
        if self.keyMap[index]: # Check if there is something at that index
            for pair in self.keyMap[index]: # Loop over
                if pair[0] == key: # 0 item is where we are storing the key
                    return pair[1]
        return None


# Example usage
ht = HashTable(17)
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")