//npm install -D webpack webpack-cli html-loader html-webpack-plugin css-loader style-loader webpack-dev-server webpack-merge file-loader

import "./styles.css";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    this.size++;
    let node = new Node(value, null);

    // if empty: new head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
    }
    this.head = { value: value, next: this.head };
    this.size++;
  }

  getSize() {
    let current = this.head;
    let count = 0;

    while (current) {
      current = current.next;
      count++;
    }
    console.log(this.size);
  }
  getHead() {
    return this.head;
  }
  tail() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    if (this.size < 1) {
      alert("empty list");
    } else if (index > this.size) {
      alert("list isn't that big");
    } else {
      let current = this.head;
      let count = 1;
      while (current.next && count < index) {
        current = current.next;
        count++;
      }
      return current;
    }
  }

  pop() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }
  contains(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();

list.append(11);
list.append(22);
list.append(33);
// list.append(44);
// list.append(55);

list.pop();
list.getSize();

console.log(list.at(2));
