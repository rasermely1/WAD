class TextChanger {
    constructor (buttonId, paragraphId) {
        this.button = document.getElementById(buttonId);
        this.paragraph = document.getElementById(paragraphId);
        this.originalText = this.paragraph.textContent;

        this.button.addEventListener("click", () => this.toggleText());
    }

    toggleText() {
        if (this.paragraph.textContent === "Working!") {
            this.paragraph.textContent = this.originalText;
        } 
        else {
            this.paragraph.textContent = "Working!";
        }
    }
}

const textChanger = new TextChanger("myButton", "intro");
