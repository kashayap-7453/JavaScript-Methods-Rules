// React ke example se bind ka use 

class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:300";

    //requirement
    document
      .querySelector("button")
      .addEventListener("click", this.handeClick.
       bind(this));
  }
  handeClick() {
    console.log("button clicked");
    console.log(this);
    console.log(this);
  }
}

const app = new React();
