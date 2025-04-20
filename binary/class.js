// Implementaion of a binary search algorithm
// 1 fwnode
class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
  }
}
function show() {
  return this.data;
}
class BinarySearch {
  constructor() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
  }
  insert(data) {
    let head = new Node(data, null, null);
    // checking f the root is null so as to assign the current node
    if ((this.root = null)) {
      this.root = head;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current.left == null) {
            parent.left = head;
            break;
          }
        } else {
          if (current.left == null) {
            parent.left = head;
            break;
          }
        }
      }
    }
  }
  remove(data) {
    root = removeNode(this.root, data);
  }
  removeNode(node, data) {
    // checking if there is no node
    if (node == null) return null;
    // checking if the left and the right nodes have values
    if (data == node.data) {
      if (node.left && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      }
      if (node.right == null) {
        return node.left;
      }
    }
  }
}
