import { Component, OnInit } from '@angular/core';
import {BulletCard} from '../../components/bulletcard/bulletcard.component';
import {Card} from '../../components/card/card.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  onebullet: BulletCard[] = [{
    title: 'Services',
    buttonTitle: 'Training Courses',
    columns: 2,
    secondbody:
      'For more information or to schedule an appointment:\n' +
      '\n' +
      '(613) 621-0012',
    bullets: [
      'Lower Limb Assessment',
      'Neuropathic Treatments',
      'Nail Clipping',
      'Fungal Nail Treatments Callus and Corn relief',
      'Ingrown Toe Nails',
      'Involuted Nails',
      'Filament Testing',
      'Padding and Strapping',
      'Nail Bracin',
      'Silicon Molds',
      'Nail Reconstruction',
      'Gait Analysis',
      'Diabetic Foot Health'
    ],
  }];

  onecards: Card[] = [
    {
      title: 'Assessment Services',
      body: 'Nurses are experts in the assessment, planning, implementation and evaluation of diabetes.\n' +
        '\n' +
        'These are skills that are critical in foot care. \n' +
        '\n' +
        'Soft Soles Nurses have an in depth understanding of disease pathology and how it effects the lower limb.\n' +
        '\n' +
        'Nurses are in the best position to coordinate and address a patient\'s emerging needs and provide patient education.\n' +
        '\n' +
        'Nurses are accountable to the college of nurses of Ontario.\n' +
        '\n' +
        'Your nurse will update their knowledge and skills continually and ensure they meet established standards in all aspects of their practice and patient care.\n' +
        '\n' +
        'During your meeting with a Soft Soles nurse you are assured that the highest standards of care will be met.'
    },
    {
      title: 'Genesis Health Light: Phototherapy for the Treatment of Nail Fungus (Onychomycosis)',
      body: 'Genesis Health Light: Phototherapy for the Treatment of Toenail Fungus\n' +
        'Although onychomycosis can affect nails on the hands or feet, it is more commonly seen in a toenail. \n' +
        '\n' +
        'This is primarily due to the fact that the feet and toes spend more time in environments that promote bacteria or fungus growth i.e.: warm and moist socks/shoes.\n' +
        '\n' +
        'This treatment process uses an instrument called a Genesis Health Light laser that yields near-infrared light; this range of the light spectrum provides the properties needed to treat fungus infections and restore health to the toenails. An overview of this procedure is as follows:\n' +
        '\n' +
        'Remove the dead or contaminated nail/skin\n' +
        'Apply an anti-fungal agent to the affected area\n' +
        'Treat the area using the laser light (four minutes)\n' +
        'After-care using over-the-counter anti-fungal agents\n' +
        'Repeat the laser treatment steps again in three weeks\n' +
        '\n' +
        'Some of the specific treatment benefits of the Genesis Health Light laser are:\n' +
        'Cost-effectiveness\n' +
        'Clinical effectiveness\n' +
        'Safety (non-invasive therapy)\n' +
        '\n' +
        'To ascertain whether phototherapy with the Genesis Health Light laser is the appropriate treatment option for their particular case of toenail fungus or onychomycosis, it would be best to consult with a Soft Soles Nurse.',
    },
  ];
  twocards: Card[] = [
    {
      title: 'Nail Clipping',
      body: 'Our Foot Care treatment includes a full foot assessment, trimming and filing of the toenails and a moisturizing foot rub. Your Foot Care nurse will bring all the necessary equipment with them. Foot Care Nurses are experienced in the removal of ingrown toenails, calluses and corns as well as treatment of fungal nails.',
    },
    {
      title: 'Diabetic Foot Health',
      body: 'People who are concerned with the effects of diabetes can learn how to protect their feet during their appointment.\n' +
        '\n' +
        'Over 9 million Canadians are living with diabetes or pre-diabetes. \n' +
        'Chances are, diabetes affects you or someone you know.\n' +
        '\n' +
        'Soft Soles provides education and support for those who have just been diagnosed or are currently under physician care for diabetes.\n' +
        '\n' +
        'Education is the key to empowering yourself to be healthier, stay mobile and avoid long term health complications related to the effects of diabetes.',
    },
    {
      title: 'Billing',
      body: 'Payments can be made to Soft Soles via cheque, e-transfer, credit card, or cash. We are a recognized Veterans affair provider. Insurance covers 80% of foot care and the VA covers 100%. A physician prescription is often required annually to maintain your coverage.',
    },
  ];
  twobullet: BulletCard[] = [
    {
    title: 'Foot Care Treatments',
    columns: 2,
    firstbody: 'Soft Tissue Pathology  Nail Pathology  Structural Abnormalities',
    bullets: [
      'Callous (tylomas)',
      'Hard Corn (heloma durum)',
      'Soft Corn (heloma moile)',
      'Seed Corn (helloma millaire)',
      'Plantar Warts (verruca)',
      'Athlete\'s Foot (Tinea Pedis)',

      'Involuted Nail',
      'Ingrown Nail (Onychocryptosis)',
      'Fungal Toenail (Onychomycosis)',
      'Thick Nail (Onychauxis)',
      'Ram\'s Horn (Onychogryphosis)',

      'Bunion (Hallux Valgus)',
      'Mallet Toes',
      'Hammer Toes',
      'Claw Toes',
      'Flat Foot (Pes Planus)',
      'High Arch (Pes Cavus)'
    ],
    },
    {
      title: 'Filament Testing',
      buttonTitle: 'Book Now',
      columns: 2,
      firstbody: 'Sensitivity to touch may be tested using a soft nylon fiber called a monofilament. If you are unable to feel the filament on your feet, it is a sign that you have lost sensation in those nerves.\n' +
        '\n' +
        'Diabetic neuropathy has no known cure, although there are methods to slow the progression.\n' +
        '\n' +
        'Treatment on diabetic neuropathy focuses on:',
      bullets: [
        'Slowing progression of the disease',
        'Relieving pain',
        'Managing complications and restoring function',
        'Guide physician care',
      ],
    }
  ];

  ngOnInit(): void {
    this.onecards.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
    this.onebullet.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
    this.twobullet.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
  }

}
