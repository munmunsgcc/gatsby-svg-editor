const w = window;
const doc = document;

class Edit {
  constructor() {
    this.canvas = doc.getElementById('canvas');
  }

  circle = (cx = 10, cy = 10, r = 10) => {
    const circle = doc.createElement('circle');

    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', r);

    this.canvas.appendChild(circle);
  }

  clear = () => {
    this.canvas.innerHTML = '';
  }
}

w.Edit = new Edit();
