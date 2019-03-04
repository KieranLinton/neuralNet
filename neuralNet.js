/* eslint-env es6 */

class neuralNet {
    constructor(FirstLayerAmount, SecondLayerAmount, ThirdLayerAmounts) {
        this.layer1 = genarateArray(FirstLayerAmount, 0);
        this.layer2 = genarateArray(SecondLayerAmount, 0);
        this.layer3 = genarateArray(ThirdLayerAmounts, 0);

        this.layer1Bias = genarateArray(FirstLayerAmount, 0);
        this.layer2Bias = genarateArray(SecondLayerAmount, 0);
        this.layer3Bias = genarateArray(ThirdLayerAmounts, 0);

        this.waights_1_2 = genarateMatrix(SecondLayerAmount, FirstLayerAmount, 0);
        this.waights_2_3 = genarateMatrix(ThirdLayerAmounts, SecondLayerAmount, 0);

        this.randomize();
    }
    randomize() {
        randomizeArray(this.layer1Bias, 2);
        randomizeArray(this.layer2Bias, 2);
        randomizeArray(this.layer3Bias, 2);
        
        randomizeMatrix(this.waights_1_2, 3);
        randomizeMatrix(this.waights_2_3, 3);
    }
    calculate(){
        
    }
}
