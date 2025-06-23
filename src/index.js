//npm install -D webpack webpack-cli html-loader html-webpack-plugin css-loader style-loader webpack-dev-server webpack-merge file-loader

import "./styles.css";

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
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
      this.size++;
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
list.append(44);
list.append(55);

list.getSize();

console.log(list.at(5));
