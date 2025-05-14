function insertNodeAtTail(head, data) {
  // iif the head is null inser data
  // use recursion  to add the res
  if (head === null) {
    return newNode;
  }
  head.next = insertNodeAtTail(head.next, data);
  return head;
}
