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

    if (current.value == value) {
      return true;
    }

    while (current.next) {
      current = current.next;
      if (current.value == value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 1;

    if (current.value == value) {
      return index;
    }

    while (current.next) {
      current = current.next;
      index++;
      if (current.value == value) {
        return index;
      }
    }

    return null;
  }

  toString() {
    let current = this.head;
    let stringRep = `( ${String(this.head.value)} ) -> `;

    while (current.next) {
      current = current.next;
      stringRep += `( ${String(current.value)} ) -> `;
    }

    stringRep += "null";

    return stringRep;
  }

  insertAt(value, index) {
    if (index < 1 || index > this.size + 1) {
      return alert("wrong index");
    }

    let current = this.head;
    let count = 1;

    if (index == 1) {
      this.head = { value: value, next: current };
    } else {
      while (count !== index - 1) {
        count++;
        current = current.next;
      }
      current.next = { value: value, next: current.next };
    }
  }

  removeAt(index) {
    if (index < 1 || index > this.size) {
      return alert("wrong index");
    }
    let current = this.head;
    let count = 1;

    if (index == 1) {
      this.head = this.head.next;
    } else {
      while (count !== index - 1) {
        count++;
        current = current.next;
      }

      current.next = current.next.next;
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

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
