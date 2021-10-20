import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  constructor() { }

  onecards: any = [
    {
      title: 'COVID-19 Impact',
      body: 'It seems like nurses and patients alike are unsure of how to proceed with the April 8th, 2021 stay home order.\n' +
        ' As registered healthcare providers, we are professionals and are therefore accountable for the decisions we make. \n' +
        'The Stay Home Order excludes health care workers. \n' +
        'The College of Chiropodists of Ontario (COCOO) and the Chief Medical Officer advised registered health care providers to reduce care to required visits that could not be delayed, rescheduled, or otherwise dealt with (online or in-home care) \n' +
        'Each nurse must exercise their best judgment to reduce risk to the patient.\n' +
        '\n' +
        'At Soft Soles, we are checking with the Managers of the RH and LTC homes that we serve to ensure they are aware of our next service dates.\n' +
        '\n' +
        'Patients that have diabetes, neuropathy, and peripheral vascular disease should not postpone their appointments as they are at risk of infection, ulceration, skin breakdown, and infected ingrown toenails.\n',
    },
    {
      body: 'Please contact our office to ask about our strict COVID measures.\n' +
        '\n' +
        '​For patients that do need to come into the office or see a nurse in their home, here is a list of ways we are keeping you safe and in a clean environment:\n' +
        '\n' +
        'In the Clinic\n' +
        '1. All new patients are asked to fill in forms online or ask your nurse to help you fill out the forms to eliminate the use of pen/paper.\n' +
        '2. The schedule is spaced so that no two patients are in the office simultaneously.\n' +
        '3. Patients are asked to wait in the car and call upon arrival. The nurse will tell you when she is ready to begin the visit.\n' +
        '4. Patients are encouraged to wear a simple surgical mask or a homemade mask during the appointment.\n' +
        '5. Nurses will wear a mask, goggles or face shield, a gown, and gloves at all times.\n' +
        '6. After the visit, your nurse thoroughly cleans and wipes all surfaces with disinfectant spray and wipes.\n' +
        '\n' +
        'In-Home Care\n' +
        '1. The nurse will ask you to leave the door unlocked just before the appointment. Please do not wait at the door.\n' +
        '2. Your nurse will arrive wearing a mask and will put on a gown, gloves, and face shield or goggles inside the home when she arrives.\n' +
        '3. After your treatment, the nurse will clean the work area and discard the gown and gloves. Please have a garbage bag handy.',
    },
    {
      title: 'Policy Updates ',
      body: 'Nurses will continue to use gown, gloves, and N95 masks during care and clean equipment between patient care; as is our policy.\n' +
        '\n' +
        'Soft Soles is dedicated to protecting the public and our vulnerable populations. \n' +
        'We will be continuing to practice best practices in infection control for patient care and making changes to our public clinics to reduce contact in wait r​ooms.​\n' +
        'Do you have cough, fever, that is accompanied by headache?\n' +
        'Re-schedule your appointment after a 2 week self-monitoring period.\n' +
        'If you have been in contact with or traveled outside of the country within the 2 weeks prior to your appointment \n' +
        'Re-schedule your appointment after a 2 week self-monitoring period.',
    },
    {
      body: '\n' +
        'The Soft Soles Advanced Diabetic Foot Care Team is currently monitoring the COVID-19 news very carefully and will be following the advice of the local, provincial, and federal health authorities as well as guidance from our College of Nurses of Ontario.',
    },
  ];

  ngOnInit(): void {
  }

}
