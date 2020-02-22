module scenes
{

    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private rollMachine: createjs.Container;
        private background: createjs.Bitmap;
        private rollButton: objects.Button;
        private dice1: objects.GameObject;
        private dice2: objects.GameObject;
        private lblDice1: objects.Label;
        private lblDice2: objects.Label;
        private randomnumber: string[];
        private randomnumberval1: string;
        private randomnumberval2: string;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            console.log('Came to constructor');
            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {                 
            console.log('Came to start');       
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {            
            //Creating the container
            console.log('Came main');
            this.rollMachine = new createjs.Container();
            this.rollMachine.x = 132.5;
            this.rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this.rollMachine.addChild(this.rollButton);

            this.dice1 = new objects.Button(config.Game.ASSETS.getResult("one"),10,50,false);
            this.rollMachine.addChild(this.dice1);

            this.dice2 = new objects.Button(config.Game.ASSETS.getResult("one"),250,50,false);
            this.rollMachine.addChild(this.dice2);

            this.lblDice1 = new objects.Label("val1","12px","Consolas", "000000", 10, 270);
            this.rollMachine.addChild(this.lblDice1);

            this.lblDice2 = new objects.Label("val2","12px","Consolas", "000000", 250, 270);
            this.rollMachine.addChild(this.lblDice2);

            //staging the container
            this.addChild(this.rollMachine);
            this.addChild(this);
            //event listners
            this.rollButton.on("click", this.rollButtonClick, this);
        }

        //event handlers

        private rollButtonClick() {
            this.randomnumber = this.reels();
            this.dice1 = new objects.Button(config.Game.ASSETS.getResult(this.randomnumber[0]),10,50,false);
            this.rollMachine.addChild(this.dice1);

            this.dice2 = new objects.Button(config.Game.ASSETS.getResult(this.randomnumber[1]),250,50,false);
            this.rollMachine.addChild(this.dice2);

            switch(this.randomnumber[0])
            {
                case "one": this.randomnumberval1 = '1';
                    break;
                    case "two": this.randomnumberval1 = '2';
                        break;
                        case "three": this.randomnumberval1 = '3';
                            break;
                            case "four": this.randomnumberval1 = '4';
                                break;
                                case "five": this.randomnumberval1 = '5';
                                    break;
                                    
                case "six": this.randomnumberval1 = '6';
                break;
                    
            }

            switch(this.randomnumber[1])
            {
                case "one": this.randomnumberval2 = '1';
                    break;
                    case "two": this.randomnumberval2 = '2';
                        break;
                        case "three": this.randomnumberval2 = '3';
                            break;
                            case "four": this.randomnumberval2 = '4';
                                break;
                                case "five": this.randomnumberval2 = '5';
                                    break;
                                    
                case "six": this.randomnumberval2 = '6';
                break;
                    
            }

            this.lblDice1.setText(this.randomnumberval1);
            this.lblDice2.setText(this.randomnumberval2);
        }

        private checkRange(value: number, lowerBounds: number, upperBounds: number): any {
            if (value >= lowerBounds && value <= upperBounds) {
                return value;
            } else {
                return !value;
            }
        }

        private reels(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outCome[spin] = Math.floor((Math.random() * 60) + 1);
                switch (outCome[spin]) {
                    case this.checkRange(outCome[spin], 1, 10): // 41.5% probability
                        betLine[spin] = "one";
                        break;
                    case this.checkRange(outCome[spin], 20, 30): // 15.4% probability
                        betLine[spin] = "two";
                        break;
                    case this.checkRange(outCome[spin], 30, 40): // 13.8% probability
                        betLine[spin] = "three";
                        break;
                    case this.checkRange(outCome[spin], 40, 50): // 12.3% probability
                        betLine[spin] = "four";
                        break;
                    case this.checkRange(outCome[spin], 50, 60): //  7.7% probability
                        betLine[spin] = "five";
                        break;
                    case this.checkRange(outCome[spin], 10, 20): //  4.6% probability
                        betLine[spin] = "six";
                        break;
                }
            }
            return betLine;
        }
    }
}