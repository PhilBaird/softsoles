import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  constructor() { }

  onecards: any = [
    {
      title: 'Soft Soles Advanced and Diabetic Foot Care Tools',
      body: 'We use the Tuttnauer EZ 11 Autoclave to sterilize our foot care instruments. Instruments are received by our nurses pre-cleaned and dry in sealed containers. The tools are then inspected and processed in an ultrasonic cleaner, rinsed, dried, and oiled. \n' +
        'Each instrument is identified by a Color Coded Strip to assure quick identification. \n' +
        'The instruments are then carefully placed in a Class Four Multi Perimeter package and sealed. \n' +
        'The packages are then ready for sterilization. ',
    },
    {
      title: 'Soft Soles Advanced and Diabetic Foot Care Autoclave',
      body: 'The autoclave machine on first use will have PCD (Process Control Device)  to test equipment and make sure it is working right. The PCD contains a Biological Indicator (BI) and a Chemical Indicator (CI).\n' +
        'The autoclave machine provides a print out after each process indicating time, temperature, and operator.\n' +
        '\n' +
        'Each package is marked with the date and load number of the process.\n' +
        'They are only released for use once the BI has cleared its control test in the incubator.\n' +
        '\n' +
        'For more information please refer to the Infection Prevention and Control Checklist \n' +
        'available through the Public Health Unit.',
      buttonTitle: 'IPC Checklist',
    },
  ];

  ngOnInit(): void {
    this.onecards.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
  }

}
