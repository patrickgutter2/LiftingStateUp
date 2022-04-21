import React from "react"
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import ToCelsius from "./ToCelsius";
import ToFahrenheit from "./ToFahrenheit";
import TryConvert from "./TryConvert";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? TryConvert(temperature, ToCelsius) : temperature;
        const fahrenheit = scale === 'c' ? TryConvert(temperature, ToFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput 
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput 
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}
export default Calculator