class A {
    x = "a";
    y;

    constructor() {
        // console.log(this.x);
        this.y = this.x;
    }
}

class B extends A {
    x = "b";
}

const b = new B();

console.log(b.y);
