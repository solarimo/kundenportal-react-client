import React, { ChangeEvent, FormEvent, useState, createRef } from 'react';

import './Calculator.css';




const Calculator = (props: any) => {

  const labels: {[key: string]: {ref: React.RefObject<HTMLLabelElement>, value: number}} = {
   l1: {ref: createRef<HTMLLabelElement>(), value: 1},
   l2: {ref: createRef<HTMLLabelElement>(), value: 2},
   l3: {ref: createRef<HTMLLabelElement>(), value: 3},
   l4: {ref: createRef<HTMLLabelElement>(), value: 4},
   l5: {ref: createRef<HTMLLabelElement>(), value: 5},
  }

  const [stromverbrauch, setStromverbrauch] = useState('');

  const setStromverbrauchByPersonen = (e: FormEvent<HTMLInputElement>) => {
    const numOfId = parseInt(e.currentTarget.id[1]);
    for (const label in labels) {
      const current = labels[label].ref.current;
      if (labels[label].value <= numOfId) {
        
        current!.classList.add('active-person-label');
      } else {
        current!.classList.remove('active-person-label');
      }
      
    }
    
    setStromverbrauch(e.currentTarget.value)
  }

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    
  }

  let checkedOne = 0;
  
  return (
    <div className="calc">
      <form onChange={onChange}>
        <div className="calc-top">
          <div>
            <p className="mb-0">Personsen im Haushalt</p>
            <div className="flex-container">
              <label ref={labels.l1.ref} htmlFor="p1">
                <img src={'/icon_person.png'} alt="person-img" width="70" />
              </label>
              <input onChange={setStromverbrauchByPersonen} type="radio" id="p1" value={1500} name="person-amount" />
              <label ref={labels.l2.ref} htmlFor="p2">
                <img src={'/icon_person.png'} alt="person-img" width="70" />
              </label>
              <input onChange={setStromverbrauchByPersonen} type="radio" id="p2" value={2500} name="person-amount" />
              <label ref={labels.l3.ref} htmlFor="p3">
                <img src={'/icon_person.png'} alt="person-img" width="70" />
              </label>
              <input onChange={setStromverbrauchByPersonen} type="radio" id="p3" value={3500} name="person-amount" />
              <label ref={labels.l4.ref} htmlFor="p4">
                <img src={'/icon_person.png'} alt="person-img" width="70" />
              </label>
              <input onChange={setStromverbrauchByPersonen} type="radio" id="p4" value={4250} name="person-amount" />
              <label ref={labels.l5.ref} htmlFor="p5">
                <img src={'/icon_person.png'} alt="person-img" width="70" />
              </label>
              <input onChange={setStromverbrauchByPersonen} type="radio" id="p5" value={5000} name="person-amount" />
            </div>
          </div>
          <div>
            <p>oder Stromverbrauch (kWh/Jahr)</p>
            <input value={stromverbrauch} onChange={(e: FormEvent<HTMLInputElement>) => setStromverbrauch(e.currentTarget.value)} type="text" />
          </div>
        </div>

        <div className="calc-bottom">
        </div>
      </form>
    </div >
  )
}

export default Calculator;