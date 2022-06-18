import './sight-pavlodar.css';
import { useState } from "react";
import Sightcontent41 from './sight-pavlodar1';
import Sightcontent42 from './sight-pavlodar2';
import Sightcontent43 from './sight-pavlodar3';

function Sightcontent4() {
	const [step, setStep] = useState(0);

	const FormTitles = ["sight-pavlodar1", "sight-pavlodar2", "sight-pavlodar3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Sightcontent41/>
		} else if (step === 1){
			return <Sightcontent42/>
		} else{
			return <Sightcontent43/>
		}
	}
	return (
		<div className="sight-container4">
			<div className="sight-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "sight-button-hidden" : step === 1 ? "sight-button-1"   : "sight-button-1"  }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Скала «Булка»" : "Озеро Балхаш"}
			</button>
			<button className={step === 0 ? "sight-button-2"  : step === 1 ? "sight-button-2"   : "sight-button-hidden" }
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Озеро Балхаш" : step === 1 ? "Баянаульский национальный парк" : ""}
			</button>
		</div>
	)
  }
  
  export default Sightcontent4