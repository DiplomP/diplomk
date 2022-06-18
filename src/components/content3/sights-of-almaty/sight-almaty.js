import './sight-almaty.css';
import { useState } from "react";
import Sightcontent1 from './sight-almaty1';
import Sightcontent2 from './sight-almaty2';
import Sightcontent3 from './sight-almaty3';

function Sightcontent() {
	const [step, setStep] = useState(0);

	const FormTitles = ["sight-almaty1", "sight-almaty2", "sight-almaty3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Sightcontent1/>
		} else if (step === 1){
			return <Sightcontent2/>
		} else{
			return <Sightcontent3/>
		}
	}
	return (
		<div className="sight-container">
			<div className="sight-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "sight-button-hidden" : step === 1 ? "sight-button-1"    : "sight-button-1"   }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Чарынский каньон" : "Большое Алматинское озеро"}
			</button>
			<button className={step === 0 ? "sight-button-2" : step === 1 ? "sight-button-2"   : "sight-button-hidden" }
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Большое Алматинское озеро" : step === 1 ? "Горы Тянь-Шань" : ""}
			</button>
		</div>
	)
  }
  
  export default Sightcontent