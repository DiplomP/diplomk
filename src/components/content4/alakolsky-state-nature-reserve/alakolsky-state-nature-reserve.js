import './alakolsky-state-nature-reserve.css';
import { useState } from "react";
import Alakolsky1 from './alakolsky1';
import Alakolsky2 from './alakolsky2';
import Alakolsky3 from './alakolsky3';

function Alakolsky() {
	const [step, setStep] = useState(0);

	const FormTitles = ["alakolsky1", "alakolsky2", "alakolsky3"];

	const StepDisplay = () =>{
		if (step === 0){
			return <Alakolsky1/>
		} else if (step === 1){
			return <Alakolsky2/>
		} else{
			return <Alakolsky3/>
		}
	}
	return (
		<div className="nature-container">
			<div className="nature-container-all">{StepDisplay()}</div>
			<button className={step === 0 ? "nature-button-hidden" : step === 1 ? "nature-button-1"  : "nature-button-1" }
			disabled={step === 0}
			onClick={() => {
				setStep((currStep) => currStep - 1);
			}}>
				{step === 0 ? "" : step === 1 ? "Алакольский государственный природный заповедник" : "Кургальджинский заповедник"}
			</button>
			<button className={step === 0 ? "nature-button-2" : step === 1 ? "nature-button-2"  : "nature-button-hidden" }
			disabled={step === FormTitles.length - 1}
			onClick={() => {
				setStep((currStep) => currStep + 1);
			}}> {step === 0 ? "Кургальджинский заповедник" : step === 1 ? "Каратауский заповедник" : ""}
			</button>
		</div>
	)
  }
  
  export default Alakolsky