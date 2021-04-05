class Question{
    constructor(){
        this.nameInput = createInput("name");
        this.answerInput = createInput("answer")
        this.question = createElement('h2');
        this.title = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
    }
    hide(){
        this.nameInput.hide();
        this.answerInput.hide();
        this.title.hide();
    }

    display(){
        this.title.html("My Quiz Game!");
        this.title.position(350,0);

        this.question.html("What starts and ends with an e, but only has one letter?");
        this.question.position(150,80);

        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        
        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.answerInput.position(150,230);

        
        
    }
}
